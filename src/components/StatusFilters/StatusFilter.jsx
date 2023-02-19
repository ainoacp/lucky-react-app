import React from 'react'
import styled from 'styled-components';
import ButtonAccept from '../Buttons/Accept/ButtonAccept';

import ButtonDelete from '../Buttons/Delete/ButtonDelete';
import  '../StatusFilters/StatusFilter.scss';

const StatusFilter = ({children, estado, cambiarestado}) => {

  return (
    <>    
        {estado &&
            <Overlay >
                    <Container className='context'>

                        <h1 className='over-title'>Filtros</h1>
                        <div className='status'>
                            <div className='contest-box-status'>
                            <image className='comply' /><p>Completado</p>
                            </div>

                            <div className='contest-box-status'>
                            <image className='process'/><p>En proceso</p>
                            </div>

                            <div className='contest-box-status'>
                            <image className='decline'/><p>Denegado</p>
                            </div>

                        </div>
                        <div className='box-btn'>
                            <ButtonDelete></ButtonDelete>
                            <ButtonAccept></ButtonAccept>
                            
                        </div>
                    </Container>            
            </Overlay>
        }
    </>
  )
}

export default StatusFilter

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
height:35%;
background: #fff;
position: relative;
margin: 2, 5%, 5%, 5%;
border-radius:5px;
`;


