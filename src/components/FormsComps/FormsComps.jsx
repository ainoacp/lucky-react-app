import { useForm } from 'react-hook-form';
import './FormComponentsStyle.scss'
export default function FomsComponents() {
  const { info, handleSubmit } = useForm();


 function btonSubmit(e){
    e.preventDefault();
}

  return (
    <div>
     
      <div className='box-datosPersonales'>
     
      
        <form className='fom-datosPersonales' onSubmit={btonSubmit}>
        <h2 className='tittle-forms'>Tus Datos</h2>
          <input className='datos-input' type="text" placeholder="Nombre Y apellidos" />
          <input className='datos-input' type="email" placeholder="Email" />
          <input className='datos-input' type="number" placeholder="Telefono" />
          <input className='datos-input' type="text" placeholder="DNI" />
          <h2 className='tittle-forms'>Direccion</h2>
          <input className='datos-input' type="text" placeholder="Calle, número, piso" />
          <input className='datos-input' type="text" placeholder="Código postal" />
          <input className='datos-input' type="text" placeholder="Ciudad" />
          <div>
            <input type="checkbox" />
            <label>Acepto los términos y condiciones de la adopción </label>
          </div>
          <button className='btn-foms'>continuar</button>
        </form>
      </div>
      <div className='box-datosPersonales'>
        <form className='fom-datosPersonales' onSubmit={btonSubmit}>
        <h2 className='tittle-forms'>Sobre Las Mascolas</h2>

          <div>
          
           <div> <p>¿Tienes alguna otra mascota?</p></div>
            <div>
              <div>
                <input className='datos-input' type="radio" name="si" />
                <label>si</label>
              </div>
              <div>
                <input className='datos-input' type="radio" name="si" />
                <label>no</label>
              </div>
            </div>
          </div>
          <input className='datos-input' type="text" placeholder="¿Cuales?" />
          <input
            type="email"
            placeholder="¿Se lleva bien con otros animales?"
          />
          <div><p> ¿Pór que has elegido adoptar?</p></div>
          <input className='datos-input' type="number" />
          <div> <p> ¿Conoces las necesidades del animal?</p></div>
          <input className='datos-input' type="text" placeholder="DNI" />
          <div><p> ¿Conoces los gastos?</p></div>
          <input className='datos-input' type="text" placeholder="Calle, número, piso" />
          <div><p> ¿Conoces su alimentación?</p></div>
          <input className='datos-input' type="text" />

          <button className='btn-foms'>continuar</button>
        </form>

        <div className='box-datosPersonales'>
          <form className='fom-datosPersonales'>
          <h2 className='tittle-forms'>Familia y hogar</h2>

            <div className='box-family-home'>
             <div className='question-p'> <p>¿Tienes alguna otra mascota?</p></div>
              <div className='radio-question'>
                  <div className='question-p'><p>¿Vives de alquiler?</p></div>
                  <div className='radio-selection'>
                  <div className='radio-selection-position'>
                  <input type="radio" value="si" name="p1" />
                  <label>si</label></div>
                  <div className='radio-selection-position'>
                  <input type="radio" value="no" name="p1" />
                  <label>no</label></div>
                  </div>
              </div>
              <div  className='radio-question'>
              <div className='question-p'><p>¿Tu casero permite animales?</p></div>
                <div  className='radio-selection'>
                <div className='radio-selection-position'>

                <input type="radio" value="si" name="p2" />
                <label>si</label></div>
                <div className='radio-selection-position'>

                <input type="radio" value="no" name="p2" />
                <label>no</label></div>
                </div>
              </div>
              <div  className='radio-question'>
               <div className='question-p'> <p>¿Crees que podras mudarte pronto?</p></div>
                <div className='radio-selection'>
                <div className='radio-selection-position'>
                <input type="radio" value="si" name="p3" />
                <label>si</label></div>
                <div className='radio-selection-position'>
                <input type="radio" value="no" name="p3" />
                <label>no</label></div>
                </div>
              </div>
              <div  className='radio-question'>
               <div className='question-p'> <p>¿Tienes jadin?</p></div>
                <div className='radio-selection'>
                <div className='radio-selection-position'>
                <input type="radio" value="si" name="p4" />
                <label>si</label></div>
                <div className='radio-selection-position'>
                <input type="radio" value="no" name="p4" />
                <label>no</label></div>
                </div>
              </div>
              <div  className='radio-question'>
                <div className='question-p'><p>¿Vives con otras personas?</p></div>
                <div className='radio-selection'>
                <div className='radio-selection-position'>
                <input type="radio" value="si" name="p5" />
                <label>si</label></div>
                <div className='radio-selection-position'>
                <input type="radio" value="no" name="p5" />
                <label>no</label></div>
                </div>
              </div>
              <div  className='radio-question'>
                <div className='question-p'><p>¿Estan todos de acurdo con la adopción?</p></div>
                <div className='radio-selection'>
                <div className='radio-selection-position'>
                <input type="radio" value="si" name="p6" />
                <label>si</label></div>
                <div className='radio-selection-position'>
                <input type="radio" value="no"name="p6" />
                <label>no</label></div>
                </div>
              </div>
              <div  className='radio-question'>
                <div className='question-p'><p>¿Estas de acuerdo con que visitemos tu casa?</p></div>
                <div className='radio-selection'>
                <div className='radio-selection-position'>
                <input type="radio" value="si" name="p7" />
                <label>si</label></div>
                <div className='radio-selection-position'>
                <input type="radio" value="no" name="p7" />
                <label>no</label></div>
                </div>
              </div>
            </div>

            <button className='btn-foms'>continuar</button>
          </form>
        </div>
      </div>
    </div>
  );
}
