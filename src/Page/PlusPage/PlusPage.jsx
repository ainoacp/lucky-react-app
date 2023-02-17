import React from 'react'
import './PlusPage.scss';
import Navbar from '../../components/Navbar/Navbar';


const PlusPage = () => {

  return (
    <>   
    <div className='container-profile'>
          
          <div className='container-start'>
              <div className='box'><img className='picture-main'  alt=""></img>Asociaciones protectoras</div>
              <div className='box'><img className='picture-main' alt=""></img>Eventos</div>
              <div className='box'><img className='picture-main' alt=""></img>Curiosidades</div>
              <div className='box'><img className='picture-main' alt=""></img>Ayuda</div>
              <div className='box'><img className='picture-main' alt=""></img>Configuración</div>
          </div>
          <div className='container-end'>           
              <div className='box'><img className='picture-main' alt=""></img>Cerrar sesión</div>
          </div>
      </div>
      <Navbar></Navbar>   
    </>
  )
}

export default PlusPage
