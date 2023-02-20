import React from 'react'
import './StatusAdopPage.scss';
import StatusEnd from '../../components/StatusEnd/StatusEnd';
import { useEffect, useState } from 'react';


const StatusAdopPage = () => {

    const [estadoEnd, cambiarEstadoEnd] = useState (true);

  return (
    <>
    
    <h1>EstadoAdopcion</h1>
    <StatusEnd
            estado ={estadoEnd}
            cambiarEstado={cambiarEstadoEnd}>
            </StatusEnd>  
    </>
  )
}

export default StatusAdopPage
