import React from 'react';
import './Navbar.scss';
import { Link } from 'react-router-dom';
import iconHome from '../../assets/Primarios/nav-bar/home/homeDesactive/home.png';
import iconUbi from '../../assets/Primarios/nav-bar/ubicaciones/mapaDesactive/mapa.png';
import iconAdop from '../../assets/Primarios/nav-bar/adopcion/mascotaDesactive/mascota.png';
//import iconMain from '../../assets/Primarios/nav-bar/menu/desactive.png';  <img className='icon' alt=''/>
//import iconPict from '../../assets/Primarios/nav-bar/home/home.png';
import  usu from '../../assets/usuario/neutro-50.png'
import { useSelector } from 'react-redux';

const Navbar = () => {
  // const { token } = useSelector((state) => state.auth)
  const {user} = useSelector((state) => state.auth)

  return (
    <>
    <div className='container2'>  
      <nav className='navbar'>
        {/* {!token &&<Link to='/lucky/home' className='home'><img src={iconHome} className='icon' alt='home'/></Link>}
        {!token &&<Link to='/lucky/map' className='map'><img src={iconUbi} className='icon' alt='map'/></Link>}
        {!token &&<Link to='/lucky/pet' className='pets'><img src={iconAdop} className='icon' alt='dog '/></Link>}
        {!token &&<Link to='/lucky/profile' className='profile'><div className='profilePicture'><img src={usu} className='usu' alt='profile ' /></div></Link>}
        {!token &&<Link to='/lucky/plus' className='plus'><p className='plus' >...</p></Link>}  */}
        <Link to='/lucky/home' className='home'><img src={iconHome} className='icon' alt='home'/></Link>
        <Link to='/lucky/building' className='map'><img src={iconUbi} className='icon' alt='map'/></Link>
        <Link to='/lucky/home/pets' className='pets'><img src={iconAdop} className='icon' alt='dog '/></Link>
        <Link to='/lucky/home/options' className='profile'><div className='profilePicture'><img src={user.image || usu} className='usu' alt='profile ' /></div></Link>
        <Link to='/lucky/home/more' className='plus'><p className='plus' >...</p></Link>
      </nav>
    </div>
    </>
  )
}

export default Navbar
