import React, { useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import { useLoaderData } from "react-router";
import { getStoredApp } from "../../utility/addToDB";
import InstalledApp from "../InstalledApp/InstalledApp";

const Installation = () => {
  const data = useLoaderData();
  const [installList, setInstallList] = useState([]);

  useEffect(() => {
    const storedAppData = getStoredApp();
    const convertedStoredApp = storedAppData.map((id) => parseInt(id));
    const filteredList = data.filter((app) =>
      convertedStoredApp.includes(app.id)
    );
    setInstallList(filteredList);
  }, [data]);

  const handleRemoveApp = (id) => {
    setInstallList((prev) => prev.filter((app) => app.id !== id));
    toast("Uninstalled Successfully! ");
  };

  return (
    <div className="text-center bg-gray-100">
      <h3 className="pt-10 font-bold text-2xl lg:text-4xl mb-2">
        Your Installed Apps
      </h3>
      <h5 className="text-xs font-thin mt-2 mb-5 text-[#627382]">
        Explore All Trending Apps on the Market developed by us
      </h5>

      <div className="max-w-260 mx-auto pb-10">
        {installList.length > 0 ? (
          installList.map((app) => (
            <InstalledApp
              key={app.id}
              app={app}
              handleRemoveApp={handleRemoveApp}
            />
          ))
        ) : (
          <div className="text-gray-500 font-bold my-20 text-6xl">
            No Apps Installed
          </div>
        )}
      </div>
      <ToastContainer />
    </div>
  );
};

export default Installation;
