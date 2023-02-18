import { Link, useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from "axios";
import Searcher from "../../components/Searcher/Searcher";
import Slider from '../../components/SliderComp/Slider';
import Icon from '../../assets/Primarios/arrow/arrow.png'
import Filter from '../../assets/Primarios/filtros-animales-menus/filter-bton/filtros.png';
import Print from '../../assets/Primarios/filtros-animales-menus/animales/perro/perrop.png'
import GalleryAnimals from '../../components/GalleryAnimals/GalleryAnimals';
import Navbar from '../../components/Navbar/Navbar';
import ButtonAdd from '../../components/ButtonAdd/ButtonAdd';
import "swiper/css";
import "./PetPage.scss";



export default function PetPage() {

  let { nombre } = useParams();

  const [animals, setAnimals] = useState([])
  const [animal, setAnimal] = useState([])
  const [filteredAnimals, setFilteredAnimals] = useState([])
  
  const getAnimals = async () => {
    const res = await axios.get(`http://localhost:5001/animals`);
    const resFiltered = res.data;
    console.log(resFiltered);
    setAnimals(resFiltered);
    setFilteredAnimals(resFiltered);
  }

  const getAnimal = async () => {
    const res = await axios.get(`http://localhost:5001/animals/${nombre}`);
    console.log(res.data);
    setAnimal(res.data)
  }

  const filterAnimals = async (searchText) => {
    let newAnimals = animals.filter((animal) =>
      animal.especie.toLowerCase().includes(searchText.toLowerCase()))
      setFilteredAnimals(newAnimals);
  }

  const addAnimal = () => {

  }

  useEffect(() => {
    getAnimals('');
    getAnimal();
  }, [nombre])

  return (
    <div className="c-pet-container">
      <header className='c-pet-header'>
        <div className="c-pet-form-container">
          <Searcher search={filterAnimals}/>
        </div>
        <div className='c-pet-header_title'>
          <p>Mis mascotas</p>
          <ButtonAdd add={addAnimal}/>
        </div>
        <p>Accede al perfil de tu mascotas</p>
        <div className="c-slider swiper">
          <div className="swiper-wrapper">
            <Link to="/profilepet/pet{id}" className="swiper-slide">
              <img className="c-slider_img" src={animal[0]?.especie[0] || Print} alt="slide" />
              <p>{animal[0]?.nombre || "Animal"}</p>
            </Link>
            <Link to="/profilepet/pet{id}" className="swiper-slide">
              <img className="c-slider_img" src={animal.especie || Print} alt="slide" />
              <p>{animal.nombre || "Animal"}</p>
            </Link>
            <Link to="/profilepet/pet{id}" className="swiper-slide">
              <img className="c-slider_img" src={animal.especie || Print} alt="slide" />
              <p>{animal.nombre || "Animal"}</p>
            </Link>
          </div>
          <Slider />
        </div>
      </header>
      <div className='c-pet-body'>
        <div className='line'/>
        <div className='c-pet-button'>
          <p>Estado de la adopción</p>
          <Link to="/adoptionState"><img src={Icon} alt="icon" /></Link>
        </div>
        <div className='c-pet-adoption'>
          <div className='c-pet-adoption_title'>
            <p>Animales en adopción</p>
            <Link to="/filter"><img src={Filter} alt="filter"/></Link>
          </div>
          <div className='c-pet-adoption_gallery'>
            <GalleryAnimals animals={filteredAnimals} />
          </div>
        </div>
      </div>
      <div className='c-pet-footer'>
        <Navbar/>
      </div>
    </div>
  )
}

