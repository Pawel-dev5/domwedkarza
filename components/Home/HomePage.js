import Image from "next/image";
import Carousel from "react-multi-carousel";

// STYLES
import { StyledCarouselWrapper } from "./Styles";

const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 5,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

const HomePage = ({ mainGallery }) => {
  const gallery = { ...mainGallery?.galeriaGlowna };

  return (
    <div>
      <StyledCarouselWrapper>
        <Carousel
          responsive={responsive}
          ssr
          infinite={false}
          swipeable={true}
          itemClass="image-item"
          showDots={true}
          containerClass="container-with-dots"
        >
          <Image
            src={gallery?.zdjecie1?.sourceUrl}
            alt={gallery?.zdjecie1?.altText}
            style={{ width: "100%", height: "100%" }}
          />

          <Image
            src={gallery?.zdjecie2?.sourceUrl}
            alt={gallery?.zdjecie2?.altText}
            style={{ width: "100%", height: "100%" }}
          />

          <Image
            src={gallery?.zdjecie3?.sourceUrl}
            alt={gallery?.zdjecie3?.altText}
            style={{ width: "100%", height: "100%" }}
          />

          <Image
            src={gallery?.zdjecie4?.sourceUrl}
            alt={gallery?.zdjecie4?.altText}
            style={{ width: "100%", height: "100%" }}
          />

          <Image
            src={gallery?.zdjecie5?.sourceUrl}
            alt={gallery?.zdjecie5?.altText}
            style={{ width: "100%", height: "100%" }}
          />
        </Carousel>
      </StyledCarouselWrapper>
      <p>
        Image Component
        <br />
        as a Background
      </p>
    </div>
  );
};

export default HomePage;
