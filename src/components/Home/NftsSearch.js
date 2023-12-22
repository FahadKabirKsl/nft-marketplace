import React, { useState } from "react";
import NftCard from "./NftCard";
import i1 from "../../../public/images/1.png";
import i2 from "../../../public/images/2.png";
import i3 from "../../../public/images/3.png";
import i4 from "../../../public/images/4.png";
import i5 from "../../../public/images/5.png";
export default function NftsSearch() {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [visibleCards, setVisibleCards] = useState(6);

  // Sample NFT data (replace this with your actual data)
  const nfts = [
    { id: 1, title: "NFT 1", category: "art", img: i1 },
    { id: 2, title: "NFT 2", category: "gaming", img: i2 },
    { id: 3, title: "NFT 3", category: "art", img: i4 },
    { id: 4, title: "NFT 4", category: "gaming", img: i5 },
    { id: 5, title: "NFT 5", category: "music", img: i3 },
    { id: 6, title: "NFT 6", category: "art", img: i4 },
    { id: 7, title: "NFT 7", category: "music", img: i5 },
    { id: 8, title: "NFT 8", category: "gaming", img: i3 },
    { id: 9, title: "NFT 8", category: "gaming", img: i4 },
    { id: 10, title: "NFT 8", category: "gaming", img: i5 },
    { id: 11, title: "NFT 8", category: "gaming", img: i1 },
    { id: 12, title: "NFT 8", category: "gaming", img: i2 },
  ];

  const filteredNfts =
    selectedCategory === "all"
      ? nfts
      : nfts.filter((nft) => nft.category === selectedCategory);

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
    setVisibleCards(6); // Reset visible cards to 4 when changing categories
  };

  const handleLoadMore = () => {
    setVisibleCards((prevVisibleCards) => prevVisibleCards + 6);
  };

  return (
    <div className="py-10 lg:py-20 px-5 lg:px-20 bg-bg-gray/20">
      <div className="container mx-auto">
        <div className="flex space-x-4 mb-4">
          <button
            className={`category-btn ${
              selectedCategory === "all" && "active  "
            }`}
            onClick={() => handleCategoryChange("all")}
          >
            All Categories
          </button>
          <button
            className={`category-btn ${
              selectedCategory === "art" && "active "
            }`}
            onClick={() => handleCategoryChange("art")}
          >
            Art
          </button>
          <button
            className={`category-btn ${
              selectedCategory === "gaming" && "active "
            }`}
            onClick={() => handleCategoryChange("gaming")}
          >
            Gaming
          </button>
          {/* Add more category buttons as needed */}
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          {filteredNfts.slice(0, visibleCards).map((nft) => (
            <NftCard
              key={nft.id}
              title={nft.title}
              category={nft.category}
              img={nft.img}
            />
          ))}
        </div>
        <div className="flex justify-center items-center pt-10">
          {visibleCards < filteredNfts.length && (
            <button
              type="button"
              className="text-perple bg-white border border-perple rounded-3xl hover:bg-perple hover:border-perple hover:text-white focus:ring-0 focus:outline-none focus:ring-none font-bold font-dMSans text-sm px-10 py-1.5  duration-300 text-center  "
              onClick={handleLoadMore}
            >
              Load More
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
