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

  const registrar = async () => {
      await totaldate 
      dispatch(registerForm(totaldate, navigate))
  }

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
