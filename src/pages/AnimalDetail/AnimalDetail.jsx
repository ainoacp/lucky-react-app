import axios from 'axios';
import React, { useEffect, useState } from 'react';
// import { Link } from "react-router-dom";
// import Swiper, { Pagination } from "swiper";
import male from '../../assets/Primarios/filtros-animales-menus/sexo/macho/male.png';
import female from '../../assets/Primarios/filtros-animales-menus/sexo/hembra/female.png';
import hearth from '../../assets/Primarios/Info-like-compartir/like/favoritos.png';
import share from '../../assets/Primarios/Info-like-compartir/compartir/compartir.png';
import paw from '../../assets/Primarios/Info-like-compartir/huella/pawprint.png';
import Slider from "../../components/SliderComp/Slider";
import './AnimalDetail.scss';

const AnimalDetail = () => {
  const URL = "http://localhost:5000/animals"
  const [animals, setAnimals] = useState([]);


  const getAnimals = async () => {
    const res = await axios.get(URL);
    console.log(res.data);
   setAnimals(res.data)
}

  useEffect(() => getAnimals(), [])

  return ( <>
  
    <div className="c">
      {animals.length>0 && <div className="c__image"> <img src={animals[0].image} alt=""/></div>}
      <div className="c__arrow"></div>
      <div className="c__whitebox">
        <div className="c__whitebox--genre"> <img src={male} alt=""/></div>
        {animals.length>0 && <div className="c__whitebox--namecity">  <p>{animals[0].nombre}</p> <p>{animals[0].ciudad}</p></div>}
        <div className="c__whitebox--hearth+box"><img src={hearth} alt=""/><img src={share} alt=""/></div>
      </div>
      <div className="c__navbarDatesHealthAdopt"></div>
      {/* {animals.length>0 && animals.map((animal, index) => (); */}
      <div className="c__buttons"> 
        <div classname="c__buttons--container"><button> Apadrinar </button></div> 
        <div classname="c__buttons--container"><button> Adoptar </button></div>
      </div>
    </div>
    {/* {animals.length>0 && animals.map((animal, index) => (
        <div classNameName='cards__card' key={index}>
        <div classNameName='card-items'>
        <div classNameName='cards__card--img'><img classNameName='img-animals' src={animal.image} alt="animal"/></div> 
            <div classNameName='cards__card--img--p--div'> <p classNameName='cards__card--img--p'>{animal.name}</p></div>
          </div>))}
    </div> */}
        
    </>)
}

export default AnimalDetail