import { Link } from 'react-router-dom';
import Add from '../../assets/Primarios/filtros-animales-menus/mas/mS.png';
import "./ButtonAdd.scss";

export default function ButtonAdd() {

    return (
        <div className="button-container">
            <Link to="/luccky/home/adoptionForm">
            <img src={Add} alt="add"/>
            </Link>
        </div>
    )
}




