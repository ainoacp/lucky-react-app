import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { registerUser } from '../../redux/auth/auth.actions';
import './Register.scss';

export default function Register() {
    const { register, handleSubmit, formState:{errors} } = useForm();
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const registrar = async (formData) => {
        dispatch(registerUser(formData, navigate))
        
    }
    return (
        <div className='c-register-container'>
            <div className='c-register-logo'/>
            <div className='c-register-title'>
                <p>¡Hola! para continuar, crea tu cuenta</p>
            </div>
            <div className='c-register-form'>
                <form onSubmit={handleSubmit(registrar)}>
                    <input type="text" {...register('name', {
                        required: "El campo nombre no puede estar vacío",
                    })} placeholder="Nombre"/>
                    {errors.email && <>
                        {errors.email.type === "required" && <p>{errors.email.message}</p>}
                    </>}
                    <input type="text" {...register('email', {
                        required: "El email no puede estar vacío",
                        pattern: {
                            message: "El email no tiene el formato correcto",
                            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i
                        }
                    })} placeholder="Email" />
                    {errors.email && <>
                        {errors.email.type === "required" && <p>{errors.email.message}</p>}
                        {errors.email.type === "pattern" && <p>{errors.email.message}</p>}
                    </>}
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
                    <button>Registrarse</button>
                </form>
            </div>
        </div>
        
    )
}