import React from "react";
import { siteData } from "../../../assets/Variables";
import Certification from "./Certification";

const Track: React.FC<{ speed?: number }> = ({ speed = 4 }) => {
  const items = (siteData.certifications ?? []).map((data, idx) => (
    <Certification key={idx} {...data} />
  ));

  const doubleItems = [...items, ...items]; // duplicate for seamless scroll

  return (
    <div className="overflow-hidden w-full">
      <div
        className="sml:flex hidden animate-scroll"
        style={{ "--scroll-duration": `${speed}s` } as React.CSSProperties}
      >
        {doubleItems.map((item, idx) => (
          <div key={idx} className="flex-none mr-5">
            {item}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Track;
