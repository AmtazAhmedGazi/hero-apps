import React from "react";
import { Outlet, useNavigation } from "react-router";
import Navbar from "../../components/Header/Navbar";
import Footer from "../../components/Footer/Footer";

const Root = () => {
  const navigation = useNavigation();
  return (
    <div className="max-w-6xl mx-auto">
      <Navbar />

      {navigation.state === "loading" ? (
        <div className="flex justify-center items-center h-96">
          <span className="loading loading-spinner loading-xl"></span>
        </div>
      ) : (
        <Outlet />
      )}

      <Footer />
    </div>
  );
};

export default Root;
