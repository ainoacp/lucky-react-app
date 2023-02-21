import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import "./TarjetAdopDetail.scss";
const TarjetAdopDetail = ({animal}) => {
  const { user } = useSelector((state) => state.auth);
  console.log("hisacn", animal)
  return (
    <div>
      <div className="container-boxStatus_completada">
        
          {user?.pets?.map((pet, index) => (
            <Link to={`/lucky/home/options/adoptionStatus/${pet._id}`} key={index}>
              <div className="box-nameStatus">
                <p className="textname">{user.pet}</p>
                <div className="box-process">
                  <div className="data-status">completada</div>
                  <div className="estado">verde</div>
                </div>
              </div>
              <div className="box-bicha">
                <img
                  src={
                    pet.imagenes[0] || 
                    pet.image ||
                    "https://static.vecteezy.com/system/resources/thumbnails/004/141/669/small/no-photo-or-blank-image-icon-loading-images-or-missing-image-mark-image-not-available-or-image-coming-soon-sign-simple-nature-silhouette-in-frame-isolated-illustration-vector.jpg"
                  }
                  alt={pet._id}
                  className="bicharraco"
                />
                <div className="bicharraco-detail">
                  <span className="text-data_bicha">Nombre: {pet.nombre}</span>
                  <span className="text-data_bicha">Ciudad: {pet.ciudad}</span>
                  <span className="text-data_bicha">Sexo:{pet.sexo}</span>
                </div>
              </div>
            </Link>
          ))}
      </div>

      <div className="container-boxStatus_proceso">
          {user?.inProcessPets?.map((pet, index) => (
            <Link to="/lucky/home/options/adoptionStatus/status" key={index}>
              <div className="box-nameStatus">
                <p className="textname">{user.pet}</p>
                <div className="box-process">
                  <div className="data-status">En proceso</div>
                  <div className="estado">amarillo</div>
                </div>
              </div>
              <div className="box-bicha">
                <img
                  src={
                    pet?.imagenes[0] ||
                    pet.image ||
                    "https://static.vecteezy.com/system/resources/thumbnails/004/141/669/small/no-photo-or-blank-image-icon-loading-images-or-missing-image-mark-image-not-available-or-image-coming-soon-sign-simple-nature-silhouette-in-frame-isolated-illustration-vector.jpg"
                  }
                  alt={pet._id}
                  className="bicharraco"
                />
                <div className="bicharraco-detail">
                  <span className="text-data_bicha">Nombre: {pet.nombre}</span>
                  <span className="text-data_bicha">Ciudad: {pet.ciudad}</span>
                  <span className="text-data_bicha">Sexo:{pet.sexo}</span>
                </div>
              </div>
            </Link>
          ))}
      </div>
    </div>
  );
};

export default TarjetAdopDetail;
