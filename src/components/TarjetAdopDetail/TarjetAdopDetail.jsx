import React from 'react'
import './TarjetAdopDetail.scss';
const TarjetAdopDetail = () => {
  return (
    <div>
      <a href className='container-boxStatus'>

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
  )
}

export default TarjetAdopDetail
