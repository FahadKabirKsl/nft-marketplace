import React from "react";
import Image from "next/image";
import tick from "../../../public/images/tick.png";
import chart from "../../../public/images/chart.png";
export default function About  ()  {
  return (
    <>
      <div className="py-10 lg:py-20 px-5 lg:px-20 bg-bg-gray/20">
        <div className=" container mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 lg:gap-20 gap-2 justify-between items-center">
            <div className="lg:col-span-2  mb-8 sm:mb-0">
              <p className="font-integral font-extrabold text-4xl tracking-tight uppercase">
                The amazing NFT art of the world here
              </p>
            </div>
            <div>
              <div className="flex flex-row mb-8">
                <Image
                  src={tick}
                  width={36}
                  height={36}
                  className="w-auto h-8"
                />
                <div>
                  <p className="font-dMSans text-2xl font-bold text-custome-black">
                    Fast Transaction
                  </p>
                  <p className="font-dMSans text-sm font-light text-light-gray">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Aliquam etiam viverra tellus
                  </p>
                </div>
              </div>
            </div>
            <div>
              <div className="flex flex-row mb-8">
                <Image
                  src={chart}
                  width={36}
                  height={36}
                  className="w-auto h-8"
                />
                <div>
                  <p className="font-dMSans text-2xl font-bold text-custome-black">
                    Growth Transaction
                  </p>
                  <p className="font-dMSans text-sm font-light text-light-gray">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Aliquam etiam viverra tellus
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};


