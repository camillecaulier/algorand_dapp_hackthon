import { loadStdlib } from "@reach-sh/stdlib";
//import { ALGO_MyAlgoConnect as MyAlgoConnect } from '@reach-sh/stdlib';
import * as backend from "./build/index.main.mjs";
import { ask } from "@reach-sh/stdlib";

//Handle execution arguments
// if (process.argv.length < 3 || ['owner', 'customer', 'admin'].includes(process.argv[2]) == false) {
//   console.log('Usage: reach run index [owner|customer|admin]');
//   process.exit(0);
// }

//functions for handling (representations of) currencies
const toAU = (su) => stdlib.parseCurrency(su);
const toSU = (au) => stdlib.formatCurrency(au, 4);
const suStr = stdlib.standardUnit;
const auStr = stdlib.atomicUnit;

const showBalance = async (acc) =>
  console.log(`Your balance is ${toSU(await stdlib.balanceOf(acc))} ${suStr}.`);

const commonInteract = {
  reportFeeTransfer: (feeSum) => {
    console.log(`The owner paid ${toSU(feeSum)} ${suStr} for the upload.`);
  },
  reportReady: (price) => {
    //card has been published for viewing by customers
    console.log(
      `A new Yu-Gi-Oh card is now for sale at ${toSU(price)} ${suStr}.`
    );
  },
  reportPayment: (price) => {
    console.log(`THe customer paid ${toSU(price)} ${suStr} for the card.`);
  },
  reportTransfer: () => {
    console.log(`The owner received the payment.`);
  },
};

async function adminRun(feeToGive) {
  const toAU = (su) => stdlib.parseCurrency(su);
  const toSU = (au) => stdlib.formatCurrency(au, 4);
  const suStr = stdlib.standardUnit;
  const auStr = stdlib.atomicUnit;

  const showBalance = async (acc) =>
    console.log(
      `Your balance is ${toSU(await stdlib.balanceOf(acc))} ${suStr}.`
    );

  const role = "admin";
  console.log(`Your role is ${role}.`);

  const stdlib = loadStdlib(process.env);
  //stdlib.setWalletFallback(stdlib.walletFallback({providerEnv: 'TestNet', MyAlgoConnect }));
  stdlib.setProviderByName("TestNet");
  console.log(`The consensus network is ${stdlib.connector}.`);

  //const startingBalance = stdlib.parseCurrency(5); //converted to microAlgos
  //const acc = await stdlib.newTestAccount(100);
  //const secret = await ask.ask(`What is your account secret?`, (x => x));
  //const acc = await stdlib.newTestAccount(stdlib.parseCurrency(0.1));

  const acc = await stdlib.newAccountFromMnemonic(
    //TODO change here later
    "enforce captain dad public coffee maple still stereo outdoor whip shuffle inflict health oval embrace civil city marble barrel argue top broccoli report abstract rice"
  );
  //console.log(acc);
  const ctc = acc.contract(backend); //creating the contract
  await showBalance(acc);
  console.log("");

  //const fee = await ask.ask(`What percentage would you like for the fee ? (in %)`, (a) => (a));
  const constantFee = feeToGive;
  const adminInteract = {
    ...commonInteract,
    publishContract: async () => {
      console.log(`Contract info: ${JSON.stringify(await ctc.getInfo())}`);
    },
    publishFee: async () => {
      return constantFee;
    },
  };

  await ctc.p.Administrator(adminInteract); //deploy the contract

  await showBalance(acc);
}
async function runOwner(contractInfo, cardName, Price, image) {
  const role = process.argv[2];
  console.log(`Your role is ${role}.`);

  const stdlib = loadStdlib(process.env);
  //stdlib.setWalletFallback(stdlib.walletFallback({providerEnv: 'TestNet', MyAlgoConnect }));
  stdlib.setProviderByName("TestNet");
  console.log(`The consensus network is ${stdlib.connector}.`);

  //functions for handling (representations of) currencies
  const toAU = (su) => stdlib.parseCurrency(su);
  const toSU = (au) => stdlib.formatCurrency(au, 4);
  const suStr = stdlib.standardUnit;
  const auStr = stdlib.atomicUnit;
  const showBalance = async (acc) =>
    console.log(
      `Your balance is ${toSU(await stdlib.balanceOf(acc))} ${suStr}.`
    );
  const startingBalance = stdlib.parseCurrency(5); //converted to microAlgos

  const acc = await stdlib.newAccountFromMnemonic(
    "resemble excuse economy protect brown return twenty library river page like enable sight height bottom novel foam purse ball boost basket toy excess above marriage"
  );
  //const faucet = await stdlib.getFaucet();
  //stdlib.transfer(faucet, acc, stdlib.parseCurrency(5));
  await showBalance(acc);
  console.log("");
  const info = await ask.ask("Paste contract info:", (s) => JSON.parse(s));
  const ctc = acc.contract(backend, info); //retrieve contract deployed by admin

  //check fee (percentage) published by admin
  const maybeFee = await ctc.views.Main.feePer();
  const fee = maybeFee[0] == "None" ? 0 : maybeFee[1];

  //ask for title, price and size
  const title = await ask.ask(`What is the name of your card ? :`, (a) => {
    return a;
  });
  const price = await ask.ask(
    `How much are you selling your card for (in ${suStr}) ? :`,
    (res) => res
  );
  const size = 2;
  // const size = await ask.ask(`What is the size of your card ? :`, (a) => {
  //   return a;
  // }); //Has to be a number

  //calculate fee to pay for uploading
  const feeSum = Math.floor((fee / 100) * size);

  //ask if upload or not
  const shouldUpload = await ask.ask(
    `Do you you want to upload your card for ${feeSum} ${suStr} ? `,
    ask.yesno
  );

  //Uploading procedure
  if (shouldUpload) {
    //define interactions
    const ownerInteract = {
      ...commonInteract,
      communicateFee: async () => {
        return stdlib.parseCurrency(feeSum);
      }, //give fee to backend for payment
      upload: async () => {
        console.log(`Uploading your card...`);
        const theNFT = await stdlib.launchToken(acc, title, "NFT", {
          supply: 1,
        });
        return theNFT.id;
      },
      reportUpload: () => {
        //card was given to the contract
        console.log("Upload succesful!");
        return [title, stdlib.parseCurrency(price), size];
      },
    };
    //connect to the contract
    await ctc.participants.Owner(ownerInteract); //owner enters the contract
    await showBalance(acc);
  } else {
    console.log(`You canceled the upload.`);
  }
}

