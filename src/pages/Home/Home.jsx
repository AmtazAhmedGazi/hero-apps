import React from "react";
import Banner from "../../components/Banner/Banner";
import OverView from "../OverView/OverView";

import { useLoaderData } from "react-router";
import HomeApps from "../HomeApps/HomeApps";

const Home = () => {
  const data = useLoaderData();
  return (
    <div>
      <Banner></Banner>
      <OverView></OverView>
      <HomeApps data={data}></HomeApps>
    </div>
  );
};

export default Home;
