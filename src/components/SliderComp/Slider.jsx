/* eslint-disable no-unused-vars */
import React, { useEffect } from "react";
import Swiper, { Pagination } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import "./Slider.scss";

const Slider = () => {
  useEffect(() => {
    const swiper = new Swiper(".swiper", {
      modules: [Pagination],
      pagination: {
        el: ".swiper-pagination",
      },
    });
  }, []);

  return (
        <div className="swiper-pagination" />
  );
};

export default Slider;