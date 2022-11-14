import React, { useState } from 'react';
import deva from '../assets/dva.jpg'
import styled from 'styled-components';
import ModalCode from './ModalCode';

const Modal = () => {

	const [modalUno, setModalUno] = useState(false)
	const [modalDos, setModalDos] = useState(false)

	const openUnoModal = () => {
		setModalUno(true)
	}

	const openDosModal = () => {
		setModalDos(true)
	}

	const closeUnoModal = () => {
		setModalUno(false)
	}

	const closeDosModal = () => {
		setModalDos(false)
	}

	return (
		<div>
			<ContenedorBotones>
				<Boton onClick={openUnoModal}>
					Modal 1
				</Boton>

				<Boton onClick={openDosModal}>
					Modal 2
				</Boton>
			</ContenedorBotones>

			{/* Modal 1 */}

			<ModalCode
				estado={modalUno}
				cambiarEstado={setModalUno}
				closeModal={closeUnoModal}
				titulo='Hola!'
				mostrarHeader={true}
				mostrarOverlay={true}
				// posicionModal={'end'}
				padding={'20px'}
			>
				<Contenido>
					<h1>Ventena Modal 1</h1>
					<p>Reutilizable y con opciones a personalizacion.</p>
					<Boton onClick={closeUnoModal}>Aceptar</Boton>
				</Contenido>
			</ModalCode>

			{/* Modal 2 */}

			<ModalCode
				estado={modalDos}
				cambiarEstado={setModalDos}
				closeModal={closeDosModal}
				titulo='Hola!'
				mostrarHeader={false}
				mostrarOverlay={true}
				// posicionModal={'end'}
				padding={'0px'}
			>
				<Contenido>
					<img src={deva} alt='bella' />
				</Contenido>
			</ModalCode>
		</div>
	);
}

export default Modal;



const ContenedorBotones = styled.div`
	padding: 40px;
	display: flex;
	flex-wrap: wrap;
	justify-content: center;
	gap: 20px;
`;

const Boton = styled.button`
	display: block;
	padding: 10px 30px;
	border-radius: 100px;
	color: #fff;
	border: none;
	background: #1766DC;
	cursor: pointer;
	font-family: 'Roboto', sans-serif;
	font-weight: 500;
	transition: .3s ease all;

	&:hover {
		background: #0066FF;
	}
`;

const Contenido = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;

	h1 {
		font-size: 42px;
		font-weight: 700;
		margin-bottom: 10px;
	}

	p {
		font-size: 18px;
		margin-bottom: 20px;
	}

	img {
		width: 100%;
		vertical-align: top;
		border-radius: 3px;
	}
`;