import React, { Suspense } from "react";

import { useNavigate } from "react-router";
import SingleApp from "../../components/SingleApp/SingleApp";

const HomeApps = ({ data }) => {
  const navigate = useNavigate();
  const handleShowAll = () => {
    navigate("/apps");
  };
  return (
    <div className="text-center bg-gray-100 ">
      <h3 className="pt-10 font-bold text-4xl">Trending Apps</h3>
      <h5 className="text-xs font-thin mt-2 mb-5">
        Explore All Trending Apps on the Market developed by us
      </h5>
      <div className="max-w-260 mx-auto pb-10">
        <Suspense fallback={<span>loading......</span>}>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3">
            {data
              .filter((singleApp) => singleApp.id <= 8)
              .map((singleApp) => (
                <SingleApp key={singleApp.id} singleApp={singleApp}></SingleApp>
              ))}
          </div>
        </Suspense>
      </div>
      <button
        className="btn bg-gradient-to-br from-[#632EE3] to-[#9F62F2] text-white mb-10 font-light px-8"
        href="https://github.com/AmtazAhmedGazi"
        onClick={handleShowAll}
      >
        Show All
      </button>
    </div>
  );
};

export default HomeApps;
