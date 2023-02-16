import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { loginUser } from '../../redux/auth/auth.actions';

export default function Login() {
    const {register, handleSubmit, formState:{errors} } = useForm()
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const loguear = async (formData) => {
        dispatch(loginUser(formData, navigate));
    }
    return(
        <>
            <div>
                {/* <img src="" /> */}
                <h1>LUCKY</h1>
            </div>
            <div>
                <h4>¡Hola! para continuar, inicia sesión o crea una cuenta</h4>
            </div>
            <form onSubmit={handleSubmit(loguear)}>
                <div>
                    <input type="text" {...register('email', {
                        required: "El email no puede estar vacío",
                        pattern: {
                            message: "El email no tiene el formato correcto",
                            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i
                        }
                    })} placeholder="celia_bhb@gmail.com" />
                    {errors.email && <>
                        {errors.email.type === "required" && <p>{errors.email.message}</p>}
                        {errors.email.type === "pattern" && <p>{errors.email.message}</p>}
                    </>}
                    <div>
                        <input type="password" {...register('password', {
                            required: "La contraseña no puedes estar vacía",
                            pattern: {
                                message: "La constraseña debe contener mayúscula, minúscula, número y símbolo",
                                value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*_=+-]).{8,12}$/
                            }
                        })} placeholder="Constraseña"/>
                        {errors.password && <>
                            {errors.password.type === "required" && <p>{errors.password.message}</p>}
                            {errors.password.type === "pattern" && <p>{errors.password.message}</p>}
                        </>}
                        <button>ojo</button>
                    </div>
                    <button>¿Has olvidado tu contraseña?</button>
                </div>
                <div>
                    <button>Iniciar sesión</button>
                    <button>Crear cuenta</button>
                </div>
            </form>
        </>
    )
}