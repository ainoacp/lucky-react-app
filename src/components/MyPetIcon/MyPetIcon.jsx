import { Link } from "react-router-dom";
import "./MyPetIcon.scss";
import IconDisplay from "../IconDisplay/IconDisplay";
import Default from '../../assets/Primarios/filtros-animales-menus/animales/perro/perrop.png';
import perroIco from '../../assets/Primarios/filtros-animales-menus/animales/perro/perrop.png';
import gatoIco from '../../assets/Primarios/filtros-animales-menus/animales/gato/cat.png';
import conejoIco from '../../assets/Primarios/filtros-animales-menus/animales/conejo/conejo1x.png';
import cobayaIco from '../../assets/Primarios/filtros-animales-menus/animales/cobaya/cobaya.png';
import pMamIco from '../../assets/Primarios/filtros-animales-menus/animales/pequeños-mamiferos/pequeñoMamiferos.png';
import huronIco from '../../assets/Primarios/filtros-animales-menus/animales/huron/huron.png';
import pezIco from '../../assets/Primarios/filtros-animales-menus/animales/pez/Fish.png';
import reptilIco from '../../assets/Primarios/filtros-animales-menus/animales/reptiles/reptil.png';
import anfibioIco from '../../assets/Primarios/filtros-animales-menus/animales/anfibios/anfibio.png';
import aracIco from '../../assets/Primarios/filtros-animales-menus/animales/aracnidos-o-insectos/aracnidos-insectos.png';
import aveIco from '../../assets/Primarios/filtros-animales-menus/animales/ave/ave.png';
import Slider from "../SliderComp/Slider";


export default function MyPetIcon({user}) {

    // const getIcon = (animal) => {
    //     if (animal.especie[0] === 'Perro') {
    //         return {perroIco}
    //     } else if (animal.especie[0] === 'Gato') {
    //         return {gatoIco}
    //     } else if (animal.especie[0] === 'Conejo') {
    //         return {conejoIco}
    //     } else if (animal.especie[0] === 'Cobaya') {
    //         return {cobayaIco}
    //     } else if (animal.especie[0] === 'Pequeño mamífero') {
    //         return {pMamIco}
    //     } else if (animal.especie[0] === 'Hurón') {
    //         return {huronIco}
    //     } else if (animal.especie[0] === 'Pez') {
    //         return {pezIco}
    //     } else if (animal.especie[0] === 'Reptil') {
    //         return {reptilIco}
    //     } else if (animal.especie[0] === 'Anfibio') {
    //         return {anfibioIco}
    //     } else if (animal.especie[0] === 'Arácnido o insecto') {
    //         return {aracIco}
    //     } else if (animal.especie[0] === 'Ave') {
    //         console.log(animal.especie[0], "esto es el icono de la especie")
    //         return {aveIco}
    //     } 
    // }
    
    return (
        <div className="c-pet-icon">
        {user?.pets?.map((pet, index) => (
            <div className="c-slider swiper" key= {index}>
                <div className="swiper-wrapper">
                    <Link to="/animals/{id}" className="swiper-slide">
                        <IconDisplay type={pet.especie}/>
                        <p>{pet.nombre}</p>
                    </Link>
                </div>
                <Slider />
            </div>
        ))}
        </div>
    )
}