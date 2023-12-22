import React from "react";
import Image from "next/image";
import grennarrow from "../../../public/images/greenarrow.png";
export default function  ({ title, category, img })  {
  return (
    <>
      <div>
        <div className="block rounded-lg bg-white shadow-none  p-2 ">
          <p className="text-sm text-light-gray">{category}</p>
          <a href="#!">
            <Image
              src={img}
              alt={title}
              layout="responsive"
              className="rounded-lg"
            />
          </a>

          <div className="p-6">
            <div>
              <p className="text-xl lg:text-2xl font-dMSans font-bold text-custome-black">
                {title}
              </p>
              <div className="flex justify-between">
                <div className="flex flex-row">
                  <Image
                    src={grennarrow}
                    width={10}
                    height={10}
                    className="text-green w-auto h-4 my-auto"
                  />
                  <p className="text-sm lg:text-base font-dMSans font-bold text-green pl-1">
                    0.25 ETH
                  </p>
                </div>
                <p className="font-dMSans text-sm font-light text-light-gray my-auto">
                  1 of 8
                </p>
              </div>
            </div>
          </div>

          <div className="border-t-2 border-neutral-100 px-6 py-4 flex flex-col lg:flex-row lg:justify-between ">
            <button
              type="button"
              className="text-perple bg-bg-gray border border-bg-gray rounded-3xl hover:bg-perple hover:text-white hover:border-white focus:ring-0 focus:outline-none focus:ring-none font-bold font-dMSans text-sm px-4 py-1.5 text-center duration-300"
            >
              3h 50m 2s left
            </button>

            <button
              type="button"
              className="text-custome-black  rounded-3xl hover:bg-perple hover:border-perple hover:text-white focus:ring-0 focus:outline-none focus:ring-none font-bold font-dMSans text-sm px-2 py-1.5 text-center duration-300 "
            >
              place a bid
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

