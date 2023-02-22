import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from "axios";
import Searcher from "../../components/Searcher/Searcher";
import Icon from '../../assets/Primarios/arrow/arrow.png'
import Filter from '../../assets/Primarios/filtros-animales-menus/filter-bton/filtros.png';
import GalleryAnimals from '../../components/GalleryAnimals/GalleryAnimals';
import Navbar from '../../components/Navbar/Navbar';
import ButtonAdd from '../../components/ButtonAdd/ButtonAdd';
import "swiper/css";
import "./PetPage.scss";
import MyPetIcon from '../../components/MyPetIcon/MyPetIcon';
import { useSelector } from 'react-redux';

export default function PetPage() {

  const {user} = useSelector((state) => state.auth)

  const [animals, setAnimals] = useState([])
  const [filteredAnimals, setFilterAnimals] = useState([])

  const [myUser, setMyUser] = useState([])

  const getUser = async () => {
      const res = await axios.get(`http://localhost:5001/users/${user._id}`);
      setMyUser(res.data);
  }

  const getAnimals = async () => {
    const res = await axios.get(`http://localhost:5001/animals/`);
    const resFiltered = res.data;
    console.log("Los filtrados", resFiltered);
    setAnimals(resFiltered);
    setFilterAnimals(resFiltered);
  }

  const filterAnimals = async (searchText) => {
    console.log(animals)
    let newAnimals = animals.filter(
      (animal) => 
        animal.ciudad.toLowerCase().includes(searchText.toLowerCase()) ||
        animal.nombre.toLowerCase().includes(searchText.toLowerCase()) ||
        animal.edad.toLowerCase().includes(searchText.toLowerCase()) ||
        animal.especie[0].toLowerCase().includes(searchText.toLowerCase()) ||
        animal.sexo.toLowerCase().includes(searchText.toLowerCase()) ||
        animal.tamaño.toLowerCase().includes(searchText.toLowerCase()) ||
        animal.ubicacion.toLowerCase().includes(searchText.toLowerCase())
    );
    setFilterAnimals(newAnimals);
  }
  
  useEffect(() => {
    getAnimals('');
    getUser();
  
  }, [] )

  return (
    <div className="c-pet-container">
      <header className='c-pet-header'>
        <div className="c-pet-form-container">
          <Searcher search={filterAnimals}/>
        </div>
        <div className='c-pet-header_title'>
          <p>Mis mascotas</p>
          <ButtonAdd />
        </div>
        <p>Accede al perfil de tu mascotas</p>
        <div>
        <MyPetIcon user={user} />
        </div>
      </header>
      <div className='c-pet-body'>
        <div className='line'/>
        <Link to="/lucky/home/options/adoptionStatus" className='c-pet-button'>
          <p>Estado de la adopción</p>
          <img src={Icon} alt="icon" />
        </Link>
        <div className='c-pet-adoption'>
          <div className='c-pet-adoption_title'>
            <p>Animales en adopción</p>
            <Link to="/lucky/home/pets/filter"><img src={Filter} alt="filter"/></Link>
          </div>
          <div className='c-pet-adoption_gallery'>
            <GalleryAnimals animals={filteredAnimals} myUser={myUser}/>
          </div>
        </div>
      </div>
      <div className='c-pet-footer'>
        <Navbar/>
      </div>
    </div>
  )
}

