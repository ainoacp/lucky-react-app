import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import {  useState } from "react";
import  imgCat from "../../../assets/Primarios/playfulcat/PlayfulCatRchv.png"

 

export default function FormFandH({setDateFandHome,registrar}){
    const [popUp, setPopUp] = useState(false);
    const [fandHomeDate,setfandHomeDAte]=useState(false) 
    const { register, handleSubmit,formState:{errors}   } = useForm();
    const onSubmitfandHome = (data) => {
        // console.log("este es data home",data);
        setfandHomeDAte(data)
    }
    // console.log("home data",fandHomeDate);
setDateFandHome(fandHomeDate)
    const onError = (errors, e) => console.log("este es error",errors, e);
    const openPopUp = () => {
        setPopUp(true);
        registrar()
      }
      const closePopUp = () => {
        setPopUp(false);
      }
    
    return(
        <div>
     <div className="div-dad">
     <div className="div-form-back-btom"> 
     <button className="bton-back back"><h2>{"<"}</h2></button>
     <div className="p-form-back"><p>Formulario de adopción</p></div>
    </div>
    <div className="box-datosPersonales">
          <form className="fom-datosPersonales" onSubmit={handleSubmit(onSubmitfandHome,onError)}>
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
                onChange={onSubmitfandHome}
              

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
            
        </div>
        </div>
    )
    
    } 