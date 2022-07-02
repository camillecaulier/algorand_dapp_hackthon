import { loadStdlib } from '@reach-sh/stdlib';
import * as backend from './build/index.main.mjs';
import { ask } from '@reach-sh/stdlib';
//import { ALGO_WalletConnect as WalletConnect } from '@reach-sh/stdlib';


if (process.argv.length < 3 || ['owner', 'customer', 'admin'].includes(process.argv[2]) == false) {
  console.log('Usage: reach run index [owner|customer|admin]');
  process.exit(0);
}

const role = process.argv[2];
console.log(`Your role is ${role}.`);

const stdlib = loadStdlib(process.env);
console.log(`The consensus network is ${stdlib.connector}.`);

var leaving = false;

//stdlib.setWalletFallback(stdlib.walletFallback({
  //providerEnv: 'TestNet', WalletConnect }));

//stdlib.setProviderByName('TestNet');

//should we add a timeout?
//use clawback?

const toAU = (su) => stdlib.parseCurrency(su);
const toSU = (au) => stdlib.formatCurrency(au, 4);
const suStr = stdlib.standardUnit;
const auStr = stdlib.atomicUnit;
const showBalance = async (acc) => console.log(`Your balance is ${toSU(await stdlib.balanceOf(acc))} ${suStr}.`);
const startingBalance = stdlib.parseCurrency(100); //converted to microAlgos

var theNFT;


const commonInteract = (role) => ({
  reportCancellation: () => { 
    console.log("");
    console.log(`${role == 'customer' ? 'You' : 'The customer'} cancelled the purchase.`); 
  },
  reportPayment: (payment) => { 
    console.log(`${role == 'customer' ? 'You' : 'The customer'} paid ${toSU(payment)} ${suStr} to the contract.`) 
  },
  reportTransfer: (payment) => { console.log(`The contract paid ${toSU(payment)} ${suStr} to ${role == 'owner' ? 'you' : 'the owner'}.`) },
});

// Owner of the NFT
if (role === 'owner') {
  
  const accO = await stdlib.newTestAccount(startingBalance);
  await showBalance(accO);
  console.log("");

  const ctc = accO.contract(backend);

  const ownerInteract = {
    ...commonInteract(role),
    reportFee: (fee) => console.log(`The fee for uploading your card is ${fee} %.`),
    price: async () => await ask.ask(`How much are you selling your card for (in ${suStr}) ? :`, (res) => (res)),
    name: async () => await ask.ask(`What is the name of your card ? :`, (a) => {return a;}),
    size: async () =>  await ask.ask(`What is the size of your card ? :`, (a) => {return a;}),
    calculateFee: (fee, lenInBlocks) => {
      const feeSum = fee/100*lenInBlocks;
      console.log(`You have to pay ${feeSum} ${suStr} to upload your card.`);
      return feeSum;
    },
    getSale: async (name) => {

      console.log("");

      console.log(`Uploading Yu-Gi-Oh card...`);
      theNFT = await stdlib.launchToken(accO, name, "NFT", { supply: 1 });
      console.log("Upload succesful!")

      console.log("");

      return [ theNFT.id, stdlib.parseCurrency(price), size, name ]
    },
    reportReady: async (price) => {
      console.log(`Your Yu-Gi-Oh card is for sale at ${toSU(price)} ${suStr}.`);
      console.log(`Contract info: ${JSON.stringify(await ctc.getInfo())}`);
    },
    reportRetrieval: () => {console.log("The card is your possession.");},
  };

  await ctc.participants.Owner(ownerInteract);
  await showBalance(accO);

// Customer (can be buying or lending)
} else if (role === 'customer') {
  const acc = await stdlib.newTestAccount(startingBalance);
  const info = await ask.ask('Paste contract info:', (s) => JSON.parse(s));

  const customerInteract = {
    ...commonInteract(role),
    seeParams: async (name, nftId, reservePrice) => {
      console.log(`The card is ${name} (id number ${nftId}) and the price is ${stdlib.formatCurrency(reservePrice)}.`);
      await acc.tokenAccept(nftId);
    },
    confirmPurchase: async (price) => {
      const buy = await ask.ask(`Do you want to purchase this card for ${toSU(price)} ${suStr}?`, ask.yesno);
      return buy;
    },
    leave: async () => {
      //await theNFT.optOut(acc);
      leaving = true;},
    reportCard: (card) => console.log(`You can now use your new ${card} card !`),
  };
  
  const ctc = acc.contract(backend, info);
  await showBalance(acc);
  console.log("");
  await ctc.p.Customer(customerInteract);


  await showBalance(acc);
} else { //administrator (needs to get a fee for people using the website)
  const adminInteract = {
    ...commonInteract,
    publishFee: await ask.ask(`What percentage would you like for the fee ? (in %)`, (a) => (a))
  };

  const acc = await stdlib.newTestAccount(startingBalance);
  const info = await ask.ask('Paste contract info:', (s) => JSON.parse(s));
  const ctc = acc.contract(backend, info);
  await showBalance(acc);
  console.log("");
  await ctc.p.Administrator(adminInteract);
};

ask.done();


