import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { useDispatch } from "react-redux";



export default function FomPersonalDate({setDatepersonal}){
  const [personalDate,setPersonalDate]=useState() 

    const { register, handleSubmit,formState:{errors} } = useForm();

    const onSubmitpd = (data) => {
        // console.log("este es data",data);
        setPersonalDate(data)
    }
    // console.log("personal",personalDate);
setDatepersonal(personalDate)
    const onError = (errors, e) => console.log("este es error",errors, e);
    return(
        <div>
          <div className="div-dad">
     <div className="div-form-back-btom"> 
     <div className="p-form-back"><p>Formulario de adopción</p></div>
    </div>
    
    
    <div className="box-datosPersonales">
        <form className="fom-datosPersonales" onSubmit={handleSubmit(onSubmitpd,onError)}>
          <h2 className="tittle-forms">Tus Datos</h2>
          <input
            className="datos-input"
            type="text"
            placeholder="Nombre Y apellidos"
            {...register("name",{required:"El nombre es requerido"})}
        onChange={onSubmitpd}

          />
      {errors.name && <p className="erros-input">{errors.name.message}</p>}
          <input
            className="datos-input"
            type="email"
            placeholder="Email"
            {...register("email",{required:"El email es requerido"})}
            onChange={onSubmitpd}
     

          />
            {errors.email && <p className="erros-input">{errors.email.message}</p>}
          <input
            className="datos-input"
            type="number"
            placeholder="Telefono"
            {...register("telf",{required:"El telf es requerido"})}
            onChange={onSubmitpd}
       

          />
          {errors.telf && <p className="erros-input">{errors.telf.message}</p>}
          <input
            className="datos-input"
            type="text"
            placeholder="DNI"
            {...register("dni",{required:"El DNI es requerido"})}
            onChange={onSubmitpd}
       

          />
          {errors.dni && <p className="erros-input">{errors.dni.message}</p>}
          <h2 className="tittle-forms">Direccion</h2>
          <input
            className="datos-input"
            type="text"
            placeholder="Calle, número, piso"
            {...register("direction" ,{required:"La direccion es requerida"})}
            onChange={onSubmitpd}
        

          />
          {errors.direction && <p className="erros-input">{errors.direction.message}</p>}
          <input
            className="datos-input"
            type="number"
            placeholder="Código postal"
            {...register("postal",{required:"El codigo postal es requerida"})}
            onChange={onSubmitpd}
       

          />
          {errors.postal && <p className="erros-input">{errors.postal.message}</p>}
          <input
            className="datos-input"
            type="text"
            placeholder="Ciudad"
            {...register("city",{required:"La Ciudad  es requerida"})}
            onChange={onSubmitpd}
        

          />
          {errors.city && <p className="erros-input">{errors.city.message}</p>}
          <div>
            <input  type="checkbox" id="check" {...register("conditions",{required:"Acepta los terminos y condiciones"}) } 
            
            
        
             />

            <label htmlFor="check" className="check-label">
              <span className="checked-bton">X</span> Acepto los términos y
              condiciones de la adopción
            </label>
            {errors.conditions && <p className="erros-input">{errors.conditions.message}</p>}
          </div>
          <button    className="btn-next ">continuar</button>
        </form>
        
      </div>
      </div>
        </div>
    )
    
    } 