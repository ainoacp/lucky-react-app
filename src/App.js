import './App.css';
import { Route, Routes, useNavigate } from 'react-router-dom';
import LoginPage from './pages/LoginPage/LoginPage';
import RegisterPage from './pages/RegisterPage/RegisterPage';
import StartPage from './pages/StartPage/StartPage';
import HomePage from './pages/HomePage/HomePage';
import LandingPage from "../src/pages/LandingPage/LandingPage";
import MapPage from './pages/MapPage/MapPage';
import PetPage from './pages/PetPage/PetPage';
import PlusPage from './pages/PlusPage/PlusPage';
import ProfilePage from './pages/ProfilePage/ProfilePage';
import CarrousselPage from './pages/CarrousselPage/CarrousselPage';
import { useDispatch } from 'react-redux';
import { checkSession } from './redux/auth/auth.actions';
import { useEffect } from 'react';

function App() {

  const token = localStorage.getItem('token');
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    token && dispatch(checkSession(token, navigate))
  }, [])

  return (

    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/carroussel" element={<CarrousselPage />} />
      <Route path='/start' element={<StartPage />}/>
      <Route path='/login' element={<LoginPage />}/>
      <Route path='/register' element={<RegisterPage />}/>
      <Route path='/home' element={<HomePage />}/>
      <Route path='/map' element={<MapPage />}/>
      <Route path='/pet' element={<PetPage />}/>
      <Route path='/profile' element={<ProfilePage />}/>
      <Route path='/plus' element={<PlusPage />}/>
    </Routes>
      
  );
}

export default App;
