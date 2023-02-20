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
import { Link, useParams } from 'react-router-dom';
import Slider from '../../components/SliderComp/Slider';
import HomePage from '../HomePage/HomePage';
import Tabs from '../../components/Tabs/Tabs';


const AnimalDetail = () => {
  const {id} = useParams()
  const [animals, setAnimals] = useState({});
  const [popUp, setPopUp] = useState(false);
  const [toggleState, setToggleState] = useState(1);

  const boolToWord = (bool) => {
    if (bool=== true){
      return 'Si'
    } else {
      return 'No'
    }
  }

  // function reading (animals){
  //   for (let i = 0; i < animals.personalidad.length; i++) {
      
  //     return <span>{animals.personalidad[i]}</span>
      
  //   }
  // }

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
    const res = await axios.get(`http://localhost:5001/animals/${id}`);
    console.log("esto esta bien",res.data);
    setAnimals(res.data)
  }

  useEffect(() => {getAnimals()}, [id])
  // useEffect(() => {reading()}, [animals])

  const navigateTo = () => {
    return <Link to={<HomePage />} />
  }

  return (<>

    {/* // Pop Up here: */}

    {/* <img src={animals.image} alt=""/> */}


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

    { animals !== null && 
      <div key={animals._id} className="c">
        <div className="c-slider swiper">
          <div className="swiper-wrapper">
            <div className="swiper-slide">
              <div className="c__image">
                <div className="c__image--arrow"><Link to=""> <img className="c__image--arrow-img" src={arrow} alt="" /></Link></div>
                <img className="c__image--picture" src={animals.image} alt="" />
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
            <div className="c__whitebox--left--genre"> {animals.sexo === "Macho" ? <img src={male} alt="" /> : <img src={female} alt="" />}</div>
            <div className="c__whitebox--left--namecity">  <p>{animals.nombre}</p> <p>{animals.ciudad}</p></div>
          </div>

          <div className="c__whitebox--right"><img src={hearth} alt="" /><img src={share} alt="" /></div>
        </div>

          {/* // Body with the NAVIGATION info */}

        <div className="container1">
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
                  <div className="c__navbar--data1--line"> <div><img src={paw} alt="" /> <span>Especie</span></div> <div><span>{animals.especie}</span></div> </div>
                  <div className="c__navbar--data1--line"> <div><img src={paw} alt="" /> <span>Fecha de nacimiento</span></div> <div><span>{animals.fechaDeNacimiento}</span></div> </div>
                  <div className="c__navbar--data1--line"> <div><img src={paw} alt="" /> <span>Sexo</span></div> <div><span>{animals.sexo}</span></div> </div>
                  <div className="c__navbar--data1--line"> <div><img src={paw} alt="" /> <span>Tamaño</span></div> <div><span>{animals.tamaño}</span></div> </div>
                  <div className="c__navbar--data1--line"> <div><img src={paw} alt="" /> <span>Peso</span></div> <div><span>{animals.peso}</span></div> </div>
                </div>

                <div className="c__navbar--data2">
                  <div className='c__navbar--data2--title'><span>Personalidad</span></div>
                  <div className='c__navbar--data2--personality'>
                   <span>{animals.personalidad}</span>
                  </div>
                </div>

                <div className="c__navbar--data3">
                  <div className='c__navbar--data3--title'><p>Historia</p></div>
                  <div className='c__navbar--data3--text'>
                    <p>{animals.historia}</p>
                  </div>
                </div>
              </div>

            </div>

            {/* // Body with 2 INFO BLOCK */}

            <div className={toggleState === 2 ? "content  active-content" : "content"}>
              <div className='c__navbar--data1'>
                <div className="c__navbar--data1--line"> <div><img src={paw} alt="" /> <span>Vacunado</span></div> <div><span>{boolToWord(animals.vacunado)}</span></div> </div>
                <div className="c__navbar--data1--line"> <div><img src={paw} alt="" /> <span>Desparasitado</span></div> <div><span>{boolToWord(animals.desparasitado)}</span></div> </div>
                <div className="c__navbar--data1--line"> <div><img src={paw} alt="" /> <span>Sano</span></div> <div><span>{boolToWord(animals.sano)}</span></div> </div>
                <div className="c__navbar--data1--line"> <div><img src={paw} alt="" /> <span>Esterilizado</span></div> <div><span>{boolToWord(animals.esterilizado)}</span></div> </div>
                <div className="c__navbar--data1--line"> <div><img src={paw} alt="" /> <span>Identificado</span></div> <div><span>{boolToWord(animals.identificado)}</span></div> </div>
                <div className="c__navbar--data1--line"> <div><img src={paw} alt="" /> <span>Microchip</span></div> <div><span>{boolToWord(animals.microchip)}</span></div> </div>
              </div>

              <div className="c__navbar--data3">
                <div className='c__navbar--data3--title'><p>Tienes que saber que</p></div>
                <div className='c__navbar--data3--text'>
                  <p>{animals.aSaber}</p>
                </div>
              </div>
            </div>

            {/* // Body with 3 INFO BLOCK */}

            <div className={toggleState === 3 ? "content  active-content" : "content"}>
              <div className="c__navbar--data3">
                <div className='c__navbar--data3--title'><p>Requisitos adopción</p></div>
                <div className='c__navbar--data3--text'>
                  <p>{animals.requisitosAdopcion}</p>
                </div>
              </div>

              <div className="c__navbar--data3">
                <div className='c__navbar--data3--title'><span>Tasa de adopción</span> <img src={help} alt="" /></div>
                <div className='c__navbar--data3--text'>
                  <p>{animals.tasaAdopcion}€</p>
                </div>
              </div>

              <div className="c__navbar--data3">
                <div className='c__navbar--data3--title'><p>¿Se envía a otra ciudad?</p></div>
                <div className='c__navbar--data3--text'>
                  <p>{animals.seEnvia}</p>
                </div>
              </div>

            </div>
          </div>
        </div>

        {/* // Footer with BUTTONS */}

        <div className="c__buttonsAnimals">
          <div className="c__buttonsAnimals--coso"><button className="c__buttonsAnimals--coso-1"> Apadrinar </button></div>
          <div className="c__buttonsAnimals--coso"><button onClick={openPopUp} className="c__buttonsAnimals--coso-2"> Adoptar </button></div>
        </div>

    </div>}

      

  </>)
}

export default AnimalDetail