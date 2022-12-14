import React from "react";
import styled from "styled-components";

const ModalCode = ({ children, closeModal, estado, titulo = 'Sin Titulo', mostrarHeader, mostrarOverlay, posicionModal, padding }) => {

    return (
        <>
            {
                estado
                    ?
                    <Overlay mostrarOverlay={mostrarOverlay} posicionModal={posicionModal}>
                        <ContenedorModal padding={padding}>
                            {mostrarHeader
                                ?
                                <EncabezadoModal>
                                    <h3>{titulo}</h3>
                                </EncabezadoModal>
                                :
                                null
                            }
                            <BotonCerrar onClick={closeModal}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-x" viewBox="0 0 16 16">
                                    <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" />
                                </svg>
                            </BotonCerrar>
                            {children}
                        </ContenedorModal>
                    </Overlay>
                    :
                    null
            }
        </>
    )
}

export default ModalCode;

const Overlay = styled.div`
    width: 100vw;
    height: 100vh;
    position: fixed;
    top: 0;
    left: 0;
    background: ${props => props.mostrarOverlay ? 'rgba(0, 0, 0, 0.7)' : 'rgba(0, 0, 0, 0)'};
    padding: 40px;
    display: flex;
    align-items: ${({posicionModal}) => posicionModal ? posicionModal : 'center'}; //destructurin a las props que recibe el componente del style component
    justify-content: center;
`;

const ContenedorModal = styled.div`
    width: 500px;
    min-height: 100px;
    background-color: #fff;
    position: relative;
    border-radius: 5px;
    box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
    padding: ${({padding}) => padding ? padding : '20px'};
`;
const EncabezadoModal = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 20px;
    padding-bottom: 20px;
    border-bottom: 1px solid #E8E8E8;

    h3 {
        font-weight: 500;
        font-size: 16px;
        color: #1766DC;
    }
`;

const BotonCerrar = styled.button`
    position: absolute;
    top: 15px;
    right: 20px;
    width: 30px;
    height: 30px;
    border: none;
    background: none;
    cursor: pointer;
    transition: 0.3s ease all;
    border-radius: 5px;
    color: #1766DC;
    
    &:hover {
        background-color: #F2F2F2;
    }

    SVG {
        width: 100%;
        height: 100%;
    }
`;