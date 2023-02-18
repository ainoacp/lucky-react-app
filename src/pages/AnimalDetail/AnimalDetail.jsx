import axios from 'axios';
import React, { useEffect, useState } from 'react';
// import { Link } from "react-router-dom";
// import Swiper, { Pagination } from "swiper";
import male from '../../assets/Primarios/filtros-animales-menus/sexo/macho/male.png';
import female from '../../assets/Primarios/filtros-animales-menus/sexo/hembra/female.png';
import hearth from '../../assets/Primarios/Info-like-compartir/like/favoritos.png';
import share from '../../assets/Primarios/Info-like-compartir/compartir/compartir.png';
import paw from '../../assets/Primarios/Info-like-compartir/huella/pawprint.png';
import './AnimalDetail.scss';
import { Link } from 'react-router-dom';
import Slider from '../../components/SliderComp/Slider';
import SliderClick from '../../components/SliderClick/SliderClick';

const AnimalDetail = () => {
  const URL = "http://localhost:5001/animals"
  const [animals, setAnimals] = useState([]);
  const [users, setUsers] = useState([]);

  const getAnimals = async () => {
    const res = await axios.get(URL);
    console.log(res.data);
   setAnimals(res.data)
}

  const getUsers = async () => {
    const res = await axios.get("http://localhost:5000/users");
    console.log(res.data);
   setUsers(res.data)
  }
  useEffect(() => getAnimals(), [])
  useEffect(() => getUsers(), [])

  return ( <>
  <div className="c">
    <div className="c-slider swiper">
      <div className="swiper-wrapper">
        <div className="swiper-slide">
          {animals.length>0 && <div className="c__image"> 
          <div className="c__image--arrow"><Link to=""> <p className="c__image--arrow-p">&lt;</p></Link></div>
          <img src={animals[0].image} alt=""/>
          </div>}
        </div>
        <div className="swiper-slide">
        
        </div>
        <div className="swiper-slide">
        
        </div>
      </div>
      <Slider/>
    </div>

      
      <div className="c__whitebox">
        <div className="c__whitebox--genre"> <img src={male} alt=""/></div>
        {animals.length>0 && <div className="c__whitebox--namecity">  <p>{animals[0].nombre}</p> <p>{animals[0].ciudad}</p></div>}
        <div className="c__whitebox--hearth+box"><img src={hearth} alt=""/><img src={share} alt=""/></div>
      </div>
      <div className="c__navbarDatesHealthAdopt"></div>
{/* 
      {users.length>0 && users.map((user, index) => (
        <div key={index}> <p>{user.name}</p></div>))} */}

      <div className="c__buttons"> 
        <div className="c__buttons--container"><button> Apadrinar </button></div> 
        <div className="c__buttons--container"><button> Adoptar </button></div>
      </div>
    </div>
<SliderClick/>
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