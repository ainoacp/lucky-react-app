import { useForm } from "react-hook-form";
import "./FormComponentsStyle.scss";
import * as Yup from "yup";
import { useState } from "react";
export default function FomsComponents() {
  const { register, handleSubmit } = useForm();
  const schema = Yup;

  function btonSubmit(e) {
    e.preventDefault();
  }
  const submit = (datos) => {
    console.log(datos);
  };
  const [radioValue, setReadioValue] = useState("");

  const changeRatio = (e) => {
    setReadioValue(...e.target.value);
    console.log("este es el target", e.target);
  };

  return (
    <div>
      <div className="box-datosPersonales">
        <form className="fom-datosPersonales" onSubmit={handleSubmit(submit)}>
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
            <input type="checkbox" {...register("conditions")} />
            <label>Acepto los términos y condiciones de la adopción </label>
          </div>
          <button className="btn-foms">continuar</button>
        </form>
      </div>
      <div className="box-datosPersonales">
        <form className="fom-datosPersonales" onSubmit={handleSubmit(submit)}>
          <h2 className="tittle-forms">Sobre Las Mascolas</h2>

          <div>
            <div>
              {" "}
              <p>¿Tienes alguna otra mascota?</p>
            </div>
            <div>
              <div>
                <input
                  className="datos-input"
                  type="radio"
                  value="si"
                  name="si"
                  {...register("pets")}
                />
                <label>si</label>
              </div>
              <div>
                <input
                  className="datos-input"
                  type="radio"
                  value="no"
                  name="si"
                  {...register("pets")}
                />
                <label>no</label>
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

          <button className="btn-foms">continuar</button>
        </form>

        <div className="box-datosPersonales">
          <form className="fom-datosPersonales" onSubmit={handleSubmit(submit)}>
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
                      {...register("rental")}
                    />
                    <label>si</label>
                  </div>
                  <div className="radio-selection-position">
                    <input
                      type="radio"
                      name="p1"
                      value="no"
                      {...register("rental")}
                    />
                    <label>no</label>
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
                      {...register("casero")}
                    />
                    <label>si</label>
                  </div>
                  <div className="radio-selection-position">
                    <input
                      type="radio"
                      value="no"
                      name="p2"
                      {...register("casero")}
                    />
                    <label>no</label>
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
                      {...register("removal")}
                    />
                    <label>si</label>
                  </div>
                  <div className="radio-selection-position">
                    <input
                      type="radio"
                      value="no"
                      name="p3"
                      {...register("removal")}
                    />
                    <label>no</label>
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
                      {...register("garden")}
                    />
                    <label>si</label>
                  </div>
                  <div className="radio-selection-position">
                    <input
                      type="radio"
                      value="no"
                      name="p4"
                      {...register("garden")}
                    />
                    <label>no</label>
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
                      {...register("people")}
                    />
                    <label>si</label>
                  </div>
                  <div className="radio-selection-position">
                    <input
                      type="radio"
                      value="no"
                      name="p5"
                      {...register("people")}
                    />
                    <label>no</label>
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
                      {...register("agreement")}
                    />
                    <label>si</label>
                  </div>
                  <div className="radio-selection-position">
                    <input
                      type="radio"
                      value="no"
                      name="p6"
                      {...register("agreement")}
                    />
                    <label>no</label>
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
                      {...register("visit")}
                    />
                    <label>si</label>
                  </div>
                  <div className="radio-selection-position">
                    <input
                      type="radio"
                      value="no"
                      name="p7"
                      {...register("visit")}
                    />
                    <label>no</label>
                  </div>
                </div>
              </div>
            </div>

            <button className="btn-foms">continuar</button>
          </form>
        </div>
      </div>
    </div>
  );
}
