import { Link } from "react-router-dom";
import Fav from '../../assets/Primarios/perfil/favoritos/favoritosRelleno/favoritosRelleno.png'
import './GalleryAnimals.scss'
export default function GalleryAnimals({ animals }) {
    return (
        <div className="c-animals-gallery">
            {animals.map((animal) => (
            <Link to={`/characters/${animal.nombre}`} animal={animal} key={animal._id} className="c-animal-card">
                <div className="c-animal-card_img">
                    <img className="c-animal-card_img-profile" src={animal.image || animal.imagenes[0] || 'https://static.vecteezy.com/system/resources/thumbnails/004/141/669/small/no-photo-or-blank-image-icon-loading-images-or-missing-image-mark-image-not-available-or-image-coming-soon-sign-simple-nature-silhouette-in-frame-isolated-illustration-vector.jpg'} alt={animal.name}/>
                    <button className="fav"><img src={Fav} alt="fav"/></button>
                </div>
                <figcaption>
                    <p>{animal.nombre}</p>
                    <div className="location">
                        <p>{animal.ciudad}</p>
                        <p>km</p>
                    </div>
                </figcaption>
            </Link>))}
        </div>
    )
}