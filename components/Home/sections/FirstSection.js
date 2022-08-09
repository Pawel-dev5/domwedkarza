import Image from 'next/image';
import Carousel from 'react-multi-carousel';
import logo from '../../../public/logoDW.png';

// STYLES
import { StyledText, StyledLogoWrapper } from '../../StylesGeneral';
import { StyledCarouselWrapper, StyledMainOverlay, StyledOverlay, StyledFirstSectionWrapper } from '../Styles';

const responsive = {
	all: {
		breakpoint: { max: 4000, min: 0 },
		items: 1,
	},
};

const FirstSection = ({ data, naglowek, naglowek2 }) => {
	let gallery = [];
	if (data) {
		gallery = Object.values(data);
	}

	return (
		<StyledFirstSectionWrapper>
			{data && (
				<StyledCarouselWrapper>
					<Carousel
						containerClass="container-with-dots"
						itemClass="image-item"
						responsive={responsive}
						ssr
						infinite={true}
						showDots={false}
						arrows={false}
						swipeable={true}
						autoPlay={true}
						autoPlaySpeed={2500}
						customTransition="all .5"
						transitionDuration={1000}
					>
						{gallery?.map((image) => (
							<Image key={image?.id} src={image?.sourceUrl} alt={image?.altText} layout="fill" />
						))}
					</Carousel>
				</StyledCarouselWrapper>
			)}

			<StyledMainOverlay>
				<StyledOverlay />

				<StyledLogoWrapper gallery>
					<Image alt="Nad Zalewem" src={logo} layout="fill" objectFit="cover" />
				</StyledLogoWrapper>

				{naglowek && (
					<StyledText h1 main>
						{naglowek}
					</StyledText>
				)}

				{naglowek2 && (
					<StyledText h2 main>
						{naglowek2}
					</StyledText>
				)}
			</StyledMainOverlay>
		</StyledFirstSectionWrapper>
	);
};
export default FirstSection;
