import React, { useState, useEffect } from 'react';

import Spline from '@splinetool/react-spline';
import Typewriter from 'typewriter-effect';
import logo from '../../assets/logo.png';
import Wave from 'react-wavify';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSquareInstagram } from '@fortawesome/free-brands-svg-icons';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faSquareWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

import './header.css';

export default function HeaderComponent() {
	const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

	useEffect(() => {
		const handleResize = () => {
			setIsMobile(window.innerWidth <= 768);
		};

		window.addEventListener('resize', handleResize);
		return () => window.removeEventListener('resize', handleResize);
	}, []);

	return (
		<>
			<div
				className="logo-container"
				style={{
					position: 'absolute',
					top: '20px', // Ajusta la distancia desde la parte superior de la pantalla
					left: '50%',
					transform: 'translateX(-50%)',
					zIndex: 3, // Asegúrate de que el logo esté por encima del fondo
				}}
			>
				<img
					src={logo} // Cambia esta URL por la ubicación de tu logo
					alt="Coffee Recoded Logo"
					style={{
						width: '150px', // Ajusta el tamaño del logo según lo necesites
						height: 'auto',
					}}
				/>
			</div>
			<div
				className="container is-flex is-align-items-center is-justify-content-center"
				style={{ height: '100vh', backgroundColor: '#732a19' }}
			>
				<div
					className="container is-paddingless is-mobile"
					style={{ position: 'absolute', zIndex: 2, padding: '20px' }}
				>
					<h1
						className="title has-text-light"
						style={{
							textShadow: '2px 2px 8px rgba(0, 0, 0, 0.5)', // Sombra del texto
						}}
					>
						Despierta tu negocio
						<Typewriter
							options={{
								loop: true,
								autoStart: true,
							}}
							onInit={(writer) => {
								writer
									.changeDeleteSpeed(0.5) // Hace que la eliminación sea más suave
									.typeString('con código y café') // Inicia con el título original
									.pauseFor(1000) // Pausa para darle tiempo al usuario de leer
									.deleteAll() // Borra la parte "con código y café"
									.typeString('con un software innovador') // Luego, agrega una variación
									.pauseFor(1000) // Pausa antes de borrar
									.deleteAll() // Elimina la parte "y el mejor café con software innovador"
									.typeString('con café y tecnología') // Otra variación
									.pauseFor(1000) // Pausa antes de borrar nuevamente
									.deleteAll() // Elimina la parte "transformando tu negocio"
									.typeString('con código y café') // Añade una última variación
									.start();
							}}
						/>
					</h1>
					<h2
						className="subtitle has-text-light"
						style={{
							maxWidth: '600px',
							margin: '25px 0',
							textShadow: '2px 2px 8px rgba(0, 0, 0, 0.5)',
						}}
					>
						En Coffee Recoded, creamos soluciones digitales que impulsan tu
						empresa, con la misma precisión y pasión que una buena taza de café.
					</h2>
					<p className="title is-4">Contáctanos:</p>
					<div className="is-flex is-align-items-center">
						<a
							href="https://www.linkedin.com/company/coffeerecoded"
							className="icon is-large"
							style={{ color: 'white', marginRight: '20px' }}
						>
							<FontAwesomeIcon icon={faSquareInstagram} size="3x" />
						</a>
						<a
							href="https://www.linkedin.com/company/coffeerecoded"
							className="icon is-large"
							style={{ color: 'white', marginRight: '20px' }}
						>
							<FontAwesomeIcon icon={faLinkedin} size="3x" />
						</a>
						<a
							href="mailto:coffeerecoded@gmail.com?subject=Consulta%20de%20información&body=Hola,%20me%20gustaría%20más%20información."
							className="icon is-large"
							style={{ color: 'white', marginRight: '20px' }}
						>
							<FontAwesomeIcon icon={faEnvelope} size="3x" />
						</a>
						<a
							href="https://wa.me/584149549050"
							className="icon is-large"
							style={{ color: 'white' }}
						>
							<FontAwesomeIcon icon={faSquareWhatsapp} size="3x" />
						</a>
					</div>
				</div>
				<Wave
					className='is-block-mobile is-hidden-table is-hidden-desktop'
					fill="#fff"
					paused={false}
					style={{
						position: 'absolute',
						bottom: isMobile ? 0 : -10, // Cambia el valor según si es móvil o no
						left: 0,
						width: '100vw',
						zIndex: 2,
					}}
					options={{
						height: 40,
						amplitude: 20,
						speed: 0.25,
						points: 10,
					}}
				/>
			</div>
			<div
				className="is-hidden-mobile is-block-tablet"
				style={{
					position: 'absolute',
					top: 0,
					left: 0,
					width: '100%',
					height: '100%',
					zIndex: 1,
				}}
			>
				<Spline scene="https://prod.spline.design/OU93CPVa4FT2xTs5/scene.splinecode" />
			</div>
			<Wave
				className='is-hidden-mobile is-block-table is-block-desktop'
				fill="#fff"
				paused={false}
				style={{
					position: 'absolute',
					bottom: isMobile ? -1 : -10, // Cambia el valor según si es móvil o no
					left: 0,
					width: '100vw',
					zIndex: 2,
				}}
				options={{
					height: 40,
					amplitude: 20,
					speed: 0.25,
					points: 10,
				}}
			/>
		</>
	);
}
