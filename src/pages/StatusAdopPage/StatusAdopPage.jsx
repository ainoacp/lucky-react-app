import React from 'react'
import './StatusAdopPage.scss';
import StatusEnd from '../../components/StatusEnd/StatusEnd';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom';
import axios from 'axios';
import ProtectoraLogo from '../../assets/Adopcion/logo/logo.png'
import Map from '../../assets/Adopcion/localization/localization.png'
import Mapa from '../../assets/Adopcion/mapa.png'
import Email from '../../assets/Secundarios/usuario/email/email.png'
import Whatsapp from '../../assets/Secundarios/usuario/telf/whatsapp.png'
import arrow from '../../assets/Arrow/Atras/atras.png'


const StatusAdopPage = () => {
  const { user } = useSelector((state) => state.auth)
  const { id } = useParams()

  const [estadoEnd, cambiarEstadoEnd] = useState(false);
  const [animal, setAnimal] = useState([]);
  const [toggleState, setToggleState] = useState(1);

  const getAnimal = async () => {
    const res = await axios.get(`http://localhost:5001/animals/${id}`);
    // res.data = animal
    setAnimal(res.data);
    console.log("esto esta bien", res.data);
  }

  const toggleTab = (index) => {
    setToggleState(index);
  };

  useEffect(() => {
    getAnimal();
  }, [id])

  return (
    <>
      <div className="container3">
        <div className="container3__header">
         <Link to="/lucky/home/options/adoptionStatus"> <div className="container3__header--img"><img src={arrow} alt="gg" /></div></Link>
          <div className="container3__header--text">
            <h4>Adopción de {animal.nombre}</h4>
          </div>
        </div>
        <div className="bloc-tabs">
          <button
            className={toggleState === 1 ? "tabs active-tabs" : "tabs"}
            onClick={() => toggleTab(1)}
          >
            Resumen
          </button>
          <button
            className={toggleState === 2 ? "tabs active-tabs" : "tabs"}
            onClick={() => toggleTab(2)}
          >
            Info adicional
          </button>
          <button
            className={toggleState === 3 ? "tabs active-tabs" : "tabs"}
            onClick={() => toggleTab(3)}
          >
            Adopción
          </button>
        </div>

        <div className="content-tabs">
          <div className={toggleState === 1 ? "content  active-content" : "content"}>

            <div className="c2">
              <div>
                <div className="c2__card">
                  <div className="c2__card--text"><p>Adopción de {animal.nombre}</p></div>
                  <div className="c2__card--group">
                    <div className="c2__card--group--img"><img src={
                      // animal.imagenes[0] || 
                      animal.image ||
                      "https://static.vecteezy.com/system/resources/thumbnails/004/141/669/small/no-photo-or-blank-image-icon-loading-images-or-missing-image-mark-image-not-available-or-image-coming-soon-sign-simple-nature-silhouette-in-frame-isolated-illustration-vector.jpg"
                    }
                      alt={animal._id}
                      className="bicharraco"
                    />
                    </div>
                    <div className="c2__card--group--data">
                      <div className="c2__card--group--data-k">
                        <span>Nombre:</span>
                        <span>Ciudad:</span>
                        <span>Sexo:</span>
                      </div>
                      <div className="c2__card--group--data-v">
                        <span className="text-data_bicha">{animal.nombre}</span>
                        <span className="text-data_bicha">{animal.ciudad}</span>
                        <span className="text-data_bicha">{animal.sexo}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="c2__line"></div>

              <div className='c2__shelter'>
                <div className='c2__shelter--publi'>
                  <div className='c2__shelter--publi--logo'><img src={ProtectoraLogo} alt="protectora" /></div>
                  <div className='c2__shelter--publi--text'>
                    <p>Asociación Protectora LARA</p>
                    <div className='c2__shelter--publi--text--address'><img src={Map} alt="map" /><span>Calle de Eraso 14, Madrid</span></div>
                  </div>
                </div>
                <div className='c2__shelter--map'>
                  <img src={Mapa} alt="Mapa" />
                </div>
                <div className='c2__shelter--contact'>
                  <p>Contacta con nosotros</p>
                  <img src={Email} />
                  <img src={Whatsapp} />
                </div>
              </div>

            </div>
          </div>

          <div
            className={toggleState === 2 ? "content  active-content" : "content"}
          >
            <h2>Subir imagenes</h2>
            <hr />
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente
              voluptatum qui adipisci.
            </p>
          </div>

          <div
            className={toggleState === 3 ? "content  active-content" : "content"}
          >
            <h2>Adopción</h2>
            <hr />
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eos sed
              nostrum rerum laudantium totam unde adipisci incidunt modi alias!
              Accusamus in quia odit aspernatur provident et ad vel distinctio
              recusandae totam quidem repudiandae omnis veritatis nostrum
              laboriosam architecto optio rem, dignissimos voluptatum beatae
              aperiam voluptatem atque. Beatae rerum dolores sunt.
            </p>
          </div>
        </div>
      </div>

      <StatusEnd
        estado={estadoEnd}
        cambiarEstado={cambiarEstadoEnd}>
      </StatusEnd>
    </>
  )
}

export default StatusAdopPage
