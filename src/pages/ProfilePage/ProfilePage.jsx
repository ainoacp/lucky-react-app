import React from 'react';
import './ProfilePage.scss';
import Navbar from '../../components/Navbar/Navbar';
import iconprofil  from '../../assets/Primarios/perfil/mi-perfil/chica/chica.png';
import iconandress from '../../assets/Primarios/perfil/direcciones/localization.png';    
import iconfavor from '../../assets/Primarios/perfil/favoritos/favoritosCopy.png';    
import iconnotf from '../../assets/Primarios/perfil/notificaciones/notification.png';    
import iconstatu from '../../assets/Primarios/perfil/estado-de-adopcion/mascota.png';    
import iconspons from '../../assets/Primarios/perfil/apadrinar/apadrina.png';    
import icondonat from '../../assets/Primarios/perfil/donar/donar.png'; 
import icono from '../../assets/iconline-2px/icons8->-24.png'
import  usu from '../../assets/usuario/neutro-50.png'
const ProfilePage = () => {
  
  return (
    <>
      <div className='container-profile'>
              <div className='profile-picture'><img src={usu}className='picture-profile'  alt=""/></div>
              
              <div className='container-start'>
                  <a href="#" className='box'>
                      <div className='box-start'><img src={iconprofil} className='picture-main'  alt="m"/>Mi perfil</div>
                      <img src={icono} className='ico'  alt="m"/>
                  </a>   
                  
                  <a href="#"  className='box'>
                      <div className='box-start'>
                            <img src={iconandress} className='picture-main' alt="d"/>Direcciones
                      </div>
                        <img src={icono} className='ico'  alt="m"/>
                  </a>

                  <a href="#"  className='box'>
                      <div className='box-start'>
                        <img src={iconfavor} className='picture-main' alt="f"/>Favoritos
                      </div>
                      <img src={icono} className='ico'  alt="m"/>
                  </a>

                  <a href="#"  className='box'> 
                        <div className='box-start'>
                            <img src={iconnotf} className='picture-main' alt="n"/>Notificaciones
                        </div>  
                        <img src={icono} className='ico'  alt="m"/>
                  </a>
            </div>
              <div className='container-end'>
                  <a href="#"  className='box'>
                      <div className='box-start'>
                           <img src={iconstatu} className='picture-main' alt="e"/>Estado de la adopción
                        </div>
                        <img src={icono} className='ico'  alt="m"/>
                  </a>

                  <a href="#"  className='box'>
                      <div className='box-start'>
                          <img src={iconspons} className='picture-main' alt="ap"/>Apadrinar
                      </div>
                      <img src={icono} className='ico'  alt="m"/>
                    </a>

                  <a href="#"  className='box'>
                        <div className='box-start'>
                            <img src={icondonat} className='picture-main' alt="d"/>Donar
                        </div>
                            <img src={icono} className='ico'  alt="m"/>
                    </a>
              </div>
      </div>
      <Navbar></Navbar>
    </>
  )
}

export default ProfilePage
