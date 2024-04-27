import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import NFTCard from './NFTCard';
import { balanceOf, tokenOfOwnerByIndex } from '../utils/nft';
import { MARKET_CONTRACT_ADDRESS } from '../env';
import '../App.css';

const NFTGrid = () => {
  const [nfts, setNfts] = useState([]);
  const navigate = useNavigate();

  const handleCardClick = (tokenId) => {
    // 跳转到NFT详情页面
    navigate(`/nft-detail/${tokenId}`);
  };

  useEffect(() => {
    const fetchNFTs = async () => {
      const length = await balanceOf(MARKET_CONTRACT_ADDRESS);
      console.log('合约的长度length', length)
      for (let i = 0; i < length; i++) {
        const tokenId = await tokenOfOwnerByIndex(MARKET_CONTRACT_ADDRESS, i);
        console.log('i', i)
        setNfts((prev) => [...prev, tokenId]);
        setNfts((prev) => [...new Set(prev)])
      }
    };
    fetchNFTs();
  }, []);

  return (
    <div className="nft-grid">
      {nfts.map(nft => (
        <NFTCard tokenId={nft} onClick={() => handleCardClick(nft)} />
      ))}
    </div>
  );
};

export default NFTGrid;