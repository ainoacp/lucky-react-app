import React, {useState}from 'react';
import StatusFilter from '../../components/StatusFilters/StatusFilter';
import { Link } from 'react-router-dom';
import './StatusPage.scss';

const StatusPages = () => {

  const [estadoFilter, cambiarEstadoFilter] = useState (false);

  return (
    <>
    <div className='containerStatus'>
        <div className='containerStatusNavbar'>
            <Link to='/profile' className='return'></Link>

            <div>Poner buscador aqui</div>

            <Link to='#' className='filter' alt='filtros'></Link>
        </div>

        <a onClick={() => cambiarEstadoFilter(!estadoFilter)} href className='container-boxStatus'>

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
         </a>
      </div>
      <StatusFilter  
               estado ={estadoFilter}
               cambiarEstado={cambiarEstadoFilter}>

      </StatusFilter>
    </>
  )
}

export default StatusPages