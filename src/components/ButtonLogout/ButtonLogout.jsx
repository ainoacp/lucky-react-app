import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { logout } from "../../redux/auth/auth.actions";
import './ButtonLogout.scss';
import iconClose from "../../assets/Primarios/mas-plus/cerrar-Seccion/salir.png";
import icono from "../../assets/Primarios/arrow/arrow.png";

export default function ButtonLogout () {
    const navigate = useNavigate();
    const dispatch = useDispatch();
  return (
    <button onClick={()=>dispatch(logout(navigate))} className="box">
        <div className="box-start">
            <img src={iconClose} className="picture-main" alt="Cl" />
            Cerrar sesión
        </div>
        <img src={icono} className="ico" alt="m" />
    </button>
  )
}