import React from "react";

function Marquee() {
  return (
    <div className="w-full py-20 rounded-tl-3xl rounded-tr-3xl h-[50vh] bg-[#004D43] relative overflow-hidden">
      {/* Static Marquee Content */}
      <div className="flex whitespace-nowrap gap-10 justify-center items-center h-full">
        <h1 className="text-[20vw] leading-none font-['Founders_Grotesk_X-Condensed'] font-bold uppercase text-white">
          we are ochi
        </h1>
        <h1 className="text-[20vw] leading-none font-['Founders_Grotesk_X-Condensed'] font-bold uppercase text-white">
          we are ochi
        </h1>
      </div>
    </div>
  );
}

export default Marquee;
