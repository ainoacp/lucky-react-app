import React from 'react'
import { Link } from 'react-router-dom'
import './ButtonReturn.scss'

const ButtonReturn = () => {
  return (
    
    <div className='containerReturn'>
        
            <Link to='/profile' className='return'></Link>

            <div>Poner buscador aqui</div>      
    </div>
  )
}

export default ButtonReturn
