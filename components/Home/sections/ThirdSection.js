import Image from "next/image";

// STYLES
import { StyledThirdSection } from "./Style";

const ThirdSection = ({ data }) => {
  const gallery = Object.values(data);

  return (
    <>
      <StyledThirdSection>
        {gallery?.map((image) => (
          <div key={image?.id} aria-hidden="true">
            <Image src={image?.sourceUrl} alt={image?.altText} />
          </div>
        ))}
      </StyledThirdSection>
    </>
  );
};

export default ThirdSection;
