import { useForm } from "react-hook-form";
import { Swiper, SwiperSlide, } from "swiper/react";
import SwiperCore, { Navigation, Pagination, A11y } from "swiper";
// import { Pagination, Navigation } from "swiper";
import "swiper/css";
import  imgCat from "../../assets/Primarios/playfulcat/PlayfulCatRchv.png"
// import "swiper/css/pagination";
import "swiper/css/navigation";
import { registerForm } from '../../redux/auth/auth.actions';
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import './FormComponentsStyle.scss'
import {  useEffect, useState } from "react";
// import { useRef } from "react";
SwiperCore.use([Navigation, Pagination, A11y]);

export default function FomsComponents() {
  const [popUp, setPopUp] = useState(false);

  const { register, handleSubmit,formState:{errors} } = useForm();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const registrar = async (formData) => {
      dispatch(registerForm(formData, navigate))
      console.log(JSON.stringify( formData));
    
  }
  const openPopUp = () => {
    setPopUp(true);
  }
  const closePopUp = () => {
    setPopUp(false);
  }
  const [cambio,setCambio]=useState() 
 const prueba=[
  errors.name,
  errors.email,
  errors.telf,
  errors.dni,
  errors.direction,
  errors.postal,
  errors.city,
  errors.conditions,
 ]
 const lolero = ()=>{
  setCambio( prueba.every(comparate))
  console.log("esto es cambio",cambio );
 }

//  console.log("esto es cambio",cambio );
console.log("esto es error", prueba);
const comparate =(data)=>  data === undefined
// console.log("esto es lolo", prueba.every(comparate));




  return (
    
    <div className="div-dad">
    {popUp !== true && <div className="div-form-back-btom"> 
    <button className="bton-back back"><h2>{"<"}</h2></button>
     <div className="p-form-back"><p>Formulario de adopción</p></div>
     </div>}
    <Swiper
    pagination={{
      type: "progressbar",
      clickable: true,
    }}
    navigation={{   
      nextEl: ".next",
      prevEl:".back"
        }}
    className="mySwiper"
  >
     <SwiperSlide> 
     
     <div className="box-datosPersonales">
        <form className="fom-datosPersonales" onSubmit={handleSubmit(registrar)}>
          <h2 className="tittle-forms">Tus Datos</h2>
          <input
            className="datos-input"
            type="text"
        
            placeholder="Nombre Y apellidos"
            {...register("name",{required:"El nombre es requerido"})}
          />
      {errors.name && <p className="erros-input">{errors.name.message}</p>}
          <input
            className="datos-input"
            type="email"
            placeholder="Email"
            {...register("email",{required:"El email es requerido"})}
          />
            {errors.email && <p className="erros-input">{errors.email.message}</p>}
          <input
            className="datos-input"
            type="number"
            placeholder="Telefono"
            {...register("telf",{required:"El telf es requerido"})}
          />
          {errors.telf && <p className="erros-input">{errors.telf.message}</p>}
          <input
            className="datos-input"
            type="text"
            placeholder="DNI"
            {...register("dni",{required:"El DNI es requerido"})}
          />
          {errors.dni && <p className="erros-input">{errors.dni.message}</p>}
          <h2 className="tittle-forms">Direccion</h2>
          <input
            className="datos-input"
            type="text"
            placeholder="Calle, número, piso"
            {...register("direction" ,{required:"La direccion es requerida"})}
          />
          {errors.direction && <p className="erros-input">{errors.direction.message}</p>}
          <input
            className="datos-input"
            type="number"
            placeholder="Código postal"
            {...register("postal",{required:"El codigo postal es requerida"})}
          />
          {errors.postal && <p className="erros-input">{errors.postal.message}</p>}
          <input
            className="datos-input"
            type="text"
            placeholder="Ciudad"
            {...register("city",{required:"La Ciudad  es requerida"})}
          />
          {errors.city && <p className="erros-input">{errors.city.message}</p>}
          <div>
            <input  type="checkbox" id="check" {...register("conditions",{required:"Acepta los terminos y condiciones"})} />

            <label htmlFor="check" className="check-label">
              <span className="checked-bton">X</span> Acepto los términos y
              condiciones de la adopción
            </label>
            {errors.conditions && <p className="erros-input">{errors.conditions.message}</p>}
          </div>
          <button onClick={lolero}  className= {!errors ?"btn-next next ": "btn-next "}  
          
          
          
          
          >continuar</button>
        </form>
        
      </div></SwiperSlide>
      <SwiperSlide><div className="box-datosPersonales">
        <form className="fom-datosPersonales" onSubmit={handleSubmit(registrar)}>
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
          />
            {errors.which && <p className="erros-input">{errors.which.message}</p>}

          <input
            className="datos-input"
            type="text"
            placeholder="¿Se lleva bien con otros animales?"
            {...register("petfrienly",{required:"Campo requerido"})}
          />
            {errors.petfrienly && <p className="erros-input">{errors.petfrienly.message}</p>}

          <div>
            <p> ¿Pór que has elegido adoptar?</p>
          </div>
          <input className="datos-input" type="text" {...register("what",{required:"Campo requerido"})} />
          {errors.what && <p className="erros-input">{errors.what.message}</p>}

          <div>
            
            <p> ¿Conoces las necesidades del animal?</p>
          </div>
          <input className="datos-input" type="text" {...register("needs",{required:"Campo requerido"})} />
          {errors.needs && <p className="erros-input">{errors.needs.message}</p>}

          <div>
            <p> ¿Conoces los gastos?</p>
          </div>
          <input
            className="datos-input"
            type="text"
            {...register("expenses",{required:"Campo requerido"})}
          />
            {errors.expenses && <p className="erros-input">{errors.expenses.message}</p>}

          <div>
            <p> ¿Conoces su alimentación?</p>
          </div>
          <input className="datos-input" type="text" {...register("food",{required:"Campo requerido"})} />
          {errors.food && <p className="erros-input">{errors.food.message}</p>}


          <button  className= "btn-next next" 
          >continuar</button>
        </form>
        
</div>
</SwiperSlide>
 <SwiperSlide>
        <div className="box-datosPersonales">
          <form className="fom-datosPersonales" onSubmit={handleSubmit(registrar)}>
            <h2 className="tittle-forms">Familia y hogar</h2>

            <div className="box-family-home">
              <div className="question-p">
                
                <p>¿Donde Vives?</p>
              </div>
              <input
                className="datos-input"
                type="text"
                placeholder="Piso,casa,chalet..."
                {...register("home",{required:"Campo requerido"})}
              />
          {errors.home && <p className="erros-input">{errors.home.message}</p>}

              <div className="radio-question">
                <div className="question-p">
                  <p>¿Vives de alquiler?</p>
          {errors.rental && <p className="erros-input">{errors.rental.message}</p>}

                </div>
                <div className="radio-selection">
                  <div className="radio-selection-position">
                    <input
                      type="radio"
                      value="si"
                      name="p1"
                      id="p2si"
                      {...register("rental",{required:"Campo requerido"})}
                    />
                    <label htmlFor="p2si">
                      <span className="radio-bton"></span>si
                    </label>
                    
                  </div>
                  <div className="radio-selection-position">
                    <input
                      type="radio"
                      name="p1"
                      value="no"
                      id="p2no"
                      {...register("rental",{required:"Campo requerido"})}
                    />

                    <label htmlFor="p2no">
                      <span className="radio-bton"></span>no
                    </label>

                  </div>
                </div>
              </div>
              <div className="radio-question">
                <div className="question-p">
                  <p>¿Tu casero permite animales?</p>
          {errors.casero && <p className="erros-input">{errors.casero.message}</p>}

                </div>
                <div className="radio-selection">
                  <div className="radio-selection-position">
                    <input
                      type="radio"
                      value="si"
                      name="p2"
                      id="p3si"
                      {...register("casero",{required:"Campo requerido"})}
                    />
                    <label htmlFor="p3si">
                      <span className="radio-bton"></span>si
                    </label>
                  </div>
                  <div className="radio-selection-position">
                    <input
                      type="radio"
                      value="no"
                      name="p2"
                      id="p3no"
                      {...register("casero",{required:"Campo requerido"})}
                    />
                    <label htmlFor="p3no">
                      <span className="radio-bton"></span>no
                    </label>

                  </div>
                </div>
              </div>
              <div className="radio-question">
                <div className="question-p">
                  {" "}
                  <p>¿Crees que podras mudarte pronto?</p>
          {errors.removal && <p className="erros-input">{errors.removal.message}</p>}

                </div>
                <div className="radio-selection">
                  <div className="radio-selection-position">
                    <input
                      type="radio"
                      value="si"
                      name="p3"
                      id="p4si"
                      {...register("removal",{required:"Campo requerido"})}
                    />
                    <label htmlFor="p4si">
                      <span className="radio-bton"></span>si
                    </label>
                  </div>
                  <div className="radio-selection-position">
                    <input
                      type="radio"
                      value="no"
                      name="p3"
                      id="p4no"
                      {...register("removal",{required:"Campo requerido"})}
                    />
                    <label htmlFor="p4no">
                      <span className="radio-bton"></span>no
                    </label>
                  </div>
                </div>
              </div>
              <div className="radio-question">
                <div className="question-p">
                  {" "}
                  <p>¿Tienes jadin?</p>
          {errors.garden && <p className="erros-input">{errors.garden.message}</p>}

                </div>
                <div className="radio-selection">
                  <div className="radio-selection-position">
                    <input
                      type="radio"
                      value="si"
                      name="p4"
                      id="p5si"
                      {...register("garden",{required:"Campo requerido"})}
                    />
                    <label htmlFor="p5si">
                      <span className="radio-bton"></span>si
                    </label>
                  </div>
                  <div className="radio-selection-position">
                    <input
                      type="radio"
                      value="no"
                      name="p4"
                      id="p5n"
                      {...register("garden",{required:"Campo requerido"})}
                    />
                    <label htmlFor="p5n">
                      <span className="radio-bton"></span>no
                    </label>
                  </div>
                </div>
              </div>
              <div className="radio-question">
                <div className="question-p">
                  <p>¿Vives con otras personas?</p>
          {errors.family && <p className="erros-input">{errors.family.message}</p>}

                </div>
                <div className="radio-selection">
                  <div className="radio-selection-position">
                    <input
                      type="radio"
                      value="si"
                      name="p5"
                      id="p6s"
                      {...register("family",{required:"Campo requerido"})}
                    />
                    <label htmlFor="p6s">
                      <span className="radio-bton"></span>si
                    </label>
                  </div>
                  <div className="radio-selection-position">
                    <input
                      type="radio"
                      value="no"
                      name="p5"
                      id="p6n"
                      {...register("family",{required:"Campo requerido"})}
                    />
                    <label htmlFor="p6n">
                      <span className="radio-bton"></span>no
                    </label>
                  </div>
                </div>
              </div>
              <div className="radio-question">
                <div className="question-p">
                  <p>¿Estan todos de acurdo con la adopción?</p>
          {errors.agreement && <p className="erros-input">{errors.agreement.message}</p>}

                </div>
                <div className="radio-selection">
                  <div className="radio-selection-position">
                    <input
                      type="radio"
                      value="si"
                      name="p6"
                      id="p7s"
                      {...register("agreement",{required:"Campo requerido"})}
                    />
                    <label htmlFor="p7s">
                      <span className="radio-bton"></span>si
                    </label>
                  </div>
                  <div className="radio-selection-position">
                    <input
                      type="radio"
                      value="no"
                      name="p6"
                      id="p7n"
                      {...register("agreement",{required:"Campo requerido"})}
                    />
                    <label htmlFor="p7n">
                      <span className="radio-bton"></span>no
                    </label>
                  </div>
                </div>
              </div>
              <div className="radio-question">
                <div className="question-p">
                  <p>¿Estas de acuerdo con que visitemos tu casa?</p>
          {errors.visit && <p className="erros-input">{errors.visit.message}</p>}

                </div>
                <div className="radio-selection">
                  <div className="radio-selection-position">
                    <input
                      type="radio"
                      value="si"
                      name="p7"
                      id="p8s"
                      {...register("visit",{required:"Campo requerido"})}
                    />
                    <label htmlFor="p8s">
                      <span className="radio-bton"></span>si
                    </label>
                  </div>
                  <div className="radio-selection-position">
                    <input
                      type="radio"
                      value="no"
                      name="p7"
                      id="p8n"
                      {...register("visit",{required:"Campo requerido"})}
                    />
                    <label htmlFor="p8n">
                      <span className="radio-bton"></span>no
                    </label>
                  </div>
                </div>
              </div>
            </div>

            <button onClick={openPopUp} className="btn-foms">continuar</button>
          </form>
        </div>
      {popUp === true && <div className="popUp1">
      <div className="popUp1__whiteBox1">
      <button className="popUpwhiteBox--buttons--1" onClick={closePopUp}><Link to={"/lucky/home"}> X</Link></button>
<div className="popUpBox-information">
              <div className="popUpwhiteBox--title"><h2>¡Enviado!</h2></div>
        <div className="popUpwhiteBox--text"><p>Hemos enviado tu formulario a la protectora. Si quieres ponerte en contacto con ellos puedes hacerlo vía email o whatsapp</p></div>
        <div className="popUpwhiteBox--text"><p>Recuerda que la protectora se pondrá en contacto contigo para poder hacer la entrevista personal</p></div>

        <div className="popUpwhiteBox--video"><img  src={imgCat} alt=""/></div>

        <div className="popUpwhiteBox--buttons">
        </div>
         {/* <button className="popUp__whiteBox--buttons--2" >Continuar</button> */}
        </div>
      </div>
    </div>}
    </SwiperSlide>

    </Swiper>

    </div>
    
  );
}
