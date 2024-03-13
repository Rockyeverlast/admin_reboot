import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import banner from "../assets/banner.png";
import { Link } from "react-router-dom";
import Header1 from "../components/Headers/Header1";
import BoxContent from "../components/Box&Content/BoxContent";
import CTASmall from "../components/CTASmall/CTASmall";

const Home = () => {
  const dispatch = useDispatch();
  const { homeScreen } = useSelector(
    (state) => state?.screen
  );

  return (
    <>
    
    {homeScreen.map((component, index) => {
          switch (component?.type) {
            case "header":
              return <Header1 elements={component} />;
            case "box&Content":
              return <BoxContent elements={component} />;
            case "CTASmall":
              return <CTASmall elements={component} />;
            default:
              return null;
          }
        })}
    </>
  );
};

export default Home;
