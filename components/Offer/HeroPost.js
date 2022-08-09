import Image from 'next/image';
import Carousel from 'react-multi-carousel';
import Link from 'next/link';

// STYLES
import { StyledHeroWrapper, StyledSliderWrapper, StylesMenuWrapper, StyledTextWrapper } from './Styles';
import { StyledText } from '../StylesGeneral';

// HELPERS
import tokenMaker from '../../helpers/TokenMaker';

const responsive = {
	all: {
		breakpoint: { max: 4000, min: 0 },
		items: 1,
	},
};

const HeroPost = ({ sliderOffer, excerpt, offerMenu }) => {
	let sliderGallery = [];
	if (sliderOffer) {
		sliderGallery = Object.values(sliderOffer);
	}

	let menuGallery = [];
	if (offerMenu) {
		menuGallery = Object.values(offerMenu?.menu);
	}

	return (
		<>
			<StyledHeroWrapper>
				{sliderGallery && (
					<StyledSliderWrapper>
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
							autoPlaySpeed={10000}
							customTransition="all .5"
							transitionDuration={1000}
						>
							{sliderGallery?.map((image) => {
								if (!image?.sourceUrl) return null;
								return (
									<Image key={tokenMaker(5)} src={image?.sourceUrl} alt={image?.altText} layout="fill" />
								);
							})}
						</Carousel>
					</StyledSliderWrapper>
				)}

				<StyledTextWrapper customWidth dangerouslySetInnerHTML={{ __html: excerpt }} />
			</StyledHeroWrapper>

			<StyledHeroWrapper menu>
				{menuGallery && (
					<StylesMenuWrapper>
						{menuGallery?.map((item) => (
							<Image
								key={tokenMaker(5)}
								width="256px"
								height="331px"
								alt={item?.altText}
								src={item?.sourceUrl}
							/>
						))}
					</StylesMenuWrapper>
				)}

				<StyledHeroWrapper column>
					{offerMenu?.title && offerMenu?.pdf?.sourceUrl && (
						<Link href={offerMenu?.pdf?.sourceUrl} passHref target="_blank" rel="noreferrer">
							<StyledText h2 black hover>
								{offerMenu?.title}
							</StyledText>
						</Link>
					)}
				</StyledHeroWrapper>
			</StyledHeroWrapper>
		</>
	);
};

export default HeroPost;
