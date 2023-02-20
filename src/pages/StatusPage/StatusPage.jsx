import React, {useState}from 'react';
import StatusFilter from '../../components/StatusFilters/StatusFilter';
import { Link } from 'react-router-dom';
import Searcher from "../../components/Searcher/Searcher";
import './StatusPage.scss';

import axios from "axios";
import { useEffect, useStatte } from 'react';

const StatusPages = () => {

  const [estadoFilter, cambiarEstadoFilter] = useState (false);

  const [animals, setAnimals] = useState([])
  // const [animal, setAnimal] = useState([])
  const [filteredAnimals, setFilterAnimals] = useState([])
  
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
  useEffect(() => {getAnimals('')}, [])

  return (
    <>
    <div className='containerStatus'>
        <div className='containerStatusNavbar'>
            <Link to='/profile' className='return'></Link>

            <div><Searcher search={filterAnimals}/></div>

            <a href onClick={() => cambiarEstadoFilter(!estadoFilter)}  className='filter' alt='filtros'></a>
        </div>

        <Link to='/lucky/home/options/adoptionStatus/status' href className='container-boxStatus'>

              <div className='box-nameStatus'>
                      <p className='textname'>Adopción de Blue</p>
                  <div className='box-process'>
                      <div className='data-status'>En proceso</div>
                      <div className='estado'></div>
                  </div>
              </div>

              <div className='box-bicha'>
                    <image className='bicharraco'/>
                    <div className='bicharraco-detail'>
                          <p className='text-data_bicha'>Nombre:</p>
                          <p className='text-data_bicha'>Ciudad:</p> 
                          <p className='text-data_bicha'>Sexo:</p>  
                    </div>
                    <div className='bicharraco-detail'>
                          <p className='text-data_bicha'>Nombre</p>
                          <p className='text-data_bicha'>Ciudad</p> 
                          <p className='text-data_bicha'>Sexo</p>  
                    </div>
              </div>
         </Link>
      </div>
      <StatusFilter  
               estado ={estadoFilter}
               cambiarEstado={cambiarEstadoFilter}>

      </StatusFilter>
    </>
  )
}

export default StatusPages