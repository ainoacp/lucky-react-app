import { NavLink } from "react-router-dom";

export default function Home() {

    return (
        <div className="c-home-container">
            <div className="c-home-title">
                <h3>¿Cómo quieres entrar?</h3>
            </div>
            <div className="c-home-buttons">
                <NavLink to="/register">Usuario</NavLink>
                <NavLink to="/register">Asociación</NavLink>
                <button>Registrarse en otro momento</button>
            </div>
        </div>
    )
}