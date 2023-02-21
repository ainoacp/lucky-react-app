import React from 'react'
import  '../StatusEnd/StatusEnd.scss';
import styled from 'styled-components';

const StatusEnd = ({children, estado, cambiarestado}) => {



  return (
    <>    
        {estado &&
            <Overlay >
                    <Container className='context'>
                        <h2 className='tittle-Finis'>¡Enviado!</h2>
                        <p className='textFinis'></p>
                        <img className='picture-Finis'/>
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


