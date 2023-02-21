import { NavLink } from "react-router-dom";
import './StartPage.scss';

export default function StartPage() {

    return (
        <div className="c-start-container">
            <div className="c-start-title">
                <p>¿Cómo quieres entrar?</p>
            </div>
            <div className="c-start-buttons">
                <NavLink to="/lucky/register">Usuario</NavLink>
                <NavLink to="/lucky/register">Asociación</NavLink>
                <NavLink to="/lucky/login" className="button">Ya estoy registrado</NavLink>
            </div>
        </div>
    )
}