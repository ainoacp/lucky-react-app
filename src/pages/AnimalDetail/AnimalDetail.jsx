import axios from 'axios';
import React, { useEffect, useState } from 'react';
import arrow from '../../assets/Primarios/arrow/arrowBack/atras.png'
import male from '../../assets/Primarios/filtros-animales-menus/sexo/macho/male.png';
import female from '../../assets/Primarios/filtros-animales-menus/sexo/hembra/female.png';
import hearth from '../../assets/Primarios/Info-like-compartir/like/favoritos.png';
import share from '../../assets/Primarios/Info-like-compartir/compartir/compartir.png';
import paw from '../../assets/Primarios/Info-like-compartir/huella/pawprint.png';
import './AnimalDetail.scss';
import { Link } from 'react-router-dom';
import Slider from '../../components/SliderComp/Slider';
import HomePage from '../HomePage/HomePage';

const AnimalDetail = () => {
  const URL = "http://localhost:5001/animals"
  const [animals, setAnimals] = useState([]);
  const [popUp, setPopUp] = useState(false);

  const getAnimals = async () => {
    const res = await axios.get(URL);
    console.log(res.data);
   setAnimals(res.data)
}

  useEffect(() => getAnimals(), [])

  const navigateTo = () =>{
    return <Link to={<HomePage />} />
  }

  const openPopUp = () => {
    setPopUp(true);
  }
  const closePopUp = () => {
    setPopUp(false);
  }

  return ( <>

 {/* // Pop Up aqui abajo: */}
  {popUp === true && <div className="popUp">  
  <div className="popUp__whiteBox">
    <div className="popUp__whiteBox--title"><p>Solicitud de adopción</p></div>
    <div className="popUp__whiteBox--text"><p>Adoptar es un acto de amor, pero sobre todo de una responsabilidad de por vida</p></div>
    <div className="popUp__whiteBox--text"><p>Por éste motivo es importante qeu veas el siguiente video donde te explicamos como va a ser todo el proceso de adopción</p></div>

    <div className="popUp__whiteBox--video"><iframe width="250" height="160" src="https://www.youtube.com/embed/ZxgQDllsaaA" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe></div>

    <div className="popUp__whiteBox--continue"><p>¿Quieres continuar con el proceso de adopción?</p></div>
    <div className="popUp__whiteBox--buttons">
      <button className="popUp__whiteBox--buttons--1" onClick={closePopUp}>Cancelar</button>
      <button className="popUp__whiteBox--buttons--2" onClick={navigateTo}>Continuar</button>
    </div>
  </div>
</div> }

{/* // Pagina: */}

  <div className="c">
    <div className="c-slider swiper">
      <div className="swiper-wrapper">
        <div className="swiper-slide">
          {animals.length>0 && <div className="c__image"> 
          <div className="c__image--arrow"><Link to=""> <img className="c__image--arrow-img" src={arrow} alt=""/></Link></div>
          <img className="c__image--picture" src={animals[0].image} alt=""/>
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
        {animals.length>0 && <div className='c__whitebox--left'>
          <div className="c__whitebox--left--genre"> {animals[0].sexo === "Macho" ? <img src={male} alt=""/> : <img src={female} alt=""/>}</div>
          <div className="c__whitebox--left--namecity">  <p>{animals[0].nombre}</p> <p>{animals[0].ciudad}</p></div>
         </div>}
        
        <div className="c__whitebox--right"><img src={hearth} alt=""/><img src={share} alt=""/></div>
      </div>

      <div className="c__navbar">

        {animals.length>0 && <div className='c__navbar--data1'>
          <div className="c__navbar--data1--line"> <div><img src={paw} alt=""/> <span>Especie</span></div> <div><span>{animals[0].especie}</span></div> </div>
          <div className="c__navbar--data1--line"> <div><img src={paw} alt=""/> <span>Fecha de nacimiento</span></div> <div><span>{animals[0].fechaDeNacimiento}</span></div> </div>
          <div className="c__navbar--data1--line"> <div><img src={paw} alt=""/> <span>Sexo</span></div> <div><span>{animals[0].sexo}</span></div> </div>
          <div className="c__navbar--data1--line"> <div><img src={paw} alt=""/> <span>Tamaño</span></div> <div><span>{animals[0].tamaño}</span></div> </div>
          <div className="c__navbar--data1--line"> <div><img src={paw} alt=""/> <span>Peso</span></div> <div><span>{animals[0].peso}</span></div> </div>
        </div>}

        <div className="c__navbar--data2">
          <div className='c__navbar--data2--title'><span>Personalidad</span></div>
          <div>
          {animals.length>0 &&<span>{animals[0].personalidad}</span>}
          </div>
        </div>

        <div className="c__navbar--data3">
          <div className='c__navbar--data3--title'><p>Historia</p></div>
          <div className='c__navbar--data3--text'>
          {animals.length>0 &&<p>{animals[0].historia}</p>}
          </div>
        </div>
      </div>
    {/* 
      {users.length>0 && users.map((user, index) => (
        <div key={index}> <p>{user.name}</p></div>))} */}

      <div className="c__buttons"> 
        <div className="c__buttons--container"><button  className="c__buttons--container-1"> Apadrinar </button></div> 
        <div className="c__buttons--container"><button onClick={openPopUp} className="c__buttons--container-2"> Adoptar </button></div>
      </div>
    </div>
  
{/* <SliderClick/> */}

  
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