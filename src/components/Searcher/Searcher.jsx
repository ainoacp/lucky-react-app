import './Searcher.scss';
import Lupa from '../../assets/Primarios/buscar/buscar.png';

export default function CharactersSearcher({ search }) {

    const change = (e) => {
        console.log(e.target.value)
        search(e.target.value)
    }
    return (
        <div className="form-container">
            <form className="form">
                <input type="text" onChange={change} placeholder="Buscar"/>
                <img alt="lupa" src={Lupa}/>
            </form>
        </div>
    )
}