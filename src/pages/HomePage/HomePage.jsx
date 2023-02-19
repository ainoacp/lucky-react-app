import { Link } from 'react-router-dom';
import Slider from '../../components/SliderComp/Slider';
import './HomePage.scss';
import "swiper/css";
import axios from "axios";
import SlideP1 from "../../assets/Primarios/perfil/estado-de-adopcion/mascota@3x.png";
import SlideP2 from "../../assets/Primarios/perfil/apadrinar/apadrina@3x.png";
import SlideP3 from "../../assets/Primarios/perfil/donar/donar@3x.png";
import new1 from '../../assets/Primarios/perfil/novedades/new1/uli1Copy.png';
import new2 from '../../assets/Primarios/perfil/novedades/new2/uli1Copy.png';
import new3 from '../../assets/Primarios/perfil/novedades/new3/uli1Copy.png';
import Navbar from '../../components/Navbar/Navbar';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

export default function HomePage() {

    // let { nombre } = useParams();
    const {user} = useSelector((state) => state.auth)

    // const [users, setUsers] = useState([])

    // const getUsers = async () => {
    //     const res = await axios.get("http://localhost:5001/users");
    //     console.log(res.data);
    //     setUsers(res.data);
    // }
    // useEffect(() => {
    //     getUsers();
    // }, [])

    return (
        <div className='c-home-container'>
            <header className='c-home-header'>
                <p className='c-home-header_title'>¡Hola {user?.name || "Usuario"}!</p>
                <div className="c-slider swiper">
                    <div className="swiper-wrapper">
                        <Link to="/sponsoring" className="swiper-slide">
                            <img className="c-slider_img" src={SlideP2} alt="slide2" />
                            <div>
                                <h5>Apadrina un animal</h5>
                                <p>Si no puedes adoptar ayuda a alguno de nuestros animales</p>
                            </div>
                        </Link>
                        <Link to="/adoptionState" className="swiper-slide">
                                <img className="c-slider_img" src={SlideP1} alt="slide1" />
                                <div>
                                    <h5>Estado de la adopción</h5>
                                    <p>Revisa el proceso de tus adopciones en curso</p>
                                </div>
                        </Link>
                        <Link to="/donate" className="swiper-slide">
                            <img className="c-slider_img" src={SlideP3} alt="slide3" />
                            <div>
                                <h5>Dona y ayuda</h5>
                                <p>Otra opción si no puedes cuidar de algún animal</p>
                            </div>
                        </Link>
                    </div>
                    <Slider />
                </div>
            </header>
            <body className='c-home-body'>
                <div className='line'/>
                <p className='c-home-body_title'>Novedades</p>
                <div className='c-home-body_news'>
                    <a href='' >
                        <figure className='c-home-body_new'>
                            <img src={new1} alt="new1" />
                            <p>10 curiosidades sobre las chinchillas</p>
                        </figure>
                    </a>
                    <a href=''>
                        <figure className='c-home-body_new'>
                            <img src={new2} alt="new2" />
                            <p>¿Sabes qué comen las iguanas?</p>
                        </figure>
                    </a>
                    <a href=''>
                        <figure className='c-home-body_new'>
                            <img src={new3} alt="new3" />
                            <p>10 lugares para visitar con tu perro</p>
                        </figure>
                    </a>
                </div>
            </body>
            <footer className='c-home-footer'>
                <Navbar/>
            </footer>
        </div>
    )
}