import "./App.css";
import { Route, Routes, useNavigate } from "react-router-dom";
import LoginPage from "./pages/LoginPage/LoginPage";
import RegisterPage from "./pages/RegisterPage/RegisterPage";
import StartPage from "./pages/StartPage/StartPage";
import HomePage from "./pages/HomePage/HomePage";
import LandingPage from "../src/pages/LandingPage/LandingPage";
import MapPage from "./pages/MapPage/MapPage";
import PetPage from "./pages/PetPage/PetPage";
import PlusPage from "./pages/PlusPage/PlusPage";
import ProfilePage from "./pages/ProfilePage/ProfilePage";
import StatusPage from "./pages/StatusPage/StatusPage";
import StatusAdopPage from "./pages/StatusAdopPage/StatusAdopPage";
import CarrousselPage from "./pages/CarrousselPage/CarrousselPage";
import FormsPage from "./pages/FormsPage/FormsPage";
import AnimalDetail from "./pages/AnimalDetail/AnimalDetail";
import { useDispatch } from "react-redux";
import { checkSession } from "./redux/auth/auth.actions";
import { useEffect } from "react";
import AuthComponent from "./components/AuthComponent";
import FomPersonalDate from "./components/FormsComps/FormPersonalDate/FormPerson";
import FormFandH from "./components/FormsComps/FormFandH/FormFandH";
import FormPet from "./components/FormsComps/FormPet/FormPet";
import FavPetsPage from "./pages/FavPetsPage/FavPetsPage";
import AnimalsFilterPage from "./pages/AnimalsFilterPage/AnimalsFilterPage";
import BuildingPage from "./pages/BuildingPage/BuildingPage";

function App() {
  const token = localStorage.getItem("token");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    token && dispatch(checkSession(token, navigate));
  }, []);

  return (
    <Routes>
      <Route index element={<LandingPage />} />
      <Route path="lucky">
        <Route path="info" element={<CarrousselPage />} />
        <Route path="start" element={<StartPage />} />
        <Route path="login" element={<LoginPage />} />
        <Route path="register" element={<RegisterPage />} />
        <Route path="building" element={<BuildingPage />} />
        <Route path="home">
          <Route index element={<AuthComponent component={<HomePage />} />} />
          <Route
            path="map"
            element={<AuthComponent component={<MapPage />} />}
          />
          <Route path="pets">
            <Route index element={<AuthComponent component={<PetPage />} />} />
            <Route
              path="filter"
              element={<AuthComponent component={<AnimalsFilterPage />} />}
            />
            <Route path=":id">
              <Route
                index
                element={<AuthComponent component={<AnimalDetail />} />}
              />
              <Route
                path="adoptionForm"
                element={<AuthComponent component={<FormsPage />} />}
              />
            </Route>
          </Route>
          <Route path="options">
            <Route index element={<AuthComponent component={<ProfilePage />} />} />
            <Route path="adoptionStatus">
              <Route index element={<AuthComponent component={<StatusPage />} />} />
              <Route
                path=":id"
                element={<AuthComponent component={<StatusAdopPage />} />}
              />
            </Route>
            <Route
              path="favPets"
              element={<AuthComponent component={<FavPetsPage />} />}
            />
          </Route>
          <Route
            path="more"
            element={<AuthComponent component={<PlusPage />} />}
          />
          <Route
            path="adoptionForm"
            element={<AuthComponent component={<FormsPage />} />}
          />
          <Route
            path=":id"
            element={<AuthComponent component={<HomePage />} />}
          />
        </Route>
      </Route>
    </Routes>
  );
}

export default App;

// {/* <Route path="/" element={<LandingPage />} />
//       <Route path="/info" element={<CarrousselPage />} />
//       <Route path='/start' element={<StartPage />}/>
//       <Route path='/login' element={<LoginPage />}/>
//       <Route path='/register' element={<RegisterPage />}/>
//       <Route path='/home' element={<HomePage />}/>
//       <Route path='/map' element={<MapPage />}/>
//       <Route path='/pet' element={<PetPage />}/>
//       <Route path='/profile' element={<ProfilePage />}/>
//       <Route path='/plus' element={<PlusPage />}/>
//       <Route path='/animals/:id' element={<AnimalDetail />}/>
//       <Route path='/status' element={<StatusPage />}/>
//       <Route path='/statusAdop' element={<StatusAdopPage />}/>
//       <Route path='/forms' element={<FormsPage />}/> */}
