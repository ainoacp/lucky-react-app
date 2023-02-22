import React, { useState } from "react";
import StatusFilter from "../../components/StatusFilters/StatusFilter";
import { Link } from "react-router-dom";
import Searcher from "../../components/Searcher/Searcher";
import "./StatusPage.scss";


import  axios from "axios";
import { useEffect, useStatte } from "react";
import { useSelector } from "react-redux";
import TarjetAdopDetail from "../../components/TarjetAdopDetail/TarjetAdopDetail";

const StatusPages = () => {
  

  const [estadoFilter, cambiarEstadoFilter] = useState(false);

  const [animals, setAnimals] = useState([]);
  // const [animal, setAnimal] = useState([])
  const [filteredAnimals, setFilterAnimals] = useState([]);

  const getAnimals = async () => {
    const res = await axios.get(`http://localhost:5001/animals`);
    const resFiltered = res.data;
    console.log(resFiltered);
    setAnimals(resFiltered);
    setFilterAnimals(resFiltered);
  };

  const filterAnimals = async (searchText) => {
    let newAnimals = animals.filter(
      (animal) => animal.name.toLowerCase().includes(searchText.toLowerCase())
      // animal.ciudad.toLowerCase().includes(searchText.toLowerCase()) ||
      // animal.especie[0].toLowerCase().includes(searchText.toLowerCase()) ||
      // animal.sexo.toLowerCase().includes(searchText.toLowerCase()) ||
      // animal.tamaño.toLowerCase().includes(searchText.toLowerCase()) ||
      // animal.ubicacion.toLowerCase().includes(searchText.toLowerCase())
    );
    setFilterAnimals(newAnimals);
  };
  useEffect(() => {
    getAnimals("");
  }, []);

  return (
    <div className="containerStatus">
      <div className="containerStatusNavbar">
        <Link to="/lucky/home/options" className="return"><img /> </Link>
        <div>
          <Searcher search={filterAnimals} />
        </div>
        {/* <a
          href
          onClick={() => cambiarEstadoFilter(!estadoFilter)}
          className="filter"
          alt="filtros"
        ></a> */}
        <TarjetAdopDetail />
      </div>

      <StatusFilter
        estado={estadoFilter}
        cambiarEstado={cambiarEstadoFilter}
      ></StatusFilter>
    </div>
  );
};

export default StatusPages;
