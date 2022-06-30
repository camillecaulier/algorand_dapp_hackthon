'reach 0.1';

const commonInteract = {
  reportCancellation: Fun([], Null),
  reportTransfer: Fun([UInt], Null),
  reportPayment: Fun([UInt], Null),
};

const ownerInteract = {
  ...commonInteract,
  price: UInt,
  card: Bytes(128),
  reportReady: Fun([UInt], Null),
};
const customerInteract = {
  ...commonInteract,
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

  O.only(() => { const price = declassify(interact.price); });
  O.publish(price);
  O.interact.reportReady(price);
  commit();

  C.only(() => { const willBuy = declassify(interact.confirmPurchase(price)); });
  C.publish(willBuy);
  if (!willBuy) {
    commit();
    each([O, C], () => interact.reportCancellation());
    exit();
  } else {
    commit();
  }
  C.pay(price);
  each([O, C], () => interact.reportPayment(price));
  commit();
  O.only(() => { const wisdom = declassify(interact.card); });
  O.publish(wisdom);
  transfer(price).to(O);
  commit();

  exit();
})