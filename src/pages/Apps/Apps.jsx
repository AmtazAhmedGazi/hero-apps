import React, { useState, Suspense } from "react";
import { useLoaderData } from "react-router";
import SingleApp from "../../components/SingleApp/SingleApp";
import SearchNotFound from "../SearchNotFound/SearchNotFound";

const Apps = () => {
  const data = useLoaderData();
  const [search, setSearch] = useState("");

  const filteredApps = data.filter((app) =>
    app.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="text-center bg-gray-100 ">
      <h3 className="pt-10 font-bold text-3xl">Our All Applications</h3>
      <h5 className="text-sm font-thin mt-2 mb-5">
        Explore All Apps on the Market developed by us. We code for Millions
      </h5>
      <div className="max-w-260 mx-auto pb-10">
        <div className="flex justify-between mb-4">
          <h3 className="font-semibold">({data.length}) Apps Found</h3>
          <input
            type="search"
            className="border-2 border-gray-300 py-1 px-2 "
            placeholder="Search Apps"
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
        <Suspense fallback={<span>loading......</span>}>
          {filteredApps.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3">
              {filteredApps.map((singleApp) => (
                <SingleApp key={singleApp.id} singleApp={singleApp}></SingleApp>
              ))}
            </div>
          ) : (
            <SearchNotFound></SearchNotFound>
          )}
        </Suspense>
      </div>
    </div>
  );
};

export default Apps;
