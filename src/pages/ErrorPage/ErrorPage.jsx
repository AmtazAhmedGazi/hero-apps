import React from "react";
import error404 from "../../assets/error-404.png";
import Navbar from "../../components/Header/Navbar";
import Footer from "../../components/Footer/Footer";
import { useNavigate } from "react-router";

const ErrorPage = () => {
  const navigate = useNavigate();
  const handleBackBtn = () => {
    navigate(-1);
  };
  return (
    <div>
      <Navbar></Navbar>
      <div className="flex flex-col justify-center items-center bg-gray-100">
        <img src={error404} alt="" className="mt-20 w-10/12 lg:w-fit" />
        <h3 className="pt-10 font-bold text-4xl mb-2">Oops, page not found!</h3>
        <h5 className="text-xs font-thin mt-2 mb-5 text-[#627382]">
          The page you are looking for is not available.
        </h5>
        <button
          className="btn bg-linear-to-br from-[#632EE3] to-[#9F62F2] text-white px-8 mb-20"
          onClick={handleBackBtn}
        >
          Go Back!
        </button>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default ErrorPage;
