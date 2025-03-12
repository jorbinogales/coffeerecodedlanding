import React from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import { motion, AnimatePresence } from 'framer-motion';
import { Carousel } from '../../components/carousel';

export default function TeamComponent() {
	const [emblaRef] = useEmblaCarousel();
	return (
		<AnimatePresence>
			<motion.div
				initial={{ opacity: 0 }}
				whileInView={{ opacity: 1 }}
				viewport={{ once: true }}
			>
				<div
					className="container"
					style={{ maxWidth: '1000px', paddingTop: 50, paddingBottom: 100 }}
				>
					<div className="container has-text-centered">
						<h1 className="title has-text-dark">Nuestro Trabajo</h1>
						<h2 className="subtitle has-text-dark">
							Conoce nuestros casos de éxitos
						</h2>
					</div>
					<div className="columns is-multiline">
						<Carousel />
					</div>
				</div>
			</motion.div>
		</AnimatePresence>
	);
}
