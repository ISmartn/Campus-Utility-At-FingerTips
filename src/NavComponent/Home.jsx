import React from "react";
import web from "./images/campus5.png";
import Common from "./Common";
import Main from "../Main";

const Home = () => {
  return (
    <>
      <Common
        name="This Is Our Home Page"
        imgsrc={web}
        visit="/service"
        btname="Get Started"
      />
      <div className="my-5">
        <h1 className="text-center">Our Services</h1>
      </div>
      <Main />
    </>
  );
};

export default Home;
