
import { registerForm } from '../../redux/auth/auth.actions';
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import './FormComponentsStyle.scss'
import {   useState } from "react";
import FomPersonalDate from "./FormPersonalDate/FormPerson";
import FormPet from "./FormPet/FormPet";
import FormFandH from "./FormFandH/FormFandH";



export default function FomsComponents({petDate,personalDate,fandHomeDate}) {

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [dataPet,setDataPet]=useState() 
  const [datepersonal,setDatepersonal]=useState() 
  const [dateFandHome,setDateFandHome]=useState() 
  const [pag1, setPag1] = useState(true);
  const [pag2, setPag2] = useState(true);
  const [pag3, setPag3] = useState(true);


  const registrar = async () => {
    await totaldate
      dispatch(registerForm(totaldate, navigate))
 
  }
  
const totaldate={...dataPet,...datepersonal,...dateFandHome}
console.log("total",totaldate);

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
