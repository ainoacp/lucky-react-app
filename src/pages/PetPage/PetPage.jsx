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
import MyPetIcon from '../../components/MyPetIcon/MyPetIcon';



export default function PetPage() {

  let { id } = useParams();

  const [animals, setAnimals] = useState([])
  const [animal, setAnimal] = useState([])
  const [filteredAnimals, setFilterAnimals] = useState([])

  const [users, setUsers] = useState([])
  const [user, setUser] = useState([])
  
  const getAnimals = async () => {
    const res = await axios.get(`http://localhost:5001/animals`);
    const resFiltered = res.data;
    console.log(resFiltered);
    setAnimals(resFiltered);
    setFilterAnimals(resFiltered);
  }

  const filterAnimals = async (searchText) => {
    let newAnimals = animals.filter(
      (animal) => 
        animal.name.toLowerCase().includes(searchText.toLowerCase()) 
        // animal.ciudad.toLowerCase().includes(searchText.toLowerCase()) ||
        // animal.especie[0].toLowerCase().includes(searchText.toLowerCase()) ||
        // animal.sexo.toLowerCase().includes(searchText.toLowerCase()) ||
        // animal.tamaño.toLowerCase().includes(searchText.toLowerCase()) ||
        // animal.ubicacion.toLowerCase().includes(searchText.toLowerCase())
    );
    setFilterAnimals(newAnimals);
  }

  // const getAnimal = async (animal) => {
  // const res = await axios.get(`http://localhost:5001/animals/${id}`);
  // console.log(res.data);
  // // console.log(res.data[0].especie[0])
  // setAnimal(res.data);
  // }

  const getUsers = async () => {
      const res = await axios.get(`http://localhost:5001/users`);
      console.log(res.data);
      // console.log(res.data[0].pets)
      setUsers(res.data);
  }

//   const getUser = async () => {
//     const res = await axios.get(`http://localhost:5001/users/${id}`);
//     console.log(res.data);
//     setUser(res.data);
//     getAnimal(res.data);
// }
      
  useEffect(() => {
    getAnimals('');
    // getAnimal();
    getUsers();
    // getUser();
  }, [id] )

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
        <div className="c-slider swiper">
          <div className="swiper-wrapper">
            {/* <MyPetIcon user={getUser}/> */}
            {users?.map((user) => (
              <div key={user.id}>
                {user?.pets?.map((pet) => (
                  <Link to="/animals/{id}" className="swiper-slide" key={pet.id}>
                    <p>{pet}</p>
                  </Link>
                ))}
              </div>
            ))}
              {/* <Link to="/animals/{id}" className="swiper-slide">
                <img src={animal.image} alt={animal._id} />
                <p>{animal.especie[0]}</p>
              </Link> */}
          </div>
          <Slider />
        </div>
      </header>
      <div className='c-pet-body'>
        <div className='line'/>
        <Link to="/adoptionState" className='c-pet-button'>
          <p>Estado de la adopción</p>
          <img src={Icon} alt="icon" />
        </Link>
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

