'reach 0.1';

const commonInteract = {
  reportCancellation: Fun([], Null),
  reportTransfer: Fun([UInt], Null),
  reportPayment: Fun([UInt], Null),
};

const Params = Tuple(Token, UInt, UInt, Bytes(128));

const ownerInteract = {
  ...commonInteract,
  reportFee: Fun([UInt], Null),
  price: Fun([],UInt),
  name: Fun([], Bytes(128)),
  size: Fun([],UInt),
  calculateFee: Fun([UInt, UInt], UInt),
  getSale: Fun([Bytes(128)], Token),
  reportReady: Fun([UInt], Null),
  reportRetrieval: Fun([], Null),
};
const customerInteract = {
  ...commonInteract,
  seeParams: Fun([Bytes(128), Token, UInt], Null),
  confirmPurchase: Fun([UInt], Bool),
  leave: Fun([], Null),
  reportCard: Fun([Bytes(128)], Null)
};
const adminInteract = {
  ...commonInteract,
  publishFee: Fun([], UInt),
};

export const main = Reach.App(() => {
  const O = Participant('Owner', ownerInteract);
  const C = Participant('Customer', customerInteract);
  const A = Participant('Administrator', adminInteract);
  init();

  A.only(() => {const fee = declassify(interact.publishFee());});
  A.publish(fee);
  commit();

  O.only(() => { 
    const reservePrice = declassify(interact.price());
    const name = declassify(interact.name());
    const lenInBlocks = declassify(interact.size());


    const nftId = declassify(interact.getSale(name));
  }); //get the params and create NFT

  O.publish(nftId, reservePrice, lenInBlocks, name);

  O.only(() => {
    interact.reportReady(reservePrice);
    interact.reportFee(fee);
    const feeSum = declassify(interact.calculateFee(fee, lenInBlocks));
  });
  
  commit();

  //pay for the upload

  O.pay([[1, nftId]]); //the NFT is in the contract
  commit();

  C.only(() => { 
    interact.seeParams(name, nftId, reservePrice);
    const willBuy = declassify(interact.confirmPurchase(reservePrice)); 
  });
  C.publish(willBuy);
  if (!willBuy) {
    commit();
    C.only(() => { //to opt out
      interact.leave();
    })
    each([O, C], () => interact.reportCancellation());
    O.publish();
    transfer([[1, nftId]]).to(O); //give NFT back to owner
    O.only(() => {interact.reportRetrieval();})
    commit();
    exit();
  } else {
    commit();
  }
  C.pay(reservePrice);
  each([O, C], () => interact.reportPayment(reservePrice));
  transfer(reservePrice).to(O);
  each([O, C], () => interact.reportTransfer(reservePrice));
  transfer([[1, nftId]]).to(C);
  C.only(() => interact.reportCard(name));
  commit();

  exit();
})