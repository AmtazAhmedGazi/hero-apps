import React from "react";
import { Link } from "react-router";
import iconDownload from "../../assets/icon-downloads.png";
import iconRatings from "../../assets/icon-ratings.png";

const SingleApp = ({ singleApp }) => {
  const { id, title, companyName, image, ratingAvg, downloads } = singleApp;

  let downloadsCount = parseInt(downloads, 10);
  let downloadsCountWord = "";

  if (downloadsCount >= 1_000_000) {
    downloadsCountWord = `${(downloadsCount / 1_000_000).toFixed(1)}M`;
  } else {
    downloadsCountWord = `${(downloadsCount / 1_000).toFixed(1)}K`;
  }

  return (
    <Link to={`/appDetails/${id}`}>
      <div className="flex flex-col shadow-sm bg-white p-3 rounded-sm">
        <img src={image} alt="" className="w-60 h-50" />
        <h3 className="text-left font-semibold my-2">
          {title} : {companyName}
        </h3>
        <div className="flex justify-between">
          <h4 className="bg-[#F1F5E8] text-[#00D390] flex p-2 items-center gap-1 rounded-sm">
            <img src={iconDownload} alt="" className="w-4 h-4" />
            {downloadsCountWord}
          </h4>
          <h4 className="bg-[#FFF0E1] text-[#FF8811] flex p-2 items-center gap-1 rounded-sm">
            <img src={iconRatings} alt="" className="w-4 h-4" />
            {ratingAvg}
          </h4>
        </div>
      </div>
    </Link>
  );
};

export default SingleApp;
