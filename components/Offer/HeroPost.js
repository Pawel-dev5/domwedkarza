import Link from "next/link";
import Image from "next/image";
import Carousel from "react-multi-carousel";

// STYLES
import { StyledHeroWrapper, StyledSliderWrapper } from "./Styles";

const responsive = {
  all: {
    breakpoint: { max: 4000, min: 0 },
    items: 1,
  },
};

const HeroPost = ({ sliderOffer, excerpt, slug }) => {
  let sliderGallery = [];

  if (sliderOffer) {
    sliderGallery = Object.values(sliderOffer);
  }

  return (
    <Link href={`/oferta/${slug}`} passHref>
      <StyledHeroWrapper>
        <StyledSliderWrapper>
          <Carousel
            containerClass="container-with-dots"
            itemClass="image-item"
            responsive={responsive}
            ssr
            infinite={false}
            showDots={false}
            arrows={false}
            swipeable={true}
            autoPlay={true}
            autoPlaySpeed={5000}
            customTransition="all .5"
            transitionDuration={1000}
          >
            {sliderGallery?.map((image) => (
              <Image
                key={image?.id}
                src={image?.sourceUrl}
                alt={image?.altText}
              />
            ))}
          </Carousel>
        </StyledSliderWrapper>

        <StyledHeroWrapper
          customWidth="50%"
          dangerouslySetInnerHTML={{ __html: excerpt }}
        />
      </StyledHeroWrapper>
    </Link>
  );
};

export default HeroPost;
