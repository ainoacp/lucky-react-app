/* eslint-disable no-unused-vars */
import { Link } from "react-router-dom";
import "./AnimalsFilterPage.scss";
import axios from "axios";
import FilteredAnimals from "../../components/FilteredAnimals/FilteredAnimals";
import cross from "../../assets/Primarios/ubtitled-section/X.png";
import perro from "../../assets/Primarios/filtros-animales-menus/animales/perro/perrop.png";
import gato from "../../assets/Primarios/filtros-animales-menus/animales/gato/cat.png";
import conejo from "../../assets/Primarios/filtros-animales-menus/animales/conejo/conejo1x.png";
import cobaya from "../../assets/Primarios/filtros-animales-menus/animales/cobaya/cobaya.png";
import mamifero from "../../assets/Primarios/filtros-animales-menus/animales/pequeños-mamiferos/pequeñoMamiferos.png";
import huron from "../../assets/Primarios/filtros-animales-menus/animales/huron/huron.png";
import pez from "../../assets/Primarios/filtros-animales-menus/animales/pez/Fish.png";
import reptil from "../../assets/Primarios/filtros-animales-menus/animales/reptiles/reptil.png";
import anfibio from "../../assets/Primarios/filtros-animales-menus/animales/anfibios/anfibio.png";
import araña from "../../assets/Primarios/filtros-animales-menus/animales/aracnidos-o-insectos/aracnidos-insectos.png";
import ave from "../../assets/Primarios/filtros-animales-menus/animales/ave/ave.png";
import perro2 from "../../assets/Secundarios/filtros/especies/perro/perrop.png";
import gato2 from "../../assets/Secundarios/filtros/especies/gato/cat.png";
import conejo2 from "../../assets/Primarios/filtros-animales-menus/animales/conejo/conejo1x.png";
import cobaya2 from "../../assets/Primarios/filtros-animales-menus/animales/cobaya/cobaya.png";
import mamifero2 from "../../assets/Secundarios/filtros/especies/p-mamiferos/p-mamifero.png";
import huron2 from "../../assets/Primarios/filtros-animales-menus/animales/huron/huron.png";
import pez2 from "../../assets/Primarios/filtros-animales-menus/animales/pez/Fish.png";
import reptil2 from "../../assets/Primarios/filtros-animales-menus/animales/reptiles/reptil.png";
import anfibio2 from "../../assets/Primarios/filtros-animales-menus/animales/anfibios/anfibio.png";
import araña2 from "../../assets/Primarios/filtros-animales-menus/animales/aracnidos-o-insectos/aracnidos-insectos.png";
import ave2 from "../../assets/Secundarios/filtros/especies/ave/051Bird.png";
import macho from "../../assets/Primarios/filtros-animales-menus/sexo/macho/male.png";
import hembra from "../../assets/Primarios/filtros-animales-menus/sexo/hembra/female.png";
import macho2 from "../../assets/Secundarios/filtros/genero/male/male.png";
import hembra2 from "../../assets/Secundarios/filtros/genero/female/female.png";
import pequeño from "../../assets/Secundarios/filtros/tamaño/pequeño.png";
import mediano from "../../assets/Secundarios/filtros/tamaño/mediano2x.png";
import grande from "../../assets/Secundarios/filtros/tamaño/grande3x.png";
import { useState, useContext, useEffect } from "react";

