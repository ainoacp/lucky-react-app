import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import PasswordButton from '../../components/PasswordButton/PasswordButton';
import { registerUser } from '../../redux/auth/auth.actions';
import './RegisterPage.scss';

export default function RegisterPage() {
    const { register, handleSubmit, formState:{errors} } = useForm();

    const [passwordType, setPasswordType] = useState("password");

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const registrar = async (formData) => {
        dispatch(registerUser(formData, navigate))
    }

    const togglePassword = () => {
        if(passwordType==="password")
        {
        setPasswordType("text")
        return;
        }
        setPasswordType("password")
    };

    return (
        <div className='c-register-container'>
            <div className='c-register-logo'/>
            <div className='c-register-title'>
                <p>¡Hola! para continuar, crea tu cuenta</p>
            </div>
            <div className='c-register-form'>
                <form onSubmit={handleSubmit(registrar)}>
                    <div className='c-login-form_input'>
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
                        <div className='c-login-form_input-password'>
                            <input type={passwordType} {...register('password', {
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
                            <PasswordButton toggle={togglePassword} />
                        </div>
                    </div>
                    <button>Registrarse</button>
                </form>
            </div>
        </div>
        
    )
}