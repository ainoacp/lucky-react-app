import './FormComponentsStyle.scss'
import FomPersonalDate from "./FormPersonalDate/FormPerson";
import FormPet from "./FormPet/FormPet";
import FormFandH from "./FormFandH/FormFandH";
import { useForm } from "react-hook-form";
import { Swiper, SwiperSlide, } from "swiper/react";
import SwiperCore, { Navigation, Pagination, A11y } from "swiper";
import "swiper/css";
import  imgCat from "../../assets/Primarios/playfulcat/PlayfulCatRchv.png"
import "swiper/css/navigation";
import { registerAdoption, registerForm } from '../../redux/auth/auth.actions';
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import './FormComponentsStyle.scss'
import {  useEffect, useState } from "react";
import axios from "axios";
// import { useRef } from "react";
SwiperCore.use([Navigation, Pagination, A11y]);

export default function FomsComponents({petDate,personalDate,fandHomeDate}) {

  const {user} = useSelector((state) => state.auth)
  const { id } = useParams()

  const [animal, setAnimal] = useState({});
  const [myUser, setMyUser] = useState([]);
  const [popUp, setPopUp] = useState(false);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [dataPet,setDataPet]=useState() 
  const [datepersonal,setDatepersonal]=useState() 
  const [dateFandHome,setDateFandHome]=useState() 
  const [pag1, setPag1] = useState(true);
  const [pag2, setPag2] = useState(true);
  const [pag3, setPag3] = useState(true);
  
const totaldate={...dataPet,...datepersonal,...dateFandHome}
console.log("total",totaldate);

  const getUser = async () => {
    const res = await axios.get(`http://localhost:5001/users/${user._id}`);
    setMyUser(res.data);
  }

  const getAnimals = async () => {
    const res = await axios.get(`http://localhost:5001/animals/${id}`);
    setAnimal(res.data); 
    console.log("esto esta bien", res.data);
  }

  const registrar = async (formData) => {
      dispatch(registerForm(formData, navigate))
      console.log(JSON.stringify( formData));
  }

  const openPopUp = () => {
    console.log("esto es el myuser", myUser)
    if(myUser.inProcessPets.includes(animal._id)) {
        console.log("entrandoooo", animal._id)
        const newFavPets = myUser.inProcessPets.filter((pet) => pet !== animal._id)
        console.log("new fav pets", newFavPets)
        myUser.inProcessPets = [...newFavPets]
    } else {
        myUser.inProcessPets = [...myUser.inProcessPets, animal._id]
    }
    console.log("hola", myUser)
    dispatch(registerAdoption(myUser))
    setPopUp(true);
  }
  const closePopUp = () => {
    setPopUp(false);
  }
  const [cambio,setCambio]=useState() 

useEffect(() => {
  getAnimals();
  getUser(); 
        // console.log("esto es el user", user)
        // console.log("esto", animal)
        // // if(user?.inProccesPets.find((pet) => pet._id === animal._id)) {
        // //     setPopUp(true);
        // }
    }, []);

  return (
    
    <div className='div-dad'>

      {pag1 === true && <FomPersonalDate setDatepersonal={setDatepersonal} personalDateQuestion={personalDate}
      setPag1={setPag1}
      setPag2={setPag2}
      setPag3={setPag3}
      totaldate={totaldate}
      ></FomPersonalDate>}
     {pag2 !== true && <FormPet setDataPet={setDataPet} petsQuestion={petDate}
     setPag1={setPag1}
      setPag2={setPag2}
      setPag3={setPag3}
     ></FormPet>}
      {pag3 !== true && <FormFandH registrar={registrar} setDateFandHome={setDateFandHome} fandHomeQuestion={fandHomeDate}
      setPag1={setPag1}
      setPag2={setPag2}
      setPag3={setPag3}
      ></FormFandH>}
     
    </div>
    
  );
}
