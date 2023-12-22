import React from "react";
import Image from "next/image";
import herobg from "../../../public/images/1.png";
import seal from "../../../public/images/p1.jpg";
export default function Signup() {
  return (
    <>
      <div className="py-10 lg:py-20 px-5 lg:px-20 bg-bg-gray/20">
        <div className="flex flex-col lg:flex-row justify-between items-center lg:items-start container mx-auto">
          <div className="flex flex-row mx-auto">
            <div className="flex flex-col items-end justify-end mb-10 lg:mb-0">
              <div className="relative mt-8 lg:mt-0">
                <Image
                  src={herobg}
                  width={300}
                  height={300}
                  layout="responsive"
                  className="rounded-lg"
                />
                <Image
                  src={seal}
                  width={50}
                  height={50}
                  className="absolute -bottom-5 -right-5 rounded-full border-4 border-white "
                />
              </div>
              <div className="relative mt-8 lg:mt-8">
                <Image
                  src={herobg}
                  width={194}
                  height={194}
                  className="rounded-lg "
                />
                <Image
                  src={seal}
                  width={50}
                  height={50}
                  className="absolute -bottom-5 -right-5 rounded-full border-4 border-white "
                />
              </div>
            </div>
            <div className="mx-5"></div>
            <div className="my-auto">
              <div className="relative mt-8 lg:mt-0">
                <Image
                  src={herobg}
                  width={240}
                  height={240}
                  className="rounded-lg"
                />
                <Image
                  src={seal}
                  width={50}
                  height={50}
                  className="absolute -bottom-5 -right-5 rounded-full border-4 border-white "
                />
              </div>
            </div>
          </div>
          <div className="my-auto text-center lg:text-left lg:w-1/2 lg:pr-10">
            <p className="font-integral font-extrabold text-2xl tracking-tight uppercase pb-5">
              Create and <br />
              sell your NFTs
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
                Sign Up Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
