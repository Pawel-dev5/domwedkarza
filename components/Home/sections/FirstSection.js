import Image from "next/image";
import Carousel from "react-multi-carousel";
import logo from "../../../public/logoDW.png";

// STYLES
import { StyledText, StyledLogoWrapper } from "../../StylesGeneral";
import {
  StyledCarouselWrapper,
  StyledMainOverlay,
  StyledOverlay,
} from "../Styles";

const responsive = {
  all: {
    breakpoint: { max: 4000, min: 0 },
    items: 1,
  },
};

const FirstSection = ({ data }) => {
  const gallery = Object.values(data);

  return (
    <div>
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
          <Image alt="Nad Zalewem" src={logo} layout="fill" objectFit="cover" />
        </StyledLogoWrapper>

        <StyledText h1 main>
          Organizacja przyjęć okolicznościowych
          <br />
          nad malowniczym Zalewem Nowohuckim
        </StyledText>
      </StyledMainOverlay>
    </div>
  );
};
export default FirstSection;
