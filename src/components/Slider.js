// components/Slider.js
import { useEffect } from "react";
import Swiper from "swiper";
import "swiper/css";
import Image from "next/image";
import i1 from "../../public/1.jpg";
import i2 from "../../public/2.jpg";

export default function Slider  ()  {
  useEffect(() => {
    const swiper = new Swiper(".swiper", {
      effect: "cards",
      grabCursor: true,
      initialSlide: 2,
      loop: true,
      rotate: true,
      mousewheel: {
        invert: false,
      },
    });
  }, []);

  return (
    <div className="container mx-auto my-8">
      <div className="flex justify-between ">
        <div className="text-xl font-bold w-full">
          dfikuashas sdrfgsfgsfsfkshfhsphfsiohfpshoifhsdiofhsf
        </div>
        <div className="w-3/4">
          <div className="swiper overflow-hidden rounded-md">
            <div className="swiper-wrapper">
              <div className="swiper-slide mx-2 flex flex-col items-center ">
                <Image
                  src={i1}
                  width={160}
                  height={225}
                  alt="The Queen's Gambit"
                  className="rounded-md"
                />
                <div className="mt-2">
                  <span className="block font-bold">8.5</span>
                  <h2 className="text-sm">The Queen's Gambit</h2>
                </div>
              </div>

              <div className="swiper-slide mx-2 flex flex-col items-center">
                <Image
                  src={i2}
                  width={160}
                  height={225}
                  alt="Breaking Bad"
                  className="rounded-md"
                />
                <div className="mt-2">
                  <span className="block font-bold">9.5</span>
                  <h2 className="text-sm">Breaking Bad</h2>
                </div>
              </div>

              <div className="swiper-slide mx-2 flex flex-col items-center">
                <Image
                  src={i1}
                  width={160}
                  height={225}
                  alt="Wednesday"
                  className="rounded-md"
                />
                <div className="mt-2">
                  <span className="block font-bold">8.1</span>
                  <h2 className="text-sm">Wednesday</h2>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};


