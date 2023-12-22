import React, { useState, useEffect } from "react";
import CountUp from "react-countup";
import Image from "next/image";
import herobg from "../../../public/images/temp.png";
import seal from "../../../public/images/seal.png";

const Hero = () => {
  const [animatedNumbers, setAnimatedNumbers] = useState({
    artworks: 0,
    auctions: 0,
    artists: 0,
  });

  useEffect(() => {
    // Set your target values (12, 15, 98)
    const targetNumbers = {
      artworks: 12,
      auctions: 15,
      artists: 98,
    };

    // Set a timer to gradually increase the numbers
    const timer = setTimeout(() => {
      setAnimatedNumbers({
        artworks: targetNumbers.artworks,
        auctions: targetNumbers.auctions,
        artists: targetNumbers.artists,
      });
    }, 1000); // Adjust the duration as needed

    // Clear the timer on component unmount
    return () => clearTimeout(timer);
  }, []);
  return (
    <>
      <div className="py-10 lg:py-20">
        <div className="flex flex-col lg:flex-row justify-between items-center lg:items-start container mx-auto">
          <div className="my-auto text-center lg:text-left lg:w-1/2 lg:pr-10">
            <p className="font-integral font-extrabold text-4xl tracking-tight uppercase pb-5">
              Discover, and collect <br />
              Digital Art NFTs
            </p>
            <p className="font-dMSans text-xl font-light text-light-gray lg:w-full pb-5">
              Digital marketplace for crypto collectibles and non-fungible
              tokens (NFTs). Buy, Sell, and discover exclusive digital assets.
            </p>
            <div className="lg:w-1/2">
              <button
                type="button"
                className="text-white bg-perple border border-perple rounded-3xl hover:bg-white hover:text-custome-black hover:border-custome-black focus:ring-0 focus:outline-none focus:ring-none font-bold font-dMSans text-sm px-10 py-1.5 text-center duration-300 "
              >
                Explore Now
              </button>
              <div className="flex flex-row justify-center lg:justify-start pt-5 space-x-5">
                <div>
                  <p className="font-integral text-4xl font-extrabold tracking-tight ">
                    <CountUp end={animatedNumbers.artworks} />
                    k+
                  </p>
                  <p className="font-dMSans text-lg font-light ">Artwork</p>
                </div>
                <div>
                  <p className="font-integral text-4xl font-extrabold tracking-tight ">
                    <CountUp end={animatedNumbers.auctions} />
                    k+
                  </p>

                  <p className="font-dMSans text-lg font-light ">Auction</p>
                </div>
                <div>
                  <p className="font-integral text-4xl font-extrabold tracking-tight ">
                    <CountUp end={animatedNumbers.artists} />
                    K+
                  </p>

                  <p className="font-dMSans text-lg font-light ">Artist</p>
                </div>
              </div>
            </div>
          </div>
          <div className="relative mt-8 lg:mt-0">
            <Image src={herobg} width={400} height={440} />
            <Image
              src={seal}
              width={100}
              height={100}
              className="absolute bottom-16 -left-12 right-0 "
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