export default function AnimalsFilter() {
  const [ciudad, setCiudad] = useState("noCity");
  const [especie, setEspecie] = useState("noEspecie");
  const [age, setAge] = useState("noAge");
  const [sex, setSex] = useState("noSex");
  const [shape, setShape] = useState("noShape");

  const [animals, setAnimals] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [submited, setSubmited] = useState(false);

  const getAnimals = async () => {
    const res = await axios.get(`http://localhost:5001/animals`);
    const resFiltered = res.data;
    console.log(resFiltered);
    setAnimals(resFiltered);
    setFilteredData(resFiltered);
  };

  useEffect(() => {
    getAnimals();
  }, []);

  const filteredAnimal = (selectedAnimal) => {
    if (selectedAnimal === especie) {
      setEspecie("noEspecie");
    } else {
      setEspecie(selectedAnimal);
    }
  };

  const filteredCity = (selectedCity) => {
    setCiudad(selectedCity.target.value);
  };

  const filteredAge = (selectedAge) => {
    setAge(selectedAge.target.value);
  };

  const filteredSex = (selectedSex) => {
    if (selectedSex === sex) {
      setSex("noSex");
    } else {
      setSex(selectedSex);
    }
  };

  const filteredShape = (selectedShape) => {
    if (selectedShape === shape) {
      setShape("noShape");
    } else {
      setShape(selectedShape);
    }
  };

  const handleSubmit = () => {
    setFilteredData(
      animals.filter((animal) => {
        return (
          ((typeof animal.especie === "string" &&
            animal.especie.toLowerCase() === especie.toLowerCase()) ||
            especie === "noEspecie") &&
          ((typeof animal.sexo === "string" &&
            animal.sexo.toLowerCase() === sex.toLowerCase()) ||
            sex === "noSex") &&
          ((typeof animal.ciudad === "string" &&
            animal.ciudad.toLowerCase() === ciudad.toLowerCase()) ||
            ciudad === "noCity") &&
          ((typeof animal.tamano === "string" &&
            animal.tamano.toLowerCase() === shape.toLowerCase()) ||
            shape === "noShape")
        );
      })
    );
    setSubmited(true);
  };

  const deleteFilter = () => {
    setCiudad("noCity");
    setEspecie("noEspecie");
    setAge("noAge");
    setSex("noSex");
    setShape("noShape");
    setFilteredData(animals);
    setSubmited(false);
  };
  return (
    <>
      {!submited ? (
        <section className="c-filter">
          <div className="c-filter_header">
            <h1 className="c-filter__title">Filtros</h1>
            <Link to="/lucky/home/pets">
              <img src={cross} alt="cross" className="x" />
            </Link>
          </div>
          <div className="c-filter__content">
            <div className="c-filter-div__top">
              <h2 className="c-filter__category">Ciudad</h2>
              <select
                className="c-filter__display"
                onChange={filteredCity}
                name="cities"
                id="cityList"
              >
                <option value="noCity">Selecciona una ciudad...</option>
                <option value="barcelona">Barcelona</option>
                <option value="bilbao">Bilbao</option>
                <option value="madrid">Madrid</option>
                <option value="malaga">Málaga</option>
                <option value="cadiz">Cádiz</option>
                <option value="sevilla">Sevilla</option>
                <option value="valencia">Valencia</option>
                <option value="valladolid">Valladolid</option>
              </select>
              <div className="c-filter-div"></div>
            </div>
          </div>

          <div className="c-filter__content">
            <h2 className="c-filter__category">Especie</h2>
            <div className="c-filter-div">
              <div
                className={
                  especie === "perro"
                    ? "c-filter-container__icon selected"
                    : "c-filter-container__icon no-selected"
                }
                onClick={() => filteredAnimal("perro")}
              >
                <img
                  className="c-filter-image"
                  src={especie === "perro" ? perro2 : perro}
                  alt="perro"
                />
                <p className="c-filter__p">Perro</p>
              </div>
              <div
                className={
                  especie === "gato"
                    ? "c-filter-container__icon selected"
                    : "c-filter-container__icon no-selected"
                }
                onClick={() => filteredAnimal("gato")}
              >
                <img
                  className="c-filter-image"
                  src={especie === "gato" ? gato2 : gato}
                  alt="gato"
                />
                <p className="c-filter__p">Gato</p>
              </div>
              <div
                className={
                  especie === "conejo"
                    ? "c-filter-container__icon selected"
                    : "c-filter-container__icon no-selected"
                }
                onClick={() => filteredAnimal("conejo")}
              >
                <img
                  className="c-filter-image"
                  src={especie === "conejo" ? conejo2 : conejo}
                  alt="conejo"
                />
                <p p className="c-filter__p">
                  Conejo
                </p>
              </div>
              <div
                className={
                  especie === "cobaya"
                    ? "c-filter-container__icon selected"
                    : "c-filter-container__icon no-selected"
                }
                onClick={() => filteredAnimal("cobaya")}
              >
                <img
                  className="c-filter-image"
                  src={especie === "cobaya" ? cobaya2 : cobaya}
                  alt="cobaya"
                />
                <p p className="c-filter__p">
                  Cobaya
                </p>
              </div>
              <div
                className={
                  especie === "Pequeño mamifero"
                    ? "c-filter-container__icon selected"
                    : "c-filter-container__icon no-selected"
                }
                onClick={() => filteredAnimal("Pequeño mamifero")}
              >
                <img
                  className="c-filter-image"
                  src={especie === "Pequeño mamifero" ? mamifero2 : mamifero}
                  alt="mamifero"
                />
                <p className="c-filter__p">Pequeño mamífero</p>
              </div>
              <div
                className={
                  especie === "huron"
                    ? "c-filter-container__icon selected"
                    : "c-filter-container__icon no-selected"
                }
                onClick={() => filteredAnimal("huron")}
              >
                <img
                  className="c-filter-image"
                  src={especie === "huron" ? huron2 : huron}
                  alt="hurón"
                />
                <p className="c-filter__p">Hurón</p>
              </div>
              <div
                className={
                  especie === "pez"
                    ? "c-filter-container__icon selected"
                    : "c-filter-container__icon no-selected"
                }
                onClick={() => filteredAnimal("pez")}
              >
                <img
                  className="c-filter-image"
                  src={especie === "pez" ? pez2 : pez}
                  alt="pez"
                />
                <p className="c-filter__p">Pez</p>
              </div>
              <div
                className={
                  especie === "reptil"
                    ? "c-filter-container__icon selected"
                    : "c-filter-container__icon no-selected"
                }
                onClick={() => filteredAnimal("reptil")}
              >
                <img
                  className="c-filter-image"
                  src={especie === "reptil" ? reptil2 : reptil}
                  alt="reptil"
                />
                <p className="c-filter__p">Reptil</p>
              </div>
              <div
                className={
                  especie === "reptil"
                    ? "c-filter-container__icon selected"
                    : "c-filter-container__icon no-selected"
                }
                onClick={() => filteredAnimal("anfibio")}
              >
                <img
                  className="c-filter-image"
                  src={especie === "anfibio" ? anfibio2 : anfibio}
                  alt="anfibio"
                />
                <p className="c-filter__p">Anfibio</p>
              </div>
              <div
                className={
                  especie === "Aracnido o insecto"
                    ? "c-filter-container__icon selected"
                    : "c-filter-container__icon no-selected"
                }
                onClick={() => filteredAnimal("Aracnido o insecto")}
              >
                <img
                  className="c-filter-image"
                  src={especie === "Aracnido o insecto" ? araña2 : araña}
                  alt="arácnido"
                />
                <p className="c-filter__p">Arácnido o insecto</p>
              </div>
              <div
                className={
                  especie === "ave"
                    ? "c-filter-container__icon selected"
                    : "c-filter-container__icon no-selected"
                }
                onClick={() => filteredAnimal("ave")}
              >
                <img
                  className="c-filter-image"
                  src={especie === "ave" ? ave2 : ave}
                  alt="ave"
                />
                <p className="c-filter__p">Ave</p>
              </div>
            </div>
          </div>
          <div className="c-filter__content">
            <h2 className="c-filter__category">Edad</h2>
            <select
              className="c-filter__display"
              onChange={filteredAge}
              name="age"
              id="ageList"
            >
              <option value="noCity">Selecciona...</option>
              <option value="cachorro">Cachorro</option>
              <option value="joven">Jóven</option>
              <option value="adulto">Adulto</option>
            </select>
          </div>
          <div className="c-filter__content">
            <h2 className="c-filter__category">Sexo</h2>
            <div className="c-filter-div">
              <div
                className={
                  sex === "macho"
                    ? "c-filter-container__icon selected"
                    : "c-filter-container__icon no-selected"
                }
                onClick={() => filteredSex("macho")}
              >
                <img
                  className="c-filter-image"
                  src={sex === "macho" ? macho2 : macho}
                  alt="macho"
                />
                <p className="c-filter__p">Macho</p>
              </div>
              <div
                className={
                  sex === "hembra"
                    ? "c-filter-container__icon selected"
                    : "c-filter-container__icon no-selected"
                }
                onClick={() => filteredSex("hembra")}
              >
                <img
                  className="c-filter-image"
                  src={sex === "hembra" ? hembra2 : hembra}
                  alt="hembra"
                />
                <p className="c-filter__p">Hembra</p>
              </div>
            </div>
          </div>
          <div className="c-filter__content">
          <h2 className="c-filter__category">Tamaño</h2>
          <div className="c-filter-div">
            <div
              className={
                shape === "pequeño"
                  ? "c-filter-container__icon selected"
                  : "c-filter-container__icon no-selected"
              }
              onClick={() => filteredShape("pequeño")}
            >
              <img
                className="c-filter-image__pequeño"
                src={shape === "pequeño" ? pequeño : pequeño}
                alt="tamaño pequeño"
              />
              <p className="c-filter__p">Pequeño</p>
            </div>
            <div 
              className={
                shape === "mediano"
                  ? "c-filter-container__icon selected"
                  : "c-filter-container__icon no-selected"
              }
              onClick={() => filteredShape("mediano")}
            >
              <img
                className="c-filter-image__mediano"
                src={shape === "mediano" ? mediano : mediano}
                alt="tamaño mediano"
              />
              <p className="c-filter__p">Mediano</p>
            </div>
            <div
              className={
                shape === "grande"
                  ? "c-filter-container__icon selected"
                  : "c-filter-container__icon no-selected"
              }
              onClick={() => filteredShape("grande")}
            >
              <img
                className="c-filter-image__grande"
                src={shape === "grande" ? grande : grande}
                alt="tamaño grande"
              />
              <p className="c-filter__p">Grande</p>
            </div>
          </div>
          </div>
          <div className="c-filter__btns">
            <button className="c-filter-button__delete" onClick={deleteFilter}>
              Borrar filtros
            </button>
            <button className="c-filter-button__submit" onClick={handleSubmit}>
              Aplicar
            </button>
          </div>
        </section>
      ) : (
        <FilteredAnimals animals={filteredData} />
      )}
    </>
  );
}
