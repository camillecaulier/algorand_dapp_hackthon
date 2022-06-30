import { loadStdlib } from '@reach-sh/stdlib';
import * as backend from './build/index.main.mjs';
import { ask } from '@reach-sh/stdlib';

if (process.argv.length < 3 || ['owner', 'customer', 'admin'].includes(process.argv[2]) == false) {
  console.log('Usage: reach run index [owner|customer|admin]');
  process.exit(0);
}

const role = process.argv[2];
console.log(`Your role is ${role}.`);

const stdlib = loadStdlib(process.env);
console.log(`The consensus network is ${stdlib.connector}.`);


const toAU = (su) => stdlib.parseCurrency(su);
const toSU = (au) => stdlib.formatCurrency(au, 4);
const suStr = stdlib.standardUnit;
const auStr = stdlib.atomicUnit;
const showBalance = async (acc) => console.log(`Your balance is ${toSU(await stdlib.balanceOf(acc))} ${suStr}.`);
const startingBalance = stdlib.parseCurrency(100); //converted to microAlgos

const commonInteract = (role) => ({
  reportCancellation: () => { console.log(`${role == 'customer' ? 'You' : 'The customer'} cancelled the purchase.`); },
  reportPayment: (payment) => { console.log(`${role == 'buyer' ? 'You' : 'The buyer'} paid ${toSU(payment)} ${suStr} to the contract.`) },
  reportTransfer: (payment) => { console.log(`The contract paid ${toSU(payment)} ${suStr} to ${role == 'seller' ? 'you' : 'the seller'}.`) },
});

// Owner of the NFT
if (role === 'owner') {
  const ownerInteract = {
    ...commonInteract(role),
    price: toAU(5),
    //change 'card' to create NFT and put it up
    card: await ask.ask('Enter a wise phrase, or press Enter for default:', (s) => { 
      let w = !s ? 'Build healthy communities.' : s;
      if (!s) { console.log(w); }
      return w;
      }),
    reportReady: async (price) => {
      console.log(`Your Yu-Gi-Oh card is for sale at ${toSU(price)} ${suStr}.`);
      console.log(`Contract info: ${JSON.stringify(await ctc.getInfo())}`);
    },
  };

  const accO = await stdlib.newTestAccount(startingBalance);
  await showBalance(accO);
  const ctc = accO.contract(backend);
  await ctc.participants.Owner(ownerInteract);
  await showBalance(accO);

// Customer (can be buying or lending)
} else if (role === 'customer') {
  const customerInteract = {
    ...commonInteract(role),
    confirmPurchase: async (price) => await ask.ask(`Do you want to purchase this card for ${toSU(price)} ${suStr}?`, ask.yesno),
    reportCard: (card) => console.log(`Your new card is "${card}"`),
  };
  const acc = await stdlib.newTestAccount(startingBalance);
  const info = await ask.ask('Paste contract info:', (s) => JSON.parse(s));
  const ctc = acc.contract(backend, info);
  await showBalance(acc);
  await ctc.p.Customer(customerInteract);
  await showBalance(acc);
} else { //administrator (needs to get a fee for people using the website)
  const adminInteract = {
    ...commonInteract,
  };
};

ask.done();


