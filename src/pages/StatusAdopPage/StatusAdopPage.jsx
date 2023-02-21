import React from 'react'
import './StatusAdopPage.scss';
import StatusEnd from '../../components/StatusEnd/StatusEnd';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import ProtectoraLogo from '../../assets/Adopcion/logo/logo.png'
import Map from '../../assets/Adopcion/localization/localization.png'
import Mapa from '../../assets/Adopcion/mapa.png'
import Email from '../../assets/Secundarios/usuario/email/email.png'
import Whatsapp from '../../assets/Secundarios/usuario/telf/whatsapp.png'


const StatusAdopPage = () => {
  const {user} = useSelector((state) => state.auth)
  const { id } = useParams()

  const [estadoEnd, cambiarEstadoEnd] = useState (false);
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
     <div className="container">
     <h1>Adopción de {animal.nombre}</h1>
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
        <div
          className={toggleState === 1 ? "content  active-content" : "content"}
        >
        <div>
              <div className="box-nameStatus">
                <p className="textname">{animal.nombre}</p>
                <div className="box-process">
                  <div className="data-status">completada</div>
                  <div className="estado">verde</div>
                </div>
              </div>

              <div className="box-bicha">
                <img
                  src={
                    // animal.imagenes[0] || 
                    animal.image ||
                    "https://static.vecteezy.com/system/resources/thumbnails/004/141/669/small/no-photo-or-blank-image-icon-loading-images-or-missing-image-mark-image-not-available-or-image-coming-soon-sign-simple-nature-silhouette-in-frame-isolated-illustration-vector.jpg"
                  }
                  alt={animal._id}
                  className="bicharraco"
                />
                <div className="bicharraco-detail">
                  <span className="text-data_bicha">Nombre: {animal.nombre}</span>
                  <span className="text-data_bicha">Ciudad: {animal.ciudad}</span>
                  <span className="text-data_bicha">Sexo: {animal.sexo}</span>
                </div>
              </div>
            </div>
            <div>
              <img src={ProtectoraLogo} alt="protectora" />
              <div>
                <p>Asociación Protectora LARA</p>
                <div><img src={Map} alt="map"/><p>Calle de Eraso 14, Madrid</p></div>
              </div>
              <img src={Mapa} alt="Mapa"/>
              <div>
                <p>Contacta con nosotros</p>
                <img src={Email}/>
                <img src={Whatsapp}/>
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
            estado ={estadoEnd}
            cambiarEstado={cambiarEstadoEnd}>
        </StatusEnd>  
    </>
  )
}

export default StatusAdopPage
