import Image from "next/image";
import Carousel from "react-multi-carousel";
import logo from "../../../public/logoDW.png";

// STYLES
import { StyledText, StyledLogoWrapper } from "../../StylesGeneral";
import {
  StyledCarouselWrapper,
  StyledMainOverlay,
  StyledOverlay,
  StyledFirstSectionWrapper,
} from "../Styles";

const responsive = {
  all: {
    breakpoint: { max: 4000, min: 0 },
    items: 1,
  },
};

const FirstSection = ({ data, naglowek }) => {
  let gallery = [];
  if (data) {
    gallery = Object.values(data);
  }

  if (data && naglowek) {
    return (
      <StyledFirstSectionWrapper>
        <StyledCarouselWrapper>
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
            {gallery?.map((image) => (
              <Image
                key={image?.id}
                src={image?.sourceUrl}
                alt={image?.altText}
              />
            ))}
          </Carousel>
        </StyledCarouselWrapper>

        <StyledMainOverlay>
          <StyledOverlay />

          <StyledLogoWrapper gallery>
            <Image
              alt="Nad Zalewem"
              src={logo}
              layout="fill"
              objectFit="cover"
            />
          </StyledLogoWrapper>

          <StyledText h1 main>
            {naglowek}
          </StyledText>
        </StyledMainOverlay>
      </StyledFirstSectionWrapper>
    );
  } else return null;
};
export default FirstSection;
