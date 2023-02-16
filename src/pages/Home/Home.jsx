import { NavLink } from "react-router-dom";

export default function Home() {

    return (
        <>
            <div>
                <h3>¿Cómo quieres entrar?</h3>
            </div>
            <div>
                <NavLink to="/register">Usuario</NavLink>
                <NavLink to="/register">Asociación</NavLink>
                <button>Registrarse en otro momento</button>
            </div>
        </>
    )
}