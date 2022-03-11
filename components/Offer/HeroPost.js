import Link from "next/link";
import Image from "next/image";

// STYLES
import { StyledWrapper, StyledText } from "../../components/StylesGeneral";
import {
  StyledHeroImgWrapper,
  StyledHeroWrapper,
  StyledHeroSection,
} from "./Styles";

const HeroPost = ({ title, featuredImage, excerpt, slug }) => (
  <Link href={`/oferta/${slug}`} passHref>
    <StyledHeroSection>
      <StyledHeroImgWrapper>
        <Image
          width={730}
          height={360}
          alt={title}
          src={featuredImage?.node?.sourceUrl}
          layout="fill"
          objectFit="cover"
        />
      </StyledHeroImgWrapper>

      <StyledWrapper between hero>
        <StyledHeroWrapper column>
          <StyledText h1 bold black pointer>
            {title}
          </StyledText>
        </StyledHeroWrapper>

        <StyledHeroWrapper dangerouslySetInnerHTML={{ __html: excerpt }} />
      </StyledWrapper>
    </StyledHeroSection>
  </Link>
);

export default HeroPost;
