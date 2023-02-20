import { Link } from "react-router-dom";
import "swiper/css";
import "swiper/css/pagination";
import Cross from "../../assets/Primarios/ubtitled-section/X.png";
import "./CarrousselPage.scss";
import SlideP1 from "../../assets/Primarios/ubtitled-section/adopta-movil/imagen2.png";
import SlideP2 from "../../assets/Primarios/ubtitled-section/asociacion/undrawPetAdoption2Qkw.png";
import SlideP3 from "../../assets/Primarios/ubtitled-section/Encuentra-servicios/undrawGoodDoggy4Wfq.png";
import Slider from "../../components/SliderComp/Slider";

export default function CarrousselPage() {

return (
    <>
      <Link to="/lucky/start">
        <img src={Cross} alt="cross" className="x" />
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
        <Slider/>
      </div>
    </>
  );
};