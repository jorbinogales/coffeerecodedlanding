import { useEffect, useState } from 'react';
import './App.css';
import HeaderComponent from './sections/header/header';
import TeamComponent from './sections/team/team';
import LoaderComponent from './components/LoaderComponent';
import ProjectsComponent from './sections/projects/projects';
import 'bulma/css/bulma.min.css';
import FooterComponent from './sections/footer/footer';
import { Helmet } from 'react-helmet';

function App() {
	const [loading] = useState(false);
	const [theme] = useState(localStorage.getItem('theme') || 'light');

	useEffect(() => {
		document.documentElement.classList.toggle(
			'has-background-dark',
			theme === 'dark'
		);
		document.documentElement.classList.toggle(
			'has-background-light',
			theme === 'light'
		);
		localStorage.setItem('theme', theme);
	}, [theme]);

	return (
		<div>
			<Helmet>
        <meta property="og:title" content="Coffee Recoded - Despierta tu negocio con tecnología" />
				<meta
					property="og:description"
					content="En Coffee Recoded nos especializamos en el desarrollo de soluciones de software a medida para empresas. Creamos aplicaciones web, móviles y soluciones tecnológicas innovadoras que optimizan procesos y mejoran la experiencia de tus usuarios."
				/>
				<meta
					property="og:image"
					content="https://coffeerecoded.net/ico.png"
				/>
				<meta property="og:url" content="https://coffeerecoded.net" />
			</Helmet>
			{loading ? (
				<LoaderComponent />
			) : (
				<div style={{ background: 'white' }}>
					<HeaderComponent></HeaderComponent>
					<TeamComponent></TeamComponent>
					<ProjectsComponent></ProjectsComponent>
					<FooterComponent></FooterComponent>
				</div>
			)}
		</div>
	);
}

export default App;
