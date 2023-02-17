import React from 'react';
import './ProfilePage.scss';
import Navbar from '../../components/Navbar/Navbar';


const ProfilePage = () => {
  
  return (
    <>
      <div className='container-profile'>
          <div className='profile-picture'><img className='picture-profile'  alt=""></img></div>
          <div className='container-start'>
              <div className='box'><img className='picture-main'  alt=""></img>Mi perfil</div>
              <div className='box'><img className='picture-main' alt=""></img>Direcciones</div>
              <div className='box'><img className='picture-main' alt=""></img>Favoritos</div>
              <div className='box'><img className='picture-main' alt=""></img>Notificaciones</div>
          </div>
          <div className='container-end'>
              <div className='box'><img className='picture-main' alt=""></img>Estado de la adopción</div>
              <div className='box'><img className='picture-main' alt=""></img>Apadrinar</div>
              <div className='box'><img className='picture-main' alt=""></img>Donar</div>
          </div>
      </div>
      <Navbar></Navbar>
    </>
  )
}

export default ProfilePage
