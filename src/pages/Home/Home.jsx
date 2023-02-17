import { NavLink } from "react-router-dom";
import './Home.scss';

export default function Home() {

    return (
        <div className="c-home-container">
            <div className="c-home-title">
                <p>¿Cómo quieres entrar?</p>
            </div>
            <div className="c-home-buttons">
                <NavLink to="/register">Usuario</NavLink>
                <NavLink to="/register">Asociación</NavLink>
                <button>Registrarse en otro momento</button>
            </div>
        </div>
    )
}