import React from "react";
import iconDownload from "../../assets/icon-downloads.png";
import iconRatings from "../../assets/icon-ratings.png";
import { removeFromStoredApp } from "../../utility/addToDB";

const InstalledApp = ({ app, handleRemoveApp }) => {
  const { id, title, companyName, image, ratingAvg, downloads, size } = app;

  const downloadsCount = parseInt(downloads, 10);
  const downloadsCountWord =
    downloadsCount >= 1_000_000
      ? `${(downloadsCount / 1_000_000).toFixed(1)}M`
      : `${(downloadsCount / 1_000).toFixed(1)}K`;

  const handleUninstall = (id) => {
    handleRemoveApp(id);
    removeFromStoredApp(id);
  };

  return (
    <div className="bg-white flex mb-6 items-center justify-between pr-5 rounded shadow-sm mx-2 lg:mx-0">
      <div className="flex p-3 gap-3">
        <img src={image} alt={title} className="w-20 h-20 rounded-md" />
        <div>
          <h3 className="text-left font-semibold my-2 ml-2">
            {title} : {companyName}
          </h3>
          <div className="flex items-center gap-1 lg:gap-4">
            <h4 className="text-[#00D390] flex p-2 items-center gap-1 rounded-sm">
              <img src={iconDownload} alt="Downloads" className="w-4 h-4" />
              {downloadsCountWord}
            </h4>
            <h4 className="text-[#FF8811] flex p-2 items-center gap-1 rounded-sm">
              <img src={iconRatings} alt="Ratings" className="w-4 h-4" />
              {ratingAvg}
            </h4>
            <h4 className="text-[#627382]">{size} MB</h4>
          </div>
        </div>
      </div>

      <button
        className="btn btn-accent text-white p-3 lg:p-4"
        onClick={() => {
          handleUninstall(id);
        }}
      >
        Uninstall
      </button>
    </div>
  );
};

export default InstalledApp;
