// import { useState } from "react";

import { NavLink } from "react-router-dom";

export default function BuildingPage() {

    // const [popUp, setPopUp] = useState(false);
    // // const openPopUp = () => {
    // //     setPopUp(true);
    // //   }
    //   const closePopUp = () => {
    //     setPopUp(false);
    //   }
  return (
    // <button onClick={openPopUp} className="c__buttonsAnimals--coso-2"> asdf </button>
    <>
        <div className="popUp">
            <div className="popUp__whiteBox">
                <div className="popUp__whiteBox--title"><p>Seccion en construccion, disculpen las molestias</p></div>
                <div className="popUp__whiteBox--text"><img src="https://ih1.redbubble.net/image.791520846.5052/st,small,507x507-pad,600x600,f8f8f8.jpg" alt=""/></div>
                <NavLink to="/lucky/home" className="popUp__whiteBox--buttons--1">Cancelar</NavLink>
            </div>
        </div>
    </>
  );
}
