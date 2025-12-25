import React from "react";
import appError from "../../assets/App-Error.png";
import { useNavigate } from "react-router";

const SearchNotFound = () => {
  const navigate = useNavigate();
  const handleBackBtn = () => {
    navigate(-1);
  };

  return (
    <div className="flex flex-col justify-center items-center bg-gray-100">
      <img src={appError} alt="" className="mt-20 w-10/12 lg:w-fit" />
      <h3 className="pt-10 font-bold text-3xl lg:text-4xl mb-2">
        OPPS!! APP NOT FOUND
      </h3>
      <h5 className="text-xs font-thin mt-2 mb-5 text-[#627382]">
        The App you are requesting is not found on our system. please try
        another apps
      </h5>
      <button
        className="btn bg-linear-to-br from-[#632EE3] to-[#9F62F2] text-white px-8 mb-20"
        onClick={handleBackBtn}
      >
        Go Back!
      </button>
    </div>
  );
};

export default SearchNotFound;
