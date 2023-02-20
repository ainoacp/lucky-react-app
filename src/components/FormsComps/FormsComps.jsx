import { useForm } from "react-hook-form";
import { Swiper, SwiperSlide, } from "swiper/react";
import SwiperCore, { Navigation, Pagination, A11y } from "swiper";
// import { Pagination, Navigation } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { registerForm } from '../../redux/auth/auth.actions';
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import './FormComponentsStyle.scss'
// import { useRef } from "react";
SwiperCore.use([Navigation, Pagination, A11y]);

export default function FomsComponents() {
  const { register, handleSubmit } = useForm();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const registrar = async (formData) => {
      dispatch(registerForm(formData, navigate))
      console.log(JSON.stringify( formData));
  }

  function btonSubmit(e) {
    e.preventDefault();
  }
  const submit = (datos) => {
    console.log(datos);
  };
  

  return (
    
    <div>
    <Swiper
    pagination={{
      type: "progressbar",
      clickable: true,
    }}
    navigation={{   
      nextEl: ".next"
        }}
    // modules={[Pagination, Navigation]}
    className="mySwiper"
  >
     <SwiperSlide> <div className="box-datosPersonales">
        <form className="fom-datosPersonales" onSubmit={handleSubmit(registrar)}>
          <h2 className="tittle-forms">Tus Datos</h2>
          <input
            className="datos-input"
            type="text"
            placeholder="Nombre Y apellidos"
            {...register("name")}
          />
          <input
            className="datos-input"
            type="email"
            placeholder="Email"
            {...register("email")}
          />
          <input
            className="datos-input"
            type="number"
            placeholder="Telefono"
            {...register("telf")}
          />
          <input
            className="datos-input"
            type="text"
            placeholder="DNI"
            {...register("dni")}
          />
          <h2 className="tittle-forms">Direccion</h2>
          <input
            className="datos-input"
            type="text"
            placeholder="Calle, número, piso"
            {...register("direction")}
          />
          <input
            className="datos-input"
            type="number"
            placeholder="Código postal"
            {...register("postal")}
          />
          <input
            className="datos-input"
            type="text"
            placeholder="Ciudad"
            {...register("city")}
          />
          <div>
            <input type="checkbox" id="check" {...register("conditions")} />
            <label htmlFor="check" className="check-label">
              <span className="checked-bton">X</span> Acepto los términos y
              condiciones de la adopción{" "}
            </label>
          </div>
         
        </form>
        <button className="btn-next next" >continuar</button>
      </div></SwiperSlide>
      <SwiperSlide><div className="box-datosPersonales">
        <form className="fom-datosPersonales" onSubmit={handleSubmit(registrar)}>
          <h2 className="tittle-forms">Sobre Las Mascolas</h2>

          <div>
            <div>
              {" "}
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
                  {...register("pets")}
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
                  {...register("pets")}
                />
                <label className="pets-label" htmlFor="p1no">
                  <span className="radio-bton"></span>no
                </label>
              </div>
            </div>
          </div>
          <input
            className="datos-input"
            type="text"
            placeholder="¿Cuales?"
            {...register("which")}
          />
          <input
            className="datos-input"
            type="text"
            placeholder="¿Se lleva bien con otros animales?"
            {...register("petfrienly")}
          />
          <div>
            <p> ¿Pór que has elegido adoptar?</p>
          </div>
          <input className="datos-input" type="text" {...register("what")} />
          <div>
            {" "}
            <p> ¿Conoces las necesidades del animal?</p>
          </div>
          <input className="datos-input" type="text" {...register("needs")} />
          <div>
            <p> ¿Conoces los gastos?</p>
          </div>
          <input
            className="datos-input"
            type="text"
            {...register("expenses")}
          />
          <div>
            <p> ¿Conoces su alimentación?</p>
          </div>
          <input className="datos-input" type="text" {...register("food")} />

          
        </form>
        <button className="btn-next next" >continuar</button>
</div>
</SwiperSlide>
 <SwiperSlide>
        <div className="box-datosPersonales">
          <form className="fom-datosPersonales" onSubmit={handleSubmit(registrar)}>
            <h2 className="tittle-forms">Familia y hogar</h2>

            <div className="box-family-home">
              <div className="question-p">
                {" "}
                <p>¿Donde Vives?</p>
              </div>
              <input
                className="datos-input"
                type="text"
                placeholder="Piso,casa,chalet..."
                {...register("home")}
              />

              <div className="radio-question">
                <div className="question-p">
                  <p>¿Vives de alquiler?</p>
                </div>
                <div className="radio-selection">
                  <div className="radio-selection-position">
                    <input
                      type="radio"
                      value="si"
                      name="p1"
                      id="p2si"
                      {...register("rental")}
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
                      {...register("rental")}
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
                </div>
                <div className="radio-selection">
                  <div className="radio-selection-position">
                    <input
                      type="radio"
                      value="si"
                      name="p2"
                      id="p3si"
                      {...register("casero")}
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
                      {...register("casero")}
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
                </div>
                <div className="radio-selection">
                  <div className="radio-selection-position">
                    <input
                      type="radio"
                      value="si"
                      name="p3"
                      id="p4si"
                      {...register("removal")}
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
                      {...register("removal")}
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
                </div>
                <div className="radio-selection">
                  <div className="radio-selection-position">
                    <input
                      type="radio"
                      value="si"
                      name="p4"
                      id="p5si"
                      {...register("garden")}
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
                      {...register("garden")}
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
                </div>
                <div className="radio-selection">
                  <div className="radio-selection-position">
                    <input
                      type="radio"
                      value="si"
                      name="p5"
                      id="p6s"
                      {...register("family")}
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
                      {...register("family")}
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
                </div>
                <div className="radio-selection">
                  <div className="radio-selection-position">
                    <input
                      type="radio"
                      value="si"
                      name="p6"
                      id="p7s"
                      {...register("agreement")}
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
                      {...register("agreement")}
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
                </div>
                <div className="radio-selection">
                  <div className="radio-selection-position">
                    <input
                      type="radio"
                      value="si"
                      name="p7"
                      id="p8s"
                      {...register("visit")}
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
                      {...register("visit")}
                    />
                    <label htmlFor="p8n">
                      <span className="radio-bton"></span>no
                    </label>
                  </div>
                </div>
              </div>
            </div>

            <button className="btn-foms">continuar</button>
          </form>
        </div>
        </SwiperSlide>
      </Swiper>
    </div>
    
  );
}
