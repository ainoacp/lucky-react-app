import React from 'react';
import './ProfilePage.scss';
import Navbar from '../../components/Navbar/Navbar';


const ProfilePage = () => {
  
  return (
    <>
      <div className='container-profile'>
          <div className='profile-picture'></div>
          <div className='box'></div>
          <div className='box'></div>
          <div className='box'></div>
          <div className='box'></div>
          <br></br>
          <div className='box'></div>
          <div className='box'></div>
          <div className='box'></div>
      </div>
      <Navbar></Navbar>
    </>
  )
}

export default ProfilePage
