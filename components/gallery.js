import Image from "next/image";

// STYLES
import { StylesGalleryGrid } from "./Styles";
import { StyledWrapper, StyledText } from "./StylesGeneral";

const Gallery = ({ data }) => {
  let firstGallery = [];
  let secondGallery = [];
  let thirdGallery = [];

  if (data) {
    firstGallery = Object.values(data?.imprezyOkolicznoCiowe).slice(0, -1);
    secondGallery = Object.values(data?.okolica).slice(0, -1);
    thirdGallery = Object.values(data?.przykAdowaDekoracjaSaliOrazStolow).slice(
      0,
      -1
    );
  }

  return (
    <>
      <StyledWrapper column>
        <StyledText h2 black>
          {data?.imprezyOkolicznoCiowe?.imprezyOkolicznoCioweHeader}
        </StyledText>

        <StylesGalleryGrid>
          {firstGallery?.map((image) => (
            <Image
              key={image?.id}
              src={image?.sourceUrl}
              alt={image?.altText}
              width={300}
              height={300}
              style={{ objectFit: "cover" }}
            />
          ))}
        </StylesGalleryGrid>
      </StyledWrapper>

      <StyledWrapper column>
        <StyledText h2 black>
          {data?.okolica?.okolicaHeader}
        </StyledText>

        <StylesGalleryGrid>
          {secondGallery?.map((image) => (
            <Image
              key={image?.id}
              src={image?.sourceUrl}
              alt={image?.altText}
              width={300}
              height={300}
              style={{ objectFit: "cover" }}
            />
          ))}
        </StylesGalleryGrid>
      </StyledWrapper>

      <StyledWrapper column>
        <StyledText h2 black>
          {
            data?.przykAdowaDekoracjaSaliOrazStolow
              ?.przykAdowaDekoracjaSaliOrazStolowHeader
          }
        </StyledText>

        <StylesGalleryGrid>
          {thirdGallery?.map((image) => (
            <Image
              key={image?.id}
              src={image?.sourceUrl}
              alt={image?.altText}
              width={300}
              height={300}
              style={{ objectFit: "cover" }}
            />
          ))}
        </StylesGalleryGrid>
      </StyledWrapper>
    </>
  );
};

export default Gallery;
