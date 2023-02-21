import { Link } from "react-router-dom";
import "swiper/css";
import Cross from "../../assets/Primarios/ubtitled-section/X.png";
import "./CarrousselPage.scss";
import Adopt from "../../assets/Primarios/ubtitled-section/adopta-movil/imagen2.png";
import Asoci from "../../assets/Primarios/ubtitled-section/asociacion/undrawPetAdoption2Qkw.png";
import Serv from "../../assets/Primarios/ubtitled-section/Encuentra-servicios/undrawGoodDoggy4Wfq.png";
import Slider from "../../components/SliderComp/Slider";

export default function CarrousselPage() {

return (
    <div className="c-carroussel-container">
      <Link to="/lucky/start">
        <img src={Cross} alt="cross" className="x" />
      </Link>
      <div className="c-slider swiper">
        <div className="swiper-wrapper">
          <div className="swiper-slide">
            <img className="c-slider-carroussel_img" src={Serv} alt="serv" />
            <h3 className="c-slider_title c-slider_title--first">Encuentra todo tipo de servicios que tienes cerca de ti</h3>
          </div>
          <div className="swiper-slide">
            <img className="c-slider-carroussel_img" src={Adopt} alt="adopt" />
            <h3 className="c-slider_title">Adopta desde tu móvil</h3>
            <p className="c-slider_p">Puedes acceder al perfil de muchos animales que estan en adopcion y filtrarlos para encontrar el que mejor se adapte a ti</p>
          </div>
          <div className="swiper-slide">
            <img className="c-slider-carroussel_img" src={Asoci} alt="asoci" />
            <h3 className="c-slider_title c-slider_title--first">Si eres una asociación sube a tus peludos para darles más difusión</h3>
          </div>
        </div>
        <Slider/>
      </div>
    </div>
  );
};