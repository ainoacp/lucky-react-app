import { useForm } from "react-hook-form";
import  imgCat from "../../assets/Primarios/playfulcat/PlayfulCatRchv.png"
import { registerForm } from '../../redux/auth/auth.actions';
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import './FormComponentsStyle.scss'
import {  useEffect, useState } from "react";
import FomPersonalDate from "./FormPersonalDate/FormPerson";
import FormPet from "./FormPet/FormPet";
import FormFandH from "./FormFandH/FormFandH";



export default function FomsComponents({petDate,personalDate,fandHomeDate}) {
  // const { register, handleSubmit,formState:{errors}   } = useForm();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [dataPet,setDataPet]=useState() 
  const [datepersonal,setDatepersonal]=useState() 
  const [dateFandHome,setDateFandHome]=useState() 

  const registrar = async () => {
    await totaldate
      dispatch(registerForm(totaldate, navigate))
      // console.log(JSON.stringify( totaldate));
  }
const totaldate={...dataPet,...datepersonal,...dateFandHome}
console.log("total",totaldate);
// console.log("dtapet",dataPet)
// console.log("datapersonal",datepersonal)
// console.log("dataHome",dateFandHome)

  return (
    
    // <div className="div-dad">
    // {popUp !== true && <div className="div-form-back-btom"> 
    // <button className="bton-back back"><h2>{"<"}</h2></button>
    //  <div className="p-form-back"><p>Formulario de adopción</p></div>
    //  </div>}
<div>
   
      <FomPersonalDate setDatepersonal={setDatepersonal} personalDateQuestion={personalDate}></FomPersonalDate>
      <FormPet setDataPet={setDataPet} petsQuestion={petDate}></FormPet>
      <FormFandH registrar={registrar} setDateFandHome={setDateFandHome} fandHomeQuestion={fandHomeDate}></FormFandH>
      


    </div>
    
  );
}
