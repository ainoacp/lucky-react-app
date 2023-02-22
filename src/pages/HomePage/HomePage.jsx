import { Link } from 'react-router-dom';
import Slider from '../../components/SliderComp/Slider';
import './HomePage.scss';
import "swiper/css";
import SlideP1 from "../../assets/Primarios/perfil/estado-de-adopcion/mascota@2x.png";
import SlideP2 from "../../assets/Primarios/perfil/apadrinar/apadrina@2x.png";
import SlideP3 from "../../assets/Primarios/perfil/donar/donar@2x.png";
import new1 from '../../assets/Primarios/perfil/novedades/new1/uli1Copy.png';
import new2 from '../../assets/Primarios/perfil/novedades/new2/uli1Copy.png';
import new3 from '../../assets/Primarios/perfil/novedades/new3/uli1Copy.png';
import Navbar from '../../components/Navbar/Navbar';
import { useSelector } from 'react-redux';

export default function HomePage() {

    const {user} = useSelector((state) => state.auth)
    
    return (
        <div className='c-home-container'>
            <div className='c-home-header'>
                <p className='c-home-header_title'>¡Hola {user?.name || 'User'}!</p>
                <div className="c-slider swiper">
                    <div className="swiper-wrapper">
                        <Link to="/lucky/building" className="swiper-slide">
                            <img className="c-slider_img" src={SlideP2} alt="slide2" />
                            <div>
                                <h5>Apadrina un animal</h5>
                                <p>Si no puedes adoptar ayuda a alguno de nuestros animales</p>
                            </div>
                        </Link>
                        <Link to="/lucky/home/options/adoptionStatus" className="swiper-slide">
                                <img className="c-slider_img" src={SlideP1} alt="slide1" />
                                <div>
                                    <h5>Estado de la adopción</h5>
                                    <p>Revisa el proceso de tus adopciones en curso</p>
                                </div>
                        </Link>
                        <Link to="/lucky/building" className="swiper-slide">
                            <img className="c-slider_img" src={SlideP3} alt="slide3" />
                            <div>
                                <h5>Dona y ayuda</h5>
                                <p>Otra opción si no puedes cuidar de algún animal</p>
                            </div>
                        </Link>
                    </div>
                    <Slider />
                </div>
            </div>
            <div className='c-home-body'>
                <div className='line'/>
                <p className='c-home-body_title'>Novedades</p>
                <div className='c-home-body_news'>
                    <a href='https://www.bekiamascotas.com/articulos/descubre-10-curiosidades-chinchillas/' >
                        <figure className='c-home-body_new'>
                            <img src={new1} alt="new1" />
                            <p>10 curiosidades sobre las chinchillas</p>
                        </figure>
                    </a>
                    <a href='https://www.expertoanimal.com/que-comen-las-iguanas-23810.html'>
                        <figure className='c-home-body_new'>
                            <img src={new2} alt="new2" />
                            <p>¿Sabes qué comen las iguanas?</p>
                        </figure>
                    </a>
                    <a href='https://www.civitatis.com/blog/viajar-mascota-espana/'>
                        <figure className='c-home-body_new'>
                            <img src={new3} alt="new3" />
                            <p>10 lugares para visitar con tu perro</p>
                        </figure>
                    </a>
                </div>
            </div>
            <div className='c-home-footer'>
                <Navbar/>
            </div>
        </div>
    )
}