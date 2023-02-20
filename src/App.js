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
import StatusPage from './pages/StatusPage/StatusPage';
import StatusAdopPage from './pages/StatusAdopPage/StatusAdopPage';
import CarrousselPage from './pages/CarrousselPage/CarrousselPage';
import FormsPage from './pages/FormsPage/FormsPage';
import AnimalDetail from './pages/AnimalDetail/AnimalDetail';
import { useDispatch } from 'react-redux';
import { checkSession } from './redux/auth/auth.actions';
import { useEffect } from 'react';
import AuthComponent from './components/AuthComponent'



function App() {

  const token = localStorage.getItem('token');
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    token && dispatch(checkSession(token, navigate))
  },[])

  return (

    <Routes>

      {/* <Route index element={<LandingPage />}>
        <Route path='info' element={<CarrousselPage />} />
        <Route path='start' element={<StartPage />}/>
      </Route>

      <Route path='/login' element={<LoginPage />}/>
      <Route path='/register' element={<RegisterPage />}/>

      <Route path='/home' element={<AuthComponent component={<HomePage />} /> }>
        <Route path=':id' element={<AuthComponent component={<HomePage />} /> }/>
        <Route path='map' element={<AuthComponent component={<MapPage />}/> }/>
        <Route path='pets' element={<AuthComponent component={<PetPage />}/> }>
          <Route path='detail' element={<AuthComponent component={<AnimalDetail />}/> }/>
        </Route>
        <Route path='options' element={<AuthComponent component={<ProfilePage />}/> }/>
        <Route path='more' element={<AuthComponent component={<PlusPage />}/> }/>
      </Route> */}

      <Route path="/" element={<LandingPage />} />
      <Route path="/info" element={<CarrousselPage />} />
      <Route path='/start' element={<StartPage />}/>
      <Route path='/login' element={<LoginPage />}/>
      <Route path='/register' element={<RegisterPage />}/>
      <Route path='/home' element={<HomePage />}/>
      <Route path='/map' element={<MapPage />}/>
      <Route path='/pet' element={<PetPage />}/>
      <Route path='/profile' element={<ProfilePage />}/>
      <Route path='/plus' element={<PlusPage />}/>
      <Route path='/animals/:id' element={<AnimalDetail />}/>
      <Route path='/status' element={<StatusPage />}/>
      <Route path='/statusAdop' element={<StatusAdopPage />}/>
      <Route path='/forms' element={<FormsPage />}/>

    </Routes>
      
  );
}

export default App;
