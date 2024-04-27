import { ethers } from 'ethers';
import ABI from '../contracts/cUSDT.json';
import { ERC20_CONTRACT_ADDRESS} from '../env';


let provider = new ethers.BrowserProvider(window.ethereum)
const contractAddress = ERC20_CONTRACT_ADDRESS;

export async function approve(spender, amount) {
  const contract = new ethers.Contract(contractAddress, ABI, await provider.getSigner());
  const result = await contract.approve(spender, amount);
  console.log(result.hash);
}

export async function getAllowance(owner, spender) {
  const contract = new ethers.Contract(contractAddress, ABI, await provider.getSigner());
  const result = await contract.allowance(owner, spender);
  return Number(result);
}