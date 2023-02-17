import React from 'react';
import './Navbar.scss';
import { Link } from 'react-router-dom';

const Navbar = () => {


  return (
    <>
    <div className='container'>  
     <nav className='navbar'>
          <Link to='/home' className='home'>home</Link>
          <Link to='/map' className='map'>map</Link>
          <Link to='/pet' className='pets'>dog</Link>
          <Link to='/profile' className='profile'>profile</Link>
          <Link to='/plus' className='plus'>...</Link>
      </nav>
    </div>
    </>
  )
}

export default Navbar
