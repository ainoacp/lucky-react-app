import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import "./TarjetAdopDetail.scss";

const TarjetAdopDetail = ({ animal }) => {

  const { user } = useSelector((state) => state.auth);
  console.log("hisacn", animal)

  return (
    <div>
      <div className="container-boxStatus_completada">

        {user?.pets?.map((pet, index) => (
          <Link to={`/lucky/home/options/adoptionStatus/${pet._id}`} key={index}>
            <div className="c3">
              <div>
                <div className="c3__card">
                  <div className="c3__card--text"><p>Adopción de {pet.nombre}</p>
                  <div className="c3__card--text--process"><span>Completado</span><div className="estado2"></div></div>
                   </div>
                  <div className="c3__card--group">
                    <div className="c3__card--group--img"><img src={
                      // pet.imagenes[0] || 
                      pet.image ||
                      "https://static.vecteezy.com/system/resources/thumbnails/004/141/669/small/no-photo-or-blank-image-icon-loading-images-or-missing-image-mark-image-not-available-or-image-coming-soon-sign-simple-nature-silhouette-in-frame-isolated-illustration-vector.jpg"
                    }
                      alt={pet._id}
                      className="bicharraco"
                    />
                    </div>
                    <div className="c3__card--group--data">
                      <div className="c3__card--group--data-k">
                        <span>Nombre:</span>
                        <span>Ciudad:</span>
                        <span>Sexo:</span>
                      </div>
                      <div className="c3__card--group--data-v">
                        <span className="text-data_bicha">{pet.nombre}</span>
                        <span className="text-data_bicha">{pet.ciudad}</span>
                        <span className="text-data_bicha">{pet.sexo}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Link>))}

      </div>

      <div className="container-boxStatus_proceso">
        {user?.inProcessPets?.map((pet, index) => (
          <Link to="/lucky/home/options/adoptionStatus/status" key={index}>
          <div className="c3">
              <div>
                <div className="c3__card">
                  <div className="c3__card--text"><p>Adopción de {pet.nombre}</p>
                  <div className="c3__card--text--process"><span>En proceso</span><div className="estado"></div></div>
                  </div>
                  <div className="c3__card--group">
                    <div className="c3__card--group--img"><img src={
                      // pet.imagenes[0] || 
                      pet.image ||
                      "https://static.vecteezy.com/system/resources/thumbnails/004/141/669/small/no-photo-or-blank-image-icon-loading-images-or-missing-image-mark-image-not-available-or-image-coming-soon-sign-simple-nature-silhouette-in-frame-isolated-illustration-vector.jpg"
                    }
                      alt={pet._id}
                      className="bicharraco"
                    />
                    </div>
                    <div className="c3__card--group--data">
                      <div className="c3__card--group--data-k">
                        <span>Nombre:</span>
                        <span>Ciudad:</span>
                        <span>Sexo:</span>
                      </div>
                      <div className="c3__card--group--data-v">
                        <span className="text-data_bicha">{pet.nombre}</span>
                        <span className="text-data_bicha">{pet.ciudad}</span>
                        <span className="text-data_bicha">{pet.sexo}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};



export default TarjetAdopDetail;
