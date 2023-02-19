/* eslint-disable no-template-curly-in-string*/
import { Link } from "react-router-dom";
import './GalleryAnimals.scss'
import React from "react";
export default function GalleryAnimals({ animals }, props) {

    const [active, setActive] = React.useState(false);

    return (
        <div className="c-animals-gallery">
            {animals.map((animal) => (
            <div animal={animal} key={animal._id} className="c-animal-card">
                <div className="c-animal-card_img">
                    <img className="c-animal-card_img-profile" src={animal.image || animal.imagenes[0] || 'https://static.vecteezy.com/system/resources/thumbnails/004/141/669/small/no-photo-or-blank-image-icon-loading-images-or-missing-image-mark-image-not-available-or-image-coming-soon-sign-simple-nature-silhouette-in-frame-isolated-illustration-vector.jpg'} alt={animal.name}/>
                    <button className={`fav-button ${active?"active":""}`} onClick={() => setActive(!active)}></button>
                </div>
                <Link to={`/animals/${animal.nombre}`}>
                    <p>{animal.nombre}</p>
                    <div className="location">
                        <p>{animal.ciudad}</p>
                        <p>km</p>
                    </div>
                </Link>
            </div>))}
        </div>
    )
}