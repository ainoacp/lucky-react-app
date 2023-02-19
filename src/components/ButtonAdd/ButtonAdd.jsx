import Add from '../../assets/Primarios/filtros-animales-menus/mas/mS.png';
import "./ButtonAdd.scss";

export default function ButtonAdd({ add }) {

    const change = (e) => {
        console.log(e.target.value)
        add(e.target.value)
    }
    return (
        <div className="button-container">
            <button onClick={change}>
            <img src={Add} alt="add"/>
            </button>
        </div>
    )
}




