import { ethers } from 'ethers';
import MyNFTABI from '../contracts/MyNFT.json';
import { ERC721_CONTRACT_ADDRESS, ACCOUNT_A } from '../env';


async function main() {
  let provider = new ethers.BrowserProvider(window.ethereum)
  const contractAddress = ERC721_CONTRACT_ADDRESS;
  let account = await provider.getSigner();

  const contract = new ethers.Contract(contractAddress, MyNFTABI, account);
  const result = await contract.totalSupply();
  await contract.safeMint(ACCOUNT_A, 'https://ipfs.io/ipfs/QmZ4tj')
  console.log(result.toString());
}


export default main;