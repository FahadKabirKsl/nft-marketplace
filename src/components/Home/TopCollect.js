import React from "react";
import Image from "next/image";
import { RiVerifiedBadgeFill } from "react-icons/ri";
import i1 from "../../../public/images/1.png";
import i2 from "../../../public/images/2.png";
import i3 from "../../../public/images/3.png";
import i4 from "../../../public/images/4.png";
import i5 from "../../../public/images/5.png";
import i6 from "../../../public/images/6.png";
import blackarrow from "../../../public/images/blackarrow.png";
import grennarrow from "../../../public/images/greenarrow.png";
const TopCollect = () => {
  return (
    <>
      <div className="py-10 lg:py-20">
        <div className="container mx-auto">
          <div className="flex flex-col lg:flex-row justify-center lg:justify-between">
            <div className="w-full lg:w-8/12 lg:border-r lg:pr-8">
              <div className="flex flex-col lg:justify-between">
                <div className="w-full lg:w-9/12 lg:mb-5">
                  <Image
                    src={i1}
                    width={400}
                    height={440}
                    className="rounded-lg mb-5"
                  />
                  <div className="flex justify-between">
                    <div className="flex flex-row">
                      <Image
                        src={i6}
                        width={60}
                        height={60}
                        className="rounded-full align-middle w-auto h-10 my-auto"
                      />
                      <div className="flex flex-col">
                        <p className="text-xl lg:text-2xl font-dMSans font-bold text-custome-black">
                          The Futr Abstr
                        </p>
                        <p className="text-sm lg:text-base font-dMSans text-light-gray">
                          10 in the stock
                        </p>
                      </div>
                    </div>
                    <div className="flex flex-col">
                      <p className="text-xs lg:text-sm font-dMSans font-medium text-custome-black">
                        Highest Bid
                      </p>
                      <div className="flex flex-row">
                        <Image
                          src={blackarrow}
                          width={10}
                          height={10}
                          className="text-custome-black w-auto h-4 my-auto"
                        />
                        <p className="text-sm lg:text-base font-dMSans font-bold text-custome-black pl-1">
                          0.25 ETH
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="mx-5"></div>
                <div className="w-full flex flex-col">
                  <div className="flex flex-row">
                    <Image
                      src={i2}
                      width={147}
                      height={147}
                      className="rounded-lg w-auto h-40"
                    />
                    <div className="flex flex-col pl-5 my-auto">
                      <p className="text-xl font-dMSans font-bold text-custome-black">
                        The Futr Abstr
                      </p>
                      <div className="flex justify-between py-5">
                        <Image
                          src={i6}
                          width={60}
                          height={60}
                          className="rounded-full align-middle w-auto h-8 my-auto"
                        />
                        <div className="flex flex-row border rounded-lg border-green px-3 mx-5">
                          <Image
                            src={grennarrow}
                            width={10}
                            height={10}
                            className="text-green w-auto h-4 my-auto"
                          />
                          <p className="text-sm font-dMSans font-bold text-green pl-1 my-auto">
                            0.25 ETH
                          </p>
                        </div>
                        <p className="font-dMSans text-sm font-light text-light-gray my-auto">
                          1 of 8
                        </p>
                      </div>
                      <button
                        type="button"
                        className="text-white bg-perple border border-perple rounded-3xl hover:bg-white hover:text-custome-black hover:border-custome-black focus:ring-0 focus:outline-none focus:ring-none font-bold font-dMSans text-sm px-10 py-1.5 text-center duration-300 "
                      >
                        Place a bid
                      </button>
                    </div>
                  </div>
                  <div className="flex flex-row my-5">
                    <Image
                      src={i2}
                      width={147}
                      height={147}
                      className="rounded-lg w-auto h-40"
                    />
                    <div className="flex flex-col pl-5 my-auto">
                      <p className="text-xl font-dMSans font-bold text-custome-black">
                        The Futr Abstr
                      </p>
                      <div className="flex justify-between py-5">
                        <Image
                          src={i6}
                          width={60}
                          height={60}
                          className="rounded-full align-middle w-auto h-8 my-auto"
                        />
                        <div className="flex flex-row border rounded-lg border-green px-3 mx-5">
                          <Image
                            src={grennarrow}
                            width={10}
                            height={10}
                            className="text-green w-auto h-4 my-auto"
                          />
                          <p className="text-sm font-dMSans font-bold text-green pl-1 my-auto">
                            0.25 ETH
                          </p>
                        </div>
                        <p className="font-dMSans text-sm font-light text-light-gray my-auto">
                          1 of 8
                        </p>
                      </div>
                      <button
                        type="button"
                        className="text-custome-black bg-white border border-custome-black rounded-3xl hover:bg-perple hover:border-perple hover:text-white focus:ring-0 focus:outline-none focus:ring-none font-bold font-dMSans text-sm px-10 py-1.5 text-center duration-300  "
                      >
                        Place a bid
                      </button>
                    </div>
                  </div>
                  <div className="flex flex-row">
                    <Image
                      src={i2}
                      width={147}
                      height={147}
                      className="rounded-lg w-auto h-40"
                    />
                    <div className="flex flex-col pl-5 my-auto">
                      <p className="text-xl font-dMSans font-bold text-custome-black">
                        The Futr Abstr
                      </p>
                      <div className="flex justify-between py-5">
                        <Image
                          src={i6}
                          width={60}
                          height={60}
                          className="rounded-full align-middle w-auto h-8 my-auto"
                        />
                        <div className="flex flex-row border rounded-lg border-green px-3 mx-5">
                          <Image
                            src={grennarrow}
                            width={10}
                            height={10}
                            className="text-green w-auto h-4 my-auto"
                          />
                          <p className="text-sm font-dMSans font-bold text-green pl-1 my-auto">
                            0.25 ETH
                          </p>
                        </div>
                        <p className="font-dMSans text-sm font-light text-light-gray my-auto">
                          1 of 8
                        </p>
                      </div>
                      <button
                        type="button"
                        className="text-custome-black bg-white border border-custome-black rounded-3xl hover:bg-perple hover:border-perple hover:text-white focus:ring-0 focus:outline-none focus:ring-none font-bold font-dMSans text-sm px-10 py-1.5 text-center duration-300 "
                      >
                        Place a bid
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-full lg:w-4/12 mt-10 lg:mt-0">
              <div className="flex flex-col lg:pl-5">
                <p className="text-xl lg:text-2xl font-bold font-integral text-custome-black">
                  Top Collections over{" "}
                </p>
                <p className="text-lg lg:text-xl font-bold font-dMSans text-perple">
                  Last 7 days{" "}
                </p>
                <div>
                  <div className="flex justify-between border-b py-2">
                    <p className="my-auto text-custome-black font-dMSans text-2xl font-bold ">
                      1
                    </p>
                    <div className="my-auto">
                      <div className="relative ">
                        <Image
                          src={i6}
                          width={60}
                          height={60}
                          className="rounded-full align-middle w-auto h-auto"
                        />
                        <RiVerifiedBadgeFill className="absolute top-0 right-0 text-xl text-blue-900 " />
                      </div>
                    </div>

                    <div className="my-auto">
                      <p className="text-base font-dMSans font-medium text-custome-black ">
                        CryptoFunks
                      </p>
                      <div className="flex flex-row">
                        <Image
                          src={blackarrow}
                          width={10}
                          height={10}
                          className=""
                        />
                        <p className="text-sm font-dMSans font-semibold text-light-gray pl-1">
                          19,769.39
                        </p>
                      </div>
                    </div>
                    <p className="my-auto font-dMSans text-xl text-cyan font-semibold">
                      +26.52%
                    </p>
                  </div>
                  <div className="flex justify-between border-b py-2 ">
                    <p className="my-auto text-custome-black font-dMSans text-2xl font-bold ">
                      2
                    </p>
                    <div className="my-auto">
                      <div className="relative my-auto">
                        <Image
                          src={i6}
                          width={60}
                          height={60}
                          className="rounded-full align-middle w-auto h-auto"
                        />
                        <RiVerifiedBadgeFill className="absolute top-0 right-0 text-xl text-blue-900 " />
                      </div>
                    </div>

                    <div className="my-auto">
                      <p className="text-base font-dMSans font-medium text-custome-black ">
                        CryptoFunks
                      </p>
                      <div className="flex flex-row">
                        <Image
                          src={blackarrow}
                          width={10}
                          height={10}
                          className=""
                        />
                        <p className="text-sm font-dMSans font-semibold text-light-gray pl-1">
                          19,769.39
                        </p>
                      </div>
                    </div>
                    <p className="my-auto font-dMSans text-xl text-red font-semibold">
                      +26.52%
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TopCollect;
