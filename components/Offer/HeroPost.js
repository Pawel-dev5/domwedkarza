import Image from "next/image";
import Carousel from "react-multi-carousel";
import Link from "next/link";

// STYLES
import {
  StyledHeroWrapper,
  StyledSliderWrapper,
  StylesMenuWrapper,
  StyledTextWrapper,
} from "./Styles";
import { StyledText } from "../StylesGeneral";

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
              {sliderGallery?.map((image) => (
                <Image
                  key={image?.id}
                  src={image?.sourceUrl}
                  alt={image?.altText}
                  style={{ objectFit: "cover" }}
                  objectFit="cover"
                />
              ))}
            </Carousel>
          </StyledSliderWrapper>
        )}

        <StyledTextWrapper
          customWidth
          dangerouslySetInnerHTML={{ __html: excerpt }}
        />
      </StyledHeroWrapper>

      <StyledHeroWrapper menu>
        {menuGallery && (
          <StylesMenuWrapper>
            {menuGallery?.map((item) => (
              <Image
                key={item?.altText}
                width={200}
                height={300}
                alt={item?.altText}
                src={item?.sourceUrl}
                style={{ objectFit: "cover" }}
                objectFit="cover"
              />
            ))}
          </StylesMenuWrapper>
        )}

        <StyledHeroWrapper column>
          {offerMenu?.title && offerMenu?.pdf?.sourceUrl && (
            <Link
              href={offerMenu?.pdf?.sourceUrl}
              passHref
              target="_blank"
              rel="noreferrer"
            >
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
