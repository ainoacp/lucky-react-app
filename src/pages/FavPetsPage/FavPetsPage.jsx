import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import GalleryAnimals from "../../components/GalleryAnimals/GalleryAnimals";
import Filter from '../../assets/Primarios/filtros-animales-menus/filter-bton/filtros.png';
import './FavPetsPage.scss';
import Navbar from "../../components/Navbar/Navbar";
import axios from "axios";

export default function FavPetsPage() {

    const {user} = useSelector((state) => state.auth)

    // const [favPets, setFavPets] = useState([]);

    // const handleFavPets = () => {
    //     favPets = {user.favPets}
    //     setFavPets(prevFavPets => [...prevFavPets, newFavPets]);
    // 

    let favPets = user.favPets
    
    const [myUser, setMyUser] = useState([])

    const getUser = async () => {
        const res = await axios.get(`http://localhost:5001/users/${user._id}`);
        setMyUser(res.data);
    }
    useEffect(() => {
        getUser('');
    }, []);

    return (
        <>
            <div className="c-favPets-container">
                <div className='c-favPets_title'>
                    <p>Animales favoritos</p>
                    <Link to="/lucky/home/pets/filter"><img src={Filter} alt="filter"/></Link>
                </div>
                <div className='c-favPets_gallery'>
                    <GalleryAnimals animals={favPets} myUser={myUser} />
                </div>
            </div>
            <Navbar/>
        </>
        
    )
}