import Card from "../../components/CardComponent";
import Leandro from './../../assets/team/Leandro.png'
import Jorbi from './../../assets/team/Jorbi.png'

export default function TeamComponent() {
	return (
		<div className="container" style={{maxWidth: '1000px', paddingTop: 50, paddingBottom: 100}}>
			<div className="container has-text-centered">
				<h1 className="title has-text-dark">Nuestro Equipo</h1>
				<h2 className="subtitle has-text-dark">Conoce a nuestros baristas que hacen esto posible</h2>
			</div>
			<div className="columns is-multiline mt-6">
				<div className="column is-one-two is-full-mobile">
				<Card
					image={Leandro}
					imageWith="auto"
					name="Leandro Guzman"
					username="Consultor de marketing digital"
					description="Cafe favorito: Capuccino"
					/>
                </div>
				<div className="column is-one-two is-full-mobile">
				<Card
					image={Jorbi}
					imageWith="65%"
					imageHeight="90%"
					name="Jorbi Nogales"
					username="Cloud developer"
					description="Cafe favorito: Mocaccino."
					/>
                </div>
			</div>
		</div>
	);
}
