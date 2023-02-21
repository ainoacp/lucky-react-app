import axios from 'axios';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Add from '../../assets/Primarios/filtros-animales-menus/mas/mS.png';

import "./ButtonAdd.scss";

export default function ButtonAdd() {

    const [animals, setAnimals] = useState([])
    const [popUp, setPopUp] = useState(false)

    const getAnimals = async () => {
        const res = await axios.get(`http://localhost:5001/animals`);
        setAnimals(res.data);
    }

    const openPopUp = () => {
        setPopUp(true);
    }
    const closePopUp = () => {
        setPopUp(false);
    }

    useEffect(() => {
        getAnimals('');
    
    }, [] )

    return (
        <div className="c-button-container">
            <button onClick={openPopUp}><img src={Add} alt="add"/></button>
            {popUp === true && 
            <div className="c-button-popUp">
                <button className="c-button-popUp_close" onClick={closePopUp}>x</button>
                <div className="c-button-popUp_white">
                {animals.map((animal) => (
                    <div animal={animal} key={animal._id} className="c-animal-img">
                        <Link to={`/lucky/home/pets/${animal._id}`}>
                            <img src={animal.image || animal.imagenes[0] || 'https://static.vecteezy.com/system/resources/thumbnails/004/141/669/small/no-photo-or-blank-image-icon-loading-images-or-missing-image-mark-image-not-available-or-image-coming-soon-sign-simple-nature-silhouette-in-frame-isolated-illustration-vector.jpg'} alt={animal.name}/>
                        </Link>
                    </div>))
                }</div>
            </div>}
        </div>
    )
}




