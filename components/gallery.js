import Image from "next/image";

// STYLES
import {} from "./Styles";

const Gallery = ({ data }) => {
  let firstGallery = [];
  let secondGallery = [];
  let thirdGallery = [];

  if (data) {
    firstGallery = Object.values(data?.imprezyOkolicznoCiowe);
    secondGallery = Object.values(data?.okolica);
    thirdGallery = Object.values(data?.przykAdowaDekoracjaSaliOrazStolow);
  }

  return (
    <>
      <span>{data?.galleryHeader}</span>
      <span>{data?.galleryText}</span>

      <span>{data?.imprezyOkolicznoCiowe?.imprezyOkolicznoCioweHeader}</span>
      {firstGallery?.map((image) => (
        <Image
          key={image?.id}
          src={image?.sourceUrl}
          alt={image?.altText}
          width={300}
          height={300}
        />
      ))}

      <span>{data?.okolica?.okolicaHeader}</span>
      {secondGallery?.map((image) => (
        <Image
          key={image?.id}
          src={image?.sourceUrl}
          alt={image?.altText}
          width={300}
          height={300}
        />
      ))}

      <span>
        {
          data?.przykAdowaDekoracjaSaliOrazStolow
            ?.przykAdowaDekoracjaSaliOrazStolowHeader
        }
      </span>
      {thirdGallery?.map((image) => (
        <Image
          key={image?.id}
          src={image?.sourceUrl}
          alt={image?.altText}
          width={300}
          height={300}
        />
      ))}
    </>
  );
};

export default Gallery;
