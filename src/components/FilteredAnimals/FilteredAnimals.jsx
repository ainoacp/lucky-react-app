import { Link } from "react-router-dom";
import "./FilteredAnimals.scss";
import Filter from "../../assets/Primarios/filtros-animales-menus/filter-bton/filtros.png";
import Arrow from "../../assets/Arrow/Atras/atras.png";
import { useState } from "react";
import { generatePath } from "react-router-dom";
import Fav from "../../assets/Primarios/Info-like-compartir/like/favoritos.png";
import AnimalsFilterPage from "../../pages/AnimalsFilterPage/AnimalsFilterPage";

const Card = ({ animal }) => {
  return (
    <>
      <Fav />
      <Link className="c-card__name" to={generatePath("/animals/:name", { name: animal.nombre })}>
        <div className="c-card">
          <img className="c-card__img" src={animal.imagen} alt={animal.nombre} />
          <div className="c-card__footer">
            <h3 className="c-card__name">{animal.nombre}</h3>
            <div className="c-card__footer-right">
              <p className="c-card__footer-right__p">{animal.ciudad}</p>
              <p className="c-card__footer-right__p c-card__footer-right__p--right">{animal.peso}Kg</p>
            </div>
          </div>
        </div>
      </Link>
    </>
  );
};

function FilteredAnimals({ filteredData }) {
  const [on, setOn] = useState(true);
  const copyData = filteredData;
  const [animals, setanimals] = useState(filteredData);

  const onSearch = (event) => {
    onFilter(event.target.value);
  };

  const onFilter = (inputValue) => {
    let filteredanimal = copyData.filter((animal) => {
      if (animal.nombre.toLowerCase().includes(inputValue.toLowerCase())) {
        return animal;
      }
      return false;
    });
    setanimals(filteredanimal);
  };

  if (on) {
    return (
      <section className="c-filteredAnimals">
        <div className="c-filtradosPage-search">
          <img className="c-filteredAnimals__arrow" src={Arrow} alt="icon" onClick={() => setOn(false)} />

          <input type="text" className="c-filtradosPage-search__input" placeholder="Buscar" onChange={onSearch} />

          <Link className="c-link" to="/filtro">
            <img className="c-filtradosPage-filter__img" src={Filter} alt="filter" onClick={() => setOn(false)} />
          </Link>
          <div className="c-filtradosPage__num" onClick={() => setOn(false)}>
            {filteredData.length}
          </div>
        </div>
        <div className="c-gallery__animals">
          {animals.map((animal) => (
            <Card key={animal._id} animal={animal} />
          ))}
        </div>
      </section>
    );
  } else {
    return <AnimalsFilterPage />;
  }
}

export default FilteredAnimals;