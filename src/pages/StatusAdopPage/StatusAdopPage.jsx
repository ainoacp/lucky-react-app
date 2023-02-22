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
import ButtonSend from '../../components/Buttons/Send/ButtonSend'

const StatusAdopPage = () => {
  const {user} = useSelector((state) => state.auth)
  const { id } = useParams()

  const [estadoEnd, cambiarEstadoEnd] = useState (true);
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
      <div className="containerAdopStatus"> 
          <div className='containerAdopStatusNavbar'>             
                  <Link to="/lucky/home/options" className="returnAdop"></Link>             
                  <spam className="title-statusAdopnav">Adopción de {animal.nombre}</spam>
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

      

     
     
      <div className="container-boxAdopStatus">
          <div className={toggleState === 1 ? "content  active-content" : "content"}><div>
               <div className='box-profile'>   

                    <div className="box-nameAdoptStatus">
                         
                              <p className="textnam-bicha">PEPEEEEE{animal.nombre}</p> 
                             
                                  <img className="bicharraco" src={
                                      // animal.imagenes[0] || 
                                          animal.image ||
                                    "https://static.vecteezy.com/system/resources/thumbnails/004/141/669/small/no-photo-or-blank-image-icon-loading-images-or-missing-image-mark-image-not-available-or-image-coming-soon-sign-simple-nature-silhouette-in-frame-isolated-illustration-vector.jpg"
                                    } alt={animal._id}/>                                                                          
                      </div>

                      

                        <div className="bicharraco-detail">
                                <span className="text-data_bicha">Nombre: {animal.nombre}</span>
                                <span className="text-data_bicha">Ciudad: {animal.ciudad}</span>
                                <span className="text-data_bicha">Sexo: {animal.sexo}</span>                            
                        </div>
                </div>  

                  
                              
                <div className='box-adop-map'>
                              <p className='asoLine'>________________________________________________</p>
                              <div className='box-adop-aso'>
                                <img className='box-adop-map__img' src={ProtectoraLogo} alt="protectora" />

                                <div className='box-adop-mapAsoc'>
                                    <p className='box-adop-map_A'>Asociación Protectora LARA</p>
                                   <div className='box-adop-map_B'>
                                    <img className='asocdir' src={Map} alt="map"/><p className='box-adop-map_A'>Calle de Eraso 14, Madrid</p></div>
                                </div>
                            </div>

                      <img className='box-adop-map__imgMap' src={Mapa} alt="Mapa"/>

                      <div className='box-adop-map-contact'>
                          <p className='contact'>Contacta con nosotros</p>
                          <img className='contact' src={Email} alt=""/>
                          <img className='contact' src={Whatsapp} alt=""/>
                      </div>
                </div>
                </div>
        </div>
        

        <div className={toggleState === 2 ? "content  active-content" : "content"} >  

            <div className='boxtextinfo2'>
            <h2 className='textnam-bicha'>Subir imagenes</h2>
            
            <p>Necesitamos que nos subas algunas fotos de dónde va vivir tu nueva mascota para poder echarte una mano si necesitas algo más de información </p>
              <div className='subefoto'></div>                  
            
            
            <p className='asoLine'>________________________________________________</p>                      
            <h2 className='textnam-bicha'> ¿Cómo quieres pagar las tasas?</h2>                  
               <p>Para pagar las tasas de adopción puedes elegir o pagarlo mediante la app con un pago único o poniéndose en contacto con la protectora para fraccionar el pagos </p>
                <ButtonSend></ButtonSend>     
               </div>
               
        </div>





        <div className={toggleState === 3 ? "content  active-content" : "content"}> 
        <div className='boxtextinfo2'>            
            <h2 className='textnam-bicha' >Adopción</h2>
            
            <div className='box-adop-map'>
                              
                              <div className='box-adop-aso'>
                                <img className='box-adop-map__img' src={ProtectoraLogo} alt="protectora" />

                                <div className='box-adop-mapAsoc'>
                                    <p className='box-adop-map_A'>Asociación Protectora LARA</p>
                                   <div className='box-adop-map_B'>
                                    <img className='asocdir' src={Map} alt="map"/><p className='box-adop-map_A'>Calle de Eraso 14, Madrid</p></div>
                                </div>
                            </div>

                      <img className='box-adop-map__imgMap' src={Mapa} alt="Mapa"/>

                </div>

                <p className='asoLine'>________________________________________________</p>


                <ButtonSend>{/*<a
          href=
          onClick={() => cambiarEstadoEnd(!estadoEnd)}
          className="end"
          alt="end"
        ></a>*/} </ButtonSend>  
                </div> 
        </div>
         
          <StatusEnd
              estado ={estadoEnd}
              cambiarEstado={cambiarEstadoEnd}>
          </StatusEnd>  
        </div>
      </div>
    
  </>
  );
};

export default StatusAdopPage
