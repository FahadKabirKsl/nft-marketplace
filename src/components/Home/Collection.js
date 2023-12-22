import React from "react";
import Image from "next/image";
import i1 from "../../../public/images/1.png";
import i2 from "../../../public/images/2.png";
import i3 from "../../../public/images/3.png";
import i4 from "../../../public/images/4.png";

export default function Collection() {
  return (
    <div className="border">
      <div className="grid grid-cols-2 grid-rows-2 gap-4">
        {/* First Image */}
        <div className="row-span-2">
          <Image src={i1} alt="i1.png" className="rounded-lg" />
        </div>

        {/* Second Image */}
        <div>
          <Image src={i2} alt="i2.png" className="rounded-lg" />
        </div>

        {/* Third Image */}
        <div className="col-start-2">
          <Image src={i3} alt="i3.png" className="rounded-lg" />
        </div>

        {/* Fourth Image */}
        <div className="col-start-2 row-start-2">
          <Image src={i4} alt="i4.png" className="rounded-lg" />
        </div>
      </div>
    </div>
  );
}