async function runCustomer(contractInfo) {
  const role = process.argv[2];
  console.log(`Your role is ${role}.`);

  const stdlib = loadStdlib(process.env);
  //stdlib.setWalletFallback(stdlib.walletFallback({providerEnv: 'TestNet', MyAlgoConnect }));
  stdlib.setProviderByName("TestNet");
  console.log(`The consensus network is ${stdlib.connector}.`);

  //functions for handling (representations of) currencies
  const toAU = (su) => stdlib.parseCurrency(su);
  const toSU = (au) => stdlib.formatCurrency(au, 4);
  const suStr = stdlib.standardUnit;
  const auStr = stdlib.atomicUnit;
  const showBalance = async (acc) =>
    console.log(
      `Your balance is ${toSU(await stdlib.balanceOf(acc))} ${suStr}.`
    );
  const startingBalance = stdlib.parseCurrency(5); //converted to microAlgos

  const acc = await stdlib.newAccountFromMnemonic(
    "enforce captain dad public coffee maple still stereo outdoor whip shuffle inflict health oval embrace civil city marble barrel argue top broccoli report abstract rice"
  );
  await showBalance(acc);
  console.log("");
  const info = await ask.ask("Paste contract info:", (s) => JSON.parse(s));
  var ctc = acc.contract(backend, info); //retrieve contract deployed by admin

  var hm = await ctc.views.NFT.owner();
  console.log(hm);
  console.log(hm[0]);
  console.log(hm[1]);

  while (hm[0] === "None") {
    ctc = acc.contract(backend, info);
    var hm = await ctc.views.NFT.owner();
    if (hm[0] != "None") break;
  }

  //check details of available card
  const maybeOwner = await ctc.views.NFT.owner();
  const owner = maybeOwner[0] == "None" ? 0 : maybeOwner[1];
  const maybeId = await ctc.views.NFT.id();
  const id = maybeId[0] == "None" ? 0 : maybeId[1];
  const maybeTitle = await ctc.views.NFT.title();
  const title = maybeTitle[0] == "None" ? 0 : maybeTitle[1];
  const maybePrice = await ctc.views.NFT.price();
  const price = maybePrice[0] == "None" ? 0 : maybePrice[1];
  const maybeSize = await ctc.views.NFT.size();
  const size = maybeSize[0] == "None" ? 0 : maybeSize[1];

  return acc;
}
async function confirmBuy(acc) {
  const role = process.argv[2];
  console.log(`Your role is ${role}.`);

  const stdlib = loadStdlib(process.env);
  //stdlib.setWalletFallback(stdlib.walletFallback({providerEnv: 'TestNet', MyAlgoConnect }));
  stdlib.setProviderByName("TestNet");
  console.log(`The consensus network is ${stdlib.connector}.`);

  //functions for handling (representations of) currencies
  const toAU = (su) => stdlib.parseCurrency(su);
  const toSU = (au) => stdlib.formatCurrency(au, 4);
  const suStr = stdlib.standardUnit;
  const auStr = stdlib.atomicUnit;
  const showBalance = async (acc) =>
    console.log(
      `Your balance is ${toSU(await stdlib.balanceOf(acc))} ${suStr}.`
    );
  const startingBalance = stdlib.parseCurrency(5); //converted to microAlgos

  console.log(`A new card is available! Here are the details:`);
  console.log("");
  console.log(`Name : ${title}`);
  console.log(`Price : ${toSU(price)} ${suStr}`);
  console.log(`Size : ${size}`);
  console.log(`ID : ${id}`);
  console.log(`Owned by : ${owner}`);
  console.log("");
  const shouldBuy = await ask.ask(
    `Do you want to purchase this card ?`,
    ask.yesno
  );

  //should buy?

  //define interactions
  const customerInteract = {
    ...commonInteract,
    optin: (nftId) => {
      acc.tokenAccept(nftId);
    },
    reportPurchase: (title) => {
      console.log(`You can now use your new ${title} card !`);
    },
  };
  //connect to the contract
  await ctc.participants.Customer(customerInteract); //customer enters the contract
  await showBalance(acc);
}

export default adminRun;
