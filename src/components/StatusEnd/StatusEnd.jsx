import React from 'react'
import  '../StatusEnd/StatusEnd.scss';
import Buttonclose from "../../assets/Primarios/ubtitled-section/X.png";
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const StatusEnd = ({children, estado, cambiarestado}) => {



  return (
    <>    
        {estado &&
            <Overlay >
                    <Container className='context'>

                           <h2 className='tittle-Finis'>¡Enviado!</h2>
                           <p className='textFinis'>Ya hemos enviado toda la info a la protectora.</p>
                           <p className='textFinis'>Recuerda que puedas ponerte en contacto con ellos en cualquier momento si necesitas cambiar algo</p>
                           <image className='picture-Finis'/>
                            
                        <Link to='/statusAdoption'>
                              <Buttonclos><img className='close'  src={Buttonclose} alt=''/> </Buttonclos>
                        </Link>
                    </Container>            
            </Overlay>
        }
    </>
  )
}

export default StatusEnd

const Overlay = styled.div`
display:flex;
    flex-direction:column;
    justify-content: center;
    align-items: center;
width: 100vw;
height: 100vh;
position:fixed;
top: 0;
left: 0;
background: rgba(169, 209, 233,.5);
`;

const Container = styled.div`
display:flex;
    flex-direction:column;
    justify-content: center;
    align-items: center;

width:90%;
height:70%;
background: #fff;
position: relative;
margin: 2, 5%, 5%, 5%;
border-radius:5px;
`;


const Buttonclos = styled.div`
  position:absolute;
  top: 20px;
  right: 20px;

  width:30px;
  height:30px;
  border:none;
  background: none;
  cursor:pointer;
  transition: .3s ease all;
  border-radius: 5px;

  &:hover{
      background: #f2f2f2;
  }
  

`;