import React from 'react';
import './Navbar.scss';
import { Link } from 'react-router-dom';
import iconHome from '../../assets/Primarios/nav-bar/home/home.png';
import iconUbi from '../../assets/Primarios/nav-bar/ubicaciones/locate.png';
import iconAdop from '../../assets/Primarios/nav-bar/adopcion/mascota.png';
import iconMain from '../../assets/Primarios/nav-bar/menu/mS.png';
//import iconPict from '../../assets/Primarios/nav-bar/home/home.png';
import  usu from '../../assets/usuario/neutro-50.png'

const Navbar = () => {


  return (
    <>
    <div className='container'>  
     <nav className='navbar'>
          <Link to='/' className='home'><img src={iconHome} className='icon' alt='home'/></Link>
          <Link to='/map' className='map'><img src={iconUbi} className='icon' alt='map'/></Link>
          <Link to='/pet' className='pets'><img src={iconAdop} className='icon' alt='dog '/></Link>
          <Link to='/profile' className='profile'>
                    <div className='profilePicture'><img src={usu} className='usu' alt='profile ' />
                    </div>
          </Link>
          <Link to='/plus' className='plus'><img src={iconMain} className='icon' alt='...'/></Link>
      </nav>
    </div>
    </>
  )
}

export default Navbar
