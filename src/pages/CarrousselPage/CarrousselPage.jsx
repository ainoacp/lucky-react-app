/* eslint-disable no-unused-vars */
import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import Swiper, { Pagination } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
// import Cross from "../../SlidersImage/X.png";
import "./CarrousselPage.scss";
import SlideP1 from "../../assets/Primarios/ubtitled-section/Encuentra-servicios/undrawGoodDoggy4Wfq.png";
import SlideP2 from "../../assets/Primarios/ubtitled-section/adopta-movil/imagen2.png";
import SlideP3 from "../../assets/Primarios/ubtitled-section/asociacion/undrawPetAdoption2Qkw.png";


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
    <>
      <Link to="/lucky/start">
        {/* <img src={Cross} alt="cross" className="x" /> */}
        <p className="x">x</p>
      </Link>
      <div className="c-slider swiper">
        <div className="swiper-wrapper">
          <div className="swiper-slide">
            <img className="c-slider__img" src={SlideP1} alt="slide1" />
            <h3 className="c-slider__title c-slider__title--first">Encuentra todo tipo de servicios que tienes cerca de ti</h3>
          </div>
          <div className="swiper-slide">
            <img className="c-slider__img" src={SlideP2} alt="slide2" />
            <h3 className="c-slider__title">Adopta desde tu móvil</h3>
            <p className="c-slider__p">Puedes acceder al perfil de muchos animales que estan en adopcion y filtrarlos para encontrar el que mejor se adapte a ti</p>
          </div>
          <div className="swiper-slide">
            <img className="c-slider__img" src={SlideP3} alt="slide3" />
            <h3 className="c-slider__title c-slider__title--first">Si eres una asociación sube a tus peludos para darles más difusión</h3>
          </div>
        </div>

        <div className="swiper-pagination"></div>
      </div>
    </>
  );
};

export default Slider;