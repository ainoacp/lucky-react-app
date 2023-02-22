import React from "react";
import "./PlusPage.scss";
import Navbar from "../../components/Navbar/Navbar";
import iconAsoc from "../../assets/Primarios/mas-plus/protectoras/protectora.png";
import iconEve from "../../assets/Primarios/mas-plus/eventos/eventos.png";
import iconCur from "../../assets/Primarios/mas-plus/curiosidades/blogCopy.png";
import iconHelp from "../../assets/Primarios/mas-plus/ayuda/ayuda.png";
import iconSetup from "../../assets/Primarios/mas-plus/configuracion/confi.png";
import iconClose from "../../assets/Primarios/mas-plus/cerrar-Seccion/salir.png";
import icono from "../../assets/Primarios/arrow/arrow.png";
import ButtonLogout from "../../components/ButtonLogout/ButtonLogout";
import { NavLink } from "react-router-dom";

const PlusPage = () => {
  return (
    <>
      <div className="container-profile">
        <div className="container-start">
          <NavLink to="/lucky/building" className="box">
            <div className="box-start">
              <img src={iconAsoc} className="picture-main" alt="A" />
              Asociaciones protectoras
            </div>
            <img src={icono} className="ico" alt="m" />
          </NavLink>

          <NavLink to="/lucky/building" className="box">
            <div className="box-start">
              <img src={iconEve} className="picture-main" alt="E" />
              Eventos
            </div>
            <img src={icono} className="ico" alt="m" />
          </NavLink>

          <NavLink to="/lucky/building" className="box">
            <div className="box-start">
              <img src={iconCur} className="picture-main" alt="C" />
              Curiosidades
            </div>
            <img src={icono} className="ico" alt="m" />
          </NavLink>

          <NavLink href="/lucky/building" className="box">
            <div className="box-start">
              <img src={iconHelp} className="picture-main" alt="Ay" />
              Ayuda
            </div>
            <img src={icono} className="ico" alt="m" />
          </NavLink>

          <NavLink to="/lucky/building" className="box">
            <div className="box-start">
              <img src={iconSetup} className="picture-main" alt="C" />
              Configuración
            </div>
            <img src={icono} className="ico" alt="m" />
          </NavLink>
        </div>

        <ButtonLogout className="container-end" />
      </div>
      <Navbar></Navbar>
    </>
  );
};

export default PlusPage;
