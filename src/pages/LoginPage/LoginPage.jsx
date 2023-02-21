import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { NavLink, useNavigate } from 'react-router-dom';
import PasswordButton from '../../components/PasswordButton/PasswordButton';
import { loginUser } from '../../redux/auth/auth.actions';
import './LoginPage.scss';

export default function LoginPage() {

    const [passwordType, setPasswordType] = useState("password");
    
    const {register, handleSubmit, formState:{errors} } = useForm();
    
    const dispatch = useDispatch();
    const navigate = useNavigate();
    
    const loguear = async (formData) => {
        dispatch(loginUser(formData, navigate));
    };

    const togglePassword = () => {
        if(passwordType==="password")
        {
        setPasswordType("text")
        return;
        }
        setPasswordType("password")
    };

    return(
        <div className='c-login-container'>
            <div className='c-login-logo'/>
            <div className='c-login-title'>
                <p>¡Hola! para continuar, inicia sesión o crea una cuenta</p>
            </div>
            <div className='c-login-form'>
                <form onSubmit={handleSubmit(loguear)}>
                    <div className='c-login-form_input'>
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
                        <div className='c-login-form_input-password'>
                            <input type={passwordType} {...register('password', {
                                required: "La contraseña no puedes estar vacía",
                                pattern: {
                                    message: "La constraseña debe contener mayúscula, minúscula, número y símbolo",
                                    value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*_=+-]).{8,12}$/
                                }
                            })} placeholder="********"/>
                            {errors.password && <>
                                {errors.password.type === "required" && <p>{errors.password.message}</p>}
                                {errors.password.type === "pattern" && <p>{errors.password.message}</p>}
                            </>}
                            <PasswordButton toggle={togglePassword} />
                        </div>
                        <button>¿Has olvidado tu contraseña?</button>
                    </div>
                    <div className='c-login-form_button'>
                        <button className='c-login-form_button-blue'>Iniciar sesión</button>
                        <NavLink to="/lucky/register" className='c-login-form_button-white'>Crear cuenta</NavLink>
                    </div>
                </form>
            </div>
        </div>
    )
}