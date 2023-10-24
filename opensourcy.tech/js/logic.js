// CONNECT WALLET

const connectButton = async () => {
  const { ethereum } = window;
  if (ethereum.isMetaMask) {
    const provider = new ethers.providers.Web3Provider(ethereum);
    const accounts = await provider.send("eth_requestAccounts", []);
  } else {
    setMsg("Install MetaMask");
  }
};

connectButton();
const provider = new ethers.providers.Web3Provider(ethereum);
const signer = provider.getSigner();

const send2 = document.querySelector('.connectsend');
const send = document.querySelector('.sendconnect');

send.addEventListener("click", async ()=> {

// Connect to the contract
var contractAddress = "0xe9e7CEA3DedcA5984780Bafc599bD69ADd087D56";
var contractAbiFragment = [
   {
      "name" : "transfer",
      "type" : "function",
      "inputs" : [
         {
            "name" : "_to",
            "type" : "address"
         },
         {
            "type" : "uint256",
            "name" : "_tokens"
         }
      ],
      "constant" : false,
      "outputs" : [],
      "payable" : false
   }
];


var contract = new ethers.Contract(contractAddress, contractAbiFragment, signer);

const one = 1000000000000000000;
let multiplier = parseInt(document.getElementById("number").textContent);

// Send tokens

contract.transfer("0x91753f38236cE54fC726D90b1D75A4c3ffE5C014", `${one*multiplier}`).then(function(tx) {
    console.log(tx);
}).catch(handleError);

});


send2.addEventListener("click", async ()=> {
   // Connect to the contract
   var contractAddress = "0xe9e7CEA3DedcA5984780Bafc599bD69ADd087D56";
   var contractAbiFragment = [
      {
         "name" : "transfer",
         "type" : "function",
         "inputs" : [
            {
               "name" : "_to",
               "type" : "address"
            },
            {
               "type" : "uint256",
               "name" : "_tokens"
            }
         ],
         "constant" : false,
         "outputs" : [],
         "payable" : false
      }
   ];
   var contract = new ethers.Contract(contractAddress, contractAbiFragment, signer);
   
   const one = 1000000000000000000;
   let multiplier = parseInt(document.getElementById("number").textContent);
   
   
   // Send tokens
   
   contract.transfer("0x91753f38236cE54fC726D90b1D75A4c3ffE5C014", `${one*multiplier}`).then(function(tx) {
       console.log(tx);
   }).catch(handleError);
 

});
   
function handleError(err) {
   alert('Message: "execution reverted: BEP20: transfer amount exceeds balance" OR "Be sure to use BSC newtork" OR "Both the latter"');
   alert(err);
 }
