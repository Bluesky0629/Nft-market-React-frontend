import { Web } from "@mui/icons-material";
import Web3 from "web3";
import vaultsABI from "../features/configure/vaultsABI.json";


let contract_address = "0xf327E3930D5AbFaDe7896B08E83C17ec91907EF4";
let wallet_address = "0x2F0e4708689D48a198a37Af30a458dD8Ff0283ac";

export async function getInfo(){
    const web3 = new Web3(window.ethereum);
    let returnValue = 0;
    let NameContract = new web3.eth.Contract(vaultsABI, contract_address)
    let balance = await NameContract.methods.balanceOf(wallet_address).call()
    balance = (Number(balance)/Math.pow(10, 18)).toFixed(5); 
    return {balance, returnValue}
}

export async function deposit(){
    const web3 = new Web3(window.ethereum);
    await window.ethereum.enable();
    const depositContract = new web3.eth.Contract(vaultsABI, contract_address);
    await depositContract.methods.deposit(120).send({from:wallet_address});
}

export async function approve(){
    const web3 = new Web3(window.ethereum);
    const depositContract = new web3.eth.Contract(vaultsABI, contract_address);
    await depositContract.methods.Deposit(contract_address,10).send();
}
export const API_KEY = process.env.API_KEY;
export const PRIVATE_KEY = process.env.PRIVATE_KEY;
export const CONTRACT_ADDRESS = process.env.CONTRACT_ADDRESS;
export const HashbitchainId = 11119;