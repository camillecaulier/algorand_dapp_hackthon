'reach 0.1';

const commonInteract = {
    reportFeeTransfer: Fun([UInt], Null),
    reportReady: Fun([UInt], Null),
    reportPayment: Fun([UInt], Null),
    reportTransfer: Fun([], Null),
}

const adminInteract = {
    ...commonInteract,
    publishContract: Fun([], Null),
    publishFee: Fun([], UInt),
}

const Params = Tuple(Bytes(32), UInt, UInt);

const ownerInteract = {
    ...commonInteract,
    communicateFee: Fun([], UInt),
    upload: Fun([], Token),
    reportUpload: Fun([], Params),
}

const customerInteract = {
    ...commonInteract,
    reportPurchase: Fun([Bytes(32)], Null),
}

export const main = Reach.App(() => {
    const O = Participant('Owner', ownerInteract);
    const C = Participant('Customer', customerInteract);
    const A = Participant('Administrator', adminInteract);

    const V = View('Main', { feePer: UInt });

    const vNFT = View('NFT', {owner: Address, id: Token, title: Bytes(32), price: UInt, size: UInt });

    init();

    //Administrator publishes fee
    A.only(() => {
        const fee = declassify(interact.publishFee());
        //interact.publishContract();
    });
    A.publish(fee);
    V.feePer.set(fee); //the owner can see the fee
    commit();
    A.interact.publishContract();
    
    //we suppose the owner has accepted to upload the NFT
    //pay the upload fee
    O.only(() => {
        const feeSum = declassify(interact.communicateFee());
    });
    O.publish(feeSum);
    commit();
    O.pay(feeSum);
    transfer(feeSum).to(A); //fee transferred from contract to admin
    commit();

    //report fee transfer
    each([O, A], () => interact.reportFeeTransfer(feeSum));

    //do upload and retrieve id of NFT
    O.only(() => {
        const nftId = declassify(interact.upload());
    })

    //pay the NFT to the contract
    O.publish(nftId);
    commit();
    O.pay([[1, nftId]])
    commit();

    //report succesful upload and retrieve details of NFT
    O.only(() => {
        const [title, price, size] = declassify(interact.reportUpload());
    });

    //publish information regarding NFT
    O.publish(title, price, size);
    commit();
    O.publish();

    //set view of NFT -> customer can see details of NFT
    vNFT.owner.set(O);
    vNFT.id.set(nftId);
    vNFT.title.set(title);
    vNFT.price.set(price);
    vNFT.size.set(size);
    commit();

    each([O, A], () => interact.reportReady(price));

    //we suppose the customer wants to buy the card
    C.pay(price); //customer pays to the transaction
    each([O, C], () => interact.reportPayment(price));
    transfer(price).to(O); //owner receives the payment
    each([O, C], () => interact.reportTransfer());
    transfer([[1, nftId]]).to(C); //customer receives card
    C.only(() => interact.reportPurchase(title));
    commit();

    exit()

});