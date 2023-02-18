import './App.css';
import { Route, Routes, useNavigate } from 'react-router-dom';
import Login from './pages/Login/Login';
import Register from './pages/Register/Register';
import Home from './pages/Home/Home';
import LandingPage from "../src/pages/LandingPage/LandingPage";
import Slider from "../src/components/SliderComp/Slider"
import MapPage from './pages/MapPage/MapPage';
import PetPage from './pages/PetPage/PetPage';
import PlusPage from './pages/PlusPage/PlusPage';
import ProfilePage from './pages/ProfilePage/ProfilePage';
import { useDispatch } from 'react-redux';
import { checkSession } from './redux/auth/auth.actions';
import { useEffect } from 'react';
import AnimalDetail from './pages/AnimalDetail/AnimalDetail';


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
      <Route path="/slider" element={<Slider />} />
      <Route path='/home' element={<Home />}/>
      <Route path='/login' element={<Login />}/>
      <Route path='/register' element={<Register />}/>
      <Route path='/map' element={<MapPage />}/>
      <Route path='/pet' element={<PetPage />}/>
      <Route path='/profile' element={<ProfilePage />}/>
      <Route path='/plus' element={<PlusPage />}/>
      <Route path='/animalDetails' element={<AnimalDetail />}/>
    </Routes>
      
  );
}

export default App;
