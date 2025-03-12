import React, { useCallback, useEffect, useRef } from 'react';
import {
	EmblaCarouselType,
	EmblaEventType,
	EmblaOptionsType,
} from 'embla-carousel';
import useEmblaCarousel from 'embla-carousel-react';
import { NextButton, PrevButton, usePrevNextButtons } from './arrowButtons';
import { DotButton, useDotButton } from './dotButtons';
import { screen1, screen2, screen3, screen4 } from '../../assets';

const TWEEN_FACTOR_BASE = 0.2;

type PropType = {
	options?: EmblaOptionsType;
};

const EmblaCarousel: React.FC<PropType> = (props) => {
	const { options } = props;
	const [emblaRef, emblaApi] = useEmblaCarousel(options);
	const tweenFactor = useRef(0);
	const tweenNodes = useRef<HTMLElement[]>([]);

	useDotButton(emblaApi);

	const {
		prevBtnDisabled,
		nextBtnDisabled,
		onPrevButtonClick,
		onNextButtonClick,
	} = usePrevNextButtons(emblaApi);

	const setTweenNodes = useCallback((emblaApi: EmblaCarouselType): void => {
		tweenNodes.current = emblaApi.slideNodes().map((slideNode) => {
			return slideNode.querySelector('.embla__parallax__layer') as HTMLElement;
		});
	}, []);

	const setTweenFactor = useCallback((emblaApi: EmblaCarouselType) => {
		tweenFactor.current = TWEEN_FACTOR_BASE * emblaApi.scrollSnapList().length;
	}, []);

	const tweenParallax = useCallback(
		(emblaApi: EmblaCarouselType, eventName?: EmblaEventType) => {
			const engine = emblaApi.internalEngine();
			const scrollProgress = emblaApi.scrollProgress();
			const slidesInView = emblaApi.slidesInView();
			const isScrollEvent = eventName === 'scroll';

			emblaApi.scrollSnapList().forEach((scrollSnap, snapIndex) => {
				let diffToTarget = scrollSnap - scrollProgress;
				const slidesInSnap = engine.slideRegistry[snapIndex];

				slidesInSnap.forEach((slideIndex) => {
					if (isScrollEvent && !slidesInView.includes(slideIndex)) return;

					if (engine.options.loop) {
						engine.slideLooper.loopPoints.forEach((loopItem) => {
							const target = loopItem.target();

							if (slideIndex === loopItem.index && target !== 0) {
								const sign = Math.sign(target);

								if (sign === -1) {
									diffToTarget = scrollSnap - (1 + scrollProgress);
								}
								if (sign === 1) {
									diffToTarget = scrollSnap + (1 - scrollProgress);
								}
							}
						});
					}

					const translate = diffToTarget * (-1 * tweenFactor.current) * 100;
					const tweenNode = tweenNodes.current[slideIndex];
					tweenNode.style.transform = `translateX(${translate}%)`;
				});
			});
		},
		[]
	);

	useEffect(() => {
		if (!emblaApi) return;

		setTweenNodes(emblaApi);
		setTweenFactor(emblaApi);
		tweenParallax(emblaApi);

		emblaApi
			.on('reInit', setTweenNodes)
			.on('reInit', setTweenFactor)
			.on('reInit', tweenParallax)
			.on('scroll', tweenParallax)
			.on('slideFocus', tweenParallax);
	}, [emblaApi, tweenParallax]);

	return (
		<div className="embla">
			<div className="embla__viewport" ref={emblaRef}>
				<div className="embla__container">
					<div className="embla__slide" key="1">
						<div className="embla__parallax">
                            <h3 className='subtitle has-text-dark has-text-centered'>Botxy.app</h3>
							<div className="embla__parallax__layer">
								<img
									className="embla__slide__img embla__parallax__img"
									src={screen1}
									alt="coffeerecoded_projects"
								/>
							</div>
						</div>
					</div>
					<div className="embla__slide" key="2">
                        <h3 className='subtitle has-text-dark has-text-centered'>natys.com</h3>
						<div className="embla__parallax">
							<div className="embla__parallax__layer">
								<img
									className="embla__slide__img embla__parallax__img"
									src={screen2}
									alt="coffeerecoded_projects"
								/>
							</div>
						</div>
					</div>
                    <div className="embla__slide" key="3">
						<div className="embla__parallax">
                            <h3 className='subtitle has-text-dark has-text-centered'>recorvet.com</h3>
							<div className="embla__parallax__layer">
								<img
									className="embla__slide__img embla__parallax__img"
									src={screen3}
									alt="coffeerecoded_projects"
								/>
							</div>
						</div>
					</div>
                    <div className="embla__slide" key="4">
						<div className="embla__parallax">
                        <h3 className='subtitle has-text-dark has-text-centered'>bymsport.com</h3>
							<div className="embla__parallax__layer">
								<img
									className="embla__slide__img embla__parallax__img"
									src={screen4}
									alt="coffeerecoded_projects"
								/>
							</div>
						</div>
					</div>
				</div>
			</div>

			<div className="embla__controls">
				<div className="embla__buttons">
					<PrevButton onClick={onPrevButtonClick} disabled={prevBtnDisabled} />
					<NextButton onClick={onNextButtonClick} disabled={nextBtnDisabled} />
				</div>

				{/* <div className="embla__dots">
					{scrollSnaps.map((_, index) => (
						<DotButton
							key={index}
							onClick={() => onDotButtonClick(index)}
							className={'embla__dot'.concat(
								index === selectedIndex ? ' embla__dot--selected' : ''
							)}
						/>
					))}
				</div> */}
			</div>
		</div>
	);
};

export default EmblaCarousel;
