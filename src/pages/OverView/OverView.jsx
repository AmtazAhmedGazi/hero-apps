import React from "react";

const OverView = () => {
  return (
    <div className="bg-gradient-to-br from-[#632EE3] to-[#9F62F2] text-center text-white">
      <h3 className="pt-10 font-semibold text-4xl">
        Trusted by Millions, Built for You
      </h3>
      <div className="mt-5 pb-10 flex items-center justify-center gap-20">
        <div>
          <h5 className="text-xs font-thin mb-2">Total Downloads</h5>
          <h3 className="font-bold text-5xl mb-2">29.6M</h3>
          <h5 className="text-xs font-thin">21% more than last month</h5>
        </div>
        <div>
          <h5 className="text-xs font-thin mb-2">Total Reviews</h5>
          <h3 className="font-bold text-5xl mb-2">906K</h3>
          <h5 className="text-xs font-thin">46% more than last month</h5>
        </div>
        <div>
          <h5 className="text-xs font-thin mb-2">Active Apps</h5>
          <h3 className="font-bold text-5xl mb-2">132+</h3>
          <h5 className="text-xs font-thin">31 more will Launch</h5>
        </div>
      </div>
    </div>
  );
};

export default OverView;
