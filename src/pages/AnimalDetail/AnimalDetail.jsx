import axios from 'axios';
import React, { useEffect, useState } from 'react';
import arrow from '../../assets/Primarios/arrow/arrowBack/atras.png'
import male from '../../assets/Primarios/filtros-animales-menus/sexo/macho/male.png';
import female from '../../assets/Primarios/filtros-animales-menus/sexo/hembra/female.png';
import hearth from '../../assets/Primarios/Info-like-compartir/like/favoritos.png';
import share from '../../assets/Primarios/Info-like-compartir/compartir/compartir.png';
import paw from '../../assets/Primarios/Info-like-compartir/huella/pawprint.png';
import help from '../../assets/Secundarios/usuario/ayuda/ayuda.png';
import './AnimalDetail.scss';
import { Link } from 'react-router-dom';
import Slider from '../../components/SliderComp/Slider';
import HomePage from '../HomePage/HomePage';
import Tabs from '../../components/Tabs/Tabs';


const AnimalDetail = () => {

  const URL = "http://localhost:5001/animals"
  const [animals, setAnimals] = useState([]);
  const [popUp, setPopUp] = useState(false);
  const [toggleState, setToggleState] = useState(1);

  const toggleTab = (index) => {
    setToggleState(index);
  };

  const openPopUp = () => {
    setPopUp(true);
  }
  const closePopUp = () => {
    setPopUp(false);
  }

  const getAnimals = async () => {
    const res = await axios.get(URL);
    console.log(res.data);
    setAnimals(res.data)
  }

  useEffect(() => getAnimals(), [])

  const navigateTo = () => {
    return <Link to={<HomePage />} />
  }



  return (<>

    {/* // Pop Up here: */}

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
    </div>}

    {/* // Image slider picture */}

    {animals.length > 0 && animals.map((animal, index) => (
      <div key={animal._id} className="c">
        <div className="c-slider swiper">
          <div className="swiper-wrapper">
            <div className="swiper-slide">
              <div className="c__image">
                <div className="c__image--arrow"><Link to=""> <img className="c__image--arrow-img" src={arrow} alt="" /></Link></div>
                <img className="c__image--picture" src={animal.image} alt="" />
              </div>
            </div>
            <div className="swiper-slide">
              {/* <img className="c__image--picture" src={animal.imagenes[0]} alt=""/> */}
            </div>
            <div className="swiper-slide">

            </div>
          </div>
          <Slider />
        </div>

    {/* // Whitebox info with hearth and share content */}

        <div className="c__whitebox">
          <div className='c__whitebox--left'>
            <div className="c__whitebox--left--genre"> {animal.sexo === "Macho" ? <img src={male} alt="" /> : <img src={female} alt="" />}</div>
            <div className="c__whitebox--left--namecity">  <p>{animal.nombre}</p> <p>{animal.ciudad}</p></div>
          </div>

          <div className="c__whitebox--right"><img src={hearth} alt="" /><img src={share} alt="" /></div>
        </div>

    {/* // Body with the NAVIGATION info */}

        <div className="container">
          <div className="bloc-tabs">
            <button
              className={toggleState === 1 ? "tabs active-tabs" : "tabs"}
              onClick={() => toggleTab(1)}>Datos
            </button>
            <button
              className={toggleState === 2 ? "tabs active-tabs" : "tabs"}
              onClick={() => toggleTab(2)}>
              Salud
            </button>
            <button
              className={toggleState === 3 ? "tabs active-tabs" : "tabs"}
              onClick={() => toggleTab(3)}
            > Adopcion
            </button>
          </div>

      {/* // Body with 1 INFO BLOCK */}

          <div className="content-tabs">
            <div className={toggleState === 1 ? "content  active-content" : "content"}>
              <div className="c__navbar">

                <div className='c__navbar--data1'>
                  <div className="c__navbar--data1--line"> <div><img src={paw} alt="" /> <span>Especie</span></div> <div><span>{animal.especie}</span></div> </div>
                  <div className="c__navbar--data1--line"> <div><img src={paw} alt="" /> <span>Fecha de nacimiento</span></div> <div><span>{animal.fechaDeNacimiento}</span></div> </div>
                  <div className="c__navbar--data1--line"> <div><img src={paw} alt="" /> <span>Sexo</span></div> <div><span>{animal.sexo}</span></div> </div>
                  <div className="c__navbar--data1--line"> <div><img src={paw} alt="" /> <span>Tamaño</span></div> <div><span>{animal.tamaño}</span></div> </div>
                  <div className="c__navbar--data1--line"> <div><img src={paw} alt="" /> <span>Peso</span></div> <div><span>{animal.peso}</span></div> </div>
                </div>

                <div className="c__navbar--data2">
                  <div className='c__navbar--data2--title'><span>Personalidad</span></div>
                  <div className='c__navbar--data2--personality'>
                    <span>{animal.personalidad[index]}</span>
                  </div>
                </div>

                <div className="c__navbar--data3">
                  <div className='c__navbar--data3--title'><p>Historia</p></div>
                  <div className='c__navbar--data3--text'>
                    <p>{animal.historia}</p>
                  </div>
                </div>
              </div>

            </div>

            {/* // Body with 2 INFO BLOCK */}

            <div className={toggleState === 2 ? "content  active-content" : "content"}>
              <div className='c__navbar--data1'>
                <div className="c__navbar--data1--line"> <div><img src={paw} alt="" /> <span>Vacunado</span></div> <div><span>{animal.vacunado}</span></div> </div>
                <div className="c__navbar--data1--line"> <div><img src={paw} alt="" /> <span>Desparasitado</span></div> <div><span>{animal.desparasitado}</span></div> </div>
                <div className="c__navbar--data1--line"> <div><img src={paw} alt="" /> <span>Sano</span></div> <div><span>{animal.sano}</span></div> </div>
                <div className="c__navbar--data1--line"> <div><img src={paw} alt="" /> <span>Esterilizado</span></div> <div><span>{animal.esterilizado}</span></div> </div>
                <div className="c__navbar--data1--line"> <div><img src={paw} alt="" /> <span>Identificado</span></div> <div><span>{animal.identificado}</span></div> </div>
                <div className="c__navbar--data1--line"> <div><img src={paw} alt="" /> <span>Microchip</span></div> <div><span>{animal.microchip}</span></div> </div>
              </div>

              <div className="c__navbar--data3">
                <div className='c__navbar--data3--title'><p>Tienes que saber que</p></div>
                <div className='c__navbar--data3--text'>
                  <p>{animal.aSaber}</p>
                </div>
              </div>
            </div>

            {/* // Body with 3 INFO BLOCK */}

            <div className={toggleState === 3 ? "content  active-content" : "content"}>
              <div className="c__navbar--data3">
                <div className='c__navbar--data3--title'><p>Requisitos adopción</p></div>
                <div className='c__navbar--data3--text'>
                  <p>{animal.requisitosAdopcion}</p>
                </div>
              </div>

              <div className="c__navbar--data3">
                <div className='c__navbar--data3--title'><span>Tasa de adopción</span> <img src={help} alt="" /></div>
                <div className='c__navbar--data3--text'>
                  <p>{animal.tasaAdopcion}€</p>
                </div>
              </div>

              <div className="c__navbar--data3">
                <div className='c__navbar--data3--title'><p>¿Se envía a otra ciudad?</p></div>
                <div className='c__navbar--data3--text'>
                  <p>{animal.seEnvia}</p>
                </div>
              </div>

            </div>
          </div>
        </div>

        {/* // Footer with BUTTONS */}

        <div className="c__buttons">
          <div className="c__buttons--container"><button className="c__buttons--container-1"> Apadrinar </button></div>
          <div className="c__buttons--container"><button onClick={openPopUp} className="c__buttons--container-2"> Adoptar </button></div>
        </div>
      </div>))}

  </>)
}

export default AnimalDetail