import { NavLink } from "react-router-dom";
import './StartPage.scss';

export default function StartPage() {

    return (
        <div className="c-start-container">
            <div className="c-start-title">
                <p>¿Cómo quieres entrar?</p>
            </div>
            <div className="c-start-buttons">
                <NavLink to="/register">Usuario</NavLink>
                <NavLink to="/register">Asociación</NavLink>
                <NavLink to="/login" className="button">Ya estoy registrado</NavLink>
            </div>
        </div>
    )
}