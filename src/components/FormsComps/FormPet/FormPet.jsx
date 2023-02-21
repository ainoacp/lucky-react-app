import { useForm } from "react-hook-form";
import {   useState } from "react";
import "./PetsDataStyle.scss"


export default function FormPet({setDataPet,setPag1,setPag2,setPag3}){
    const { register, handleSubmit,formState:{errors,isValid}   } = useForm();
    const [petDate,setPetDate]=useState() 
setDataPet(petDate)
   
  
          const nextPag=()=>{
            setTimeout(() => {
              setPag3(false)
              setPag2(true)
            }, 2000);
            }
    const backPag2=()=>{
       setPag2(true)
        setPag1(true)
                }
    const onSubmitpet = (data) => {
    
        setPetDate(data)
    }
    
    const onError = (errors, e) => console.log("este es error",errors, e);
return(
    <div>
            <div className="div-dad">
     <div className="div-form-back-btom"> 
     <button onClick={backPag2} className="bton-back">{"<"}</button>
     <div className="p-form-back"><p>Formulario de adopción</p></div>
     </div>
     <div className="progres-bar-box">
     <div className="progres-bar-pets-gray">
      <div className="progres-bar-pets-ping"></div>
     </div>   
     </div> 
<div className="box-datosPersonales">
        <form className="fom-datosPersonales" onSubmit={handleSubmit(onSubmitpet,onError)}>
          <h2 className="tittle-forms">Sobre Las Mascolas</h2>

          <div>
            <div>
      
              <p>¿Tienes alguna otra mascota?</p>
            </div>
            <div>
              <div className="laber-radio">
                <input
                  className="datos-input-radio"
                  type="radio"
                  value="si"
                  name="si"
                  id="p1si"
                  {...register("pets",{required:"Campo requerido"})}
                />
                <label className="pets-label" htmlFor="p1si">
                  <span className="radio-bton"></span>si
                </label>
              </div>
              <div>
                <input
                  className="datos-input-radio"
                  type="radio"
                  value="no"
                  name="si"
                  id="p1no"
                  {...register("pets",{required:"Campo requerido"})}
                />
                <label className="pets-label" htmlFor="p1no">
                  <span className="radio-bton"></span>no
                </label>
            {errors.pets && <p className="erros-input">{errors.pets.message}</p>}

              </div>
            </div>
          </div>
          <input
            className="datos-input"
            type="text"
            placeholder="¿Cuales?"
            {...register("which",{required:"Campo requerido"})}
          onChange={onSubmitpet}

          />
            {errors.which && <p className="erros-input">{errors.which.message}</p>}

          <input
            className="datos-input"
            type="text"
            placeholder="¿Se lleva bien con otros animales?"
            {...register("petfrienly",{required:"Campo requerido"})}
            onChange={onSubmitpet}
          

          />
            {errors.petfrienly && <p className="erros-input">{errors.petfrienly.message}</p>}

          <div>
            <p> ¿Pór que has elegido adoptar?</p>
          </div>
          <input className="datos-input" type="text" {...register("what",{required:"Campo requerido"})} 
          onChange={onSubmitpet}

          />
          {errors.what && <p className="erros-input">{errors.what.message}</p>}

          <div>
            
            <p> ¿Conoces las necesidades del animal?</p>
          </div>
          <input className="datos-input" type="text" {...register("needs",{required:"Campo requerido"})} 
          onChange={onSubmitpet}

          />
          {errors.needs && <p className="erros-input">{errors.needs.message}</p>}

          <div>
            <p> ¿Conoces los gastos?</p>
          </div>
          <input
            className="datos-input"
            type="text"
            {...register("expenses",{required:"Campo requerido"})}
          onChange={onSubmitpet}

          />
            {errors.expenses && <p className="erros-input">{errors.expenses.message}</p>}

          <div>
            <p> ¿Conoces su alimentación?</p>
          </div>
          <input className="datos-input" type="text" {...register("food",{required:"Campo requerido"})} 
          onChange={onSubmitpet}

          />
          {errors.food && <p className="erros-input">{errors.food.message}</p>}


          <button disabled={!isValid} onClick={nextPag} className= "btn-foms"  
          >continuar</button>
        </form>
        
</div>
 </div>
    </div>
)

} 