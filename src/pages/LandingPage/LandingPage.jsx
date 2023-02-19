import React, { useEffect, useState } from "react";
import logo from "../../assets/Primarios/logo/group29.png";
import title from "../../assets/Primarios/logo/tituloLucky.png";

import "./LandingPage.scss";
import CarrousselPage from "../CarrousselPage/CarrousselPage";


const LandingPage = () => {
  const [landing, setLanding] = useState(true);

  const landingOut = () => {
    setTimeout(() => {
      setLanding(false);
    }, 2000);
  };

  useEffect(() => {
    landingOut();
  });

  return (
    <>
      {landing ? (
        <div className="c-landing">
          <img className="c-landing__logo" src={logo} alt="logo" />
          <img className="c-landing__title" src={title} alt="title" />
        </div>
      ) : (
        <CarrousselPage />
      )}
    </>
  );
};

export default LandingPage;