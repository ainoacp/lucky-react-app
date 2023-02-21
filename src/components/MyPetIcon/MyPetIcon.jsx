import { Link } from "react-router-dom";
import "./MyPetIcon.scss";
import IconDisplay from "../IconDisplay/IconDisplay";
import Default from '../../assets/Primarios/filtros-animales-menus/animales/perro/perrop.png';
import Slider from "../SliderComp/Slider";
import { useSelector } from "react-redux";


export default function MyPetIcon() {

    const {user} = useSelector((state) => state.auth)
    
    return (
        <div className="c-pet-icon">
        {user?.pets?.map((pet) => (
            <div className="c-slider swiper" key= {pet._id}>
                <div className="swiper-wrapper">
                    <Link to={`/lucky/home/pets/${pet._id}`} className="swiper-slide">
                        <IconDisplay type={pet.especie || Default} />
                        <p>{pet.nombre}</p>
                    </Link>
                </div>
                <Slider />
            </div>
        ))}
        </div>
    )
}