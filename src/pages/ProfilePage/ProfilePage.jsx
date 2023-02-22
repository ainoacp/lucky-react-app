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
import icono from '../../assets//Primarios/arrow/arrow.png'
import  usu from '../../assets/usuario/neutro-50.png'
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';

const ProfilePage = () => {

  const {user} = useSelector((state) => state.auth)
  
  return (
    <>
      <div className='container-profile'>
              <div className='profile-picture'><img src={user.image || usu}className='picture-profile'  alt=""/></div>
              
              <div className='container-start'>
                  <NavLink to="/lucky/home" className='box'>
                      <div className='box-start'><img src={iconprofil} className='picture-main'  alt="m"/>Mi perfil</div>
                      <img src={icono} className='ico'  alt="m"/>
                  </NavLink>   
                  
                  <NavLink to="/lucky/building"  className='box'>
                      <div className='box-start'>
                            <img src={iconandress} className='picture-main' alt="d"/>Direcciones
                      </div>
                        <img src={icono} className='ico'  alt="m"/>
                  </NavLink>

                  <NavLink to="/lucky/home/options/favPets"  className='box'>
                      <div className='box-start'>
                        <img src={iconfavor} className='picture-main' alt="f"/>Favoritos
                      </div>
                      <img src={icono} className='ico'  alt="m"/>
                  </NavLink>

                  <NavLink to="/lucky/building"  className='box'> 
                        <div className='box-start'>
                            <img src={iconnotf} className='picture-main' alt="n"/>Notificaciones
                        </div>  
                        <img src={icono} className='ico'  alt="m"/>
                  </NavLink>
            </div>
              <div className='container-end'>
                  <NavLink to="/lucky/home/options/adoptionStatus"  className='box'>
                      <div className='box-start'>
                           <img src={iconstatu} className='picture-main' alt="e"/>Estado de la adopción
                        </div>
                        <img src={icono} className='ico'  alt="m"/>
                  </NavLink>
                  <NavLink to="/lucky/building"  className='box'>
                      <div className='box-start'>
                          <img src={iconspons} className='picture-main' alt="ap"/>Apadrinar
                      </div>
                      <img src={icono} className='ico'  alt="m"/>
                    </NavLink>

                  <NavLink href="/lucky/building"  className='box'>
                        <div className='box-start'>
                            <img src={icondonat} className='picture-main' alt="d"/>Donar
                        </div>
                            <img src={icono} className='ico'  alt="m"/>
                    </NavLink>
              </div>
      </div>
      <Navbar></Navbar>
    </>
  )
}

export default ProfilePage
