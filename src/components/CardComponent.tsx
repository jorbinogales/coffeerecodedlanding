import { motion, AnimatePresence } from 'framer-motion';

interface CardProps {
	image: string;
	imageWith?: string;
	imageHeight?: string;
	name: string;
	username: string;
	description: string;
	linkedin?: string;
	github?: string;
}

const Card: React.FC<CardProps> = ({
	image,
	imageWith,
	imageHeight,
	name,
	username,
	description,
	linkedin,
	github,
}) => {
	return (
		<AnimatePresence>
			<motion.div
				initial={{ opacity: 0 }}
				whileInView={{ opacity: 1 }}
				viewport={{ once: true }}
			>
				<div className="card" style={{ maxWidth: '300px', margin: 'auto' }}>
					<div
						className="card-image has-background-white"
						style={{ position: 'relative' }}
					>
						<figure className="image is-4by3">
							<img
								src={image}
								alt="Placeholder image"
								style={{
									position: 'absolute',
									right: 0,
									left: 0,
									bottom: 0,
									width: imageWith,
									height: imageHeight,
									marginLeft: 'auto',
									marginRight: 'auto',
									alignSelf: 'end',
								}}
							/>
						</figure>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							viewBox="0 0 1440 320"
							style={{ position: 'absolute', bottom: '-10px' }}
						>
							<path
								fill="#732a19"
								fill-opacity="1"
								d="M0,192L16,165.3C32,139,64,85,96,96C128,107,160,181,192,202.7C224,224,256,192,288,170.7C320,149,352,139,384,149.3C416,160,448,192,480,202.7C512,213,544,203,576,170.7C608,139,640,85,672,101.3C704,117,736,203,768,229.3C800,256,832,224,864,202.7C896,181,928,171,960,160C992,149,1024,139,1056,112C1088,85,1120,43,1152,53.3C1184,64,1216,128,1248,144C1280,160,1312,128,1344,138.7C1376,149,1408,203,1424,229.3L1440,256L1440,320L1424,320C1408,320,1376,320,1344,320C1312,320,1280,320,1248,320C1216,320,1184,320,1152,320C1120,320,1088,320,1056,320C1024,320,992,320,960,320C928,320,896,320,864,320C832,320,800,320,768,320C736,320,704,320,672,320C640,320,608,320,576,320C544,320,512,320,480,320C448,320,416,320,384,320C352,320,320,320,288,320C256,320,224,320,192,320C160,320,128,320,96,320C64,320,32,320,16,320L0,320Z"
							></path>
						</svg>
					</div>
					<div className="card-content has-background-coffee has-rounded-bottom">
						<p className="title is-4 has-text-light">{name}</p>
						<p className="subtitle is-6 has-text-light">{username}</p>
					</div>
				</div>
			</motion.div>
		</AnimatePresence>
	);
};

export default Card;
