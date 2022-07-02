'reach 0.1';

const commonInteract = {
  reportCancellation: Fun([], Null),
  reportTransfer: Fun([UInt], Null),
  reportPayment: Fun([UInt], Null),
};

const Params = Tuple(Token, UInt, UInt);

const ownerInteract = {
  ...commonInteract,
  
  getSale: Fun([], Params),
  reportReady: Fun([UInt], Null),
};
const customerInteract = {
  ...commonInteract,
  seeParams: Fun([Token, UInt], Null),
  confirmPurchase: Fun([UInt], Bool),
  reportCard: Fun([Bytes(128)], Null)
};
const adminInteract = {
  ...commonInteract,
};

export const main = Reach.App(() => {
  const O = Participant('Owner', ownerInteract);
  const C = Participant('Customer', customerInteract);
  const A = Participant('Administrator', adminInteract);
  init();

  O.only(() => { 
    const [ nftId, reservePrice, lenInBlocks ] = declassify(interact.getSale());
  }); //get the params and create NFT
  
  O.publish(nftId, reservePrice, lenInBlocks);
  O.interact.reportReady(reservePrice);
  commit();

  O.pay([[1, nftId]]); //the NFT is in the contract
  commit();

  C.only(() => { 
    interact.seeParams(nftId, reservePrice);
    const willBuy = declassify(interact.confirmPurchase(reservePrice)); 
  });
  C.publish(willBuy);
  if (!willBuy) {
    commit();
    //each([O, C], () => interact.reportCancellation());

    //exit();
  } else {
    commit();
  }
  C.pay(reservePrice);
  each([O, C], () => interact.reportPayment(reservePrice));
  commit();
  O.publish(); //to change
  transfer(reservePrice).to(O);
  transfer([[1, nftId]]).to(C);
  commit();

  exit();
})