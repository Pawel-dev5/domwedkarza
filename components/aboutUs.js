import Image from "next/image";
import { SRLWrapper } from "simple-react-lightbox";

// STYLES
import {
  StyledAboutWrapper,
  StyledSectionWrapper,
  StyledListWrapper,
  StyledImageWrapper,
} from "./Styles";
import { StyledText } from "./StylesGeneral";

const AboutUs = ({ aboutUsData }) => (
  <SRLWrapper>
    <StyledAboutWrapper>
      <StyledText h1 black textAlign="center">
        {aboutUsData?.oNas?.header1}
      </StyledText>

      <StyledSectionWrapper>
        <StyledListWrapper>
          <StyledText black>{aboutUsData?.oNas?.text1}</StyledText>
        </StyledListWrapper>

        <StyledImageWrapper>
          <Image
            width={600}
            height={500}
            alt={aboutUsData?.oNas?.zdjecie1?.altText}
            src={aboutUsData?.oNas?.zdjecie1?.sourceUrl}
            layout="fill"
            objectFit="cover"
          />
        </StyledImageWrapper>
      </StyledSectionWrapper>

      <StyledText black>{aboutUsData?.oNas?.text2}</StyledText>

      <StyledSectionWrapper>
        <StyledListWrapper>
          <StyledText h2 black>
            {aboutUsData?.oNas?.naglowekListy}
          </StyledText>
          <div dangerouslySetInnerHTML={{ __html: aboutUsData?.oNas?.lista }} />
        </StyledListWrapper>

        <StyledImageWrapper>
          <Image
            width={600}
            height={500}
            alt={aboutUsData?.oNas?.zdjecie2?.altText}
            src={aboutUsData?.oNas?.zdjecie2?.sourceUrl}
            layout="fill"
            objectFit="cover"
          />
        </StyledImageWrapper>
      </StyledSectionWrapper>

      <StyledText black>{aboutUsData?.oNas?.text3}</StyledText>

      <StyledText h1 black textAlign="center">
        {aboutUsData?.oNas?.header2}
      </StyledText>
    </StyledAboutWrapper>
  </SRLWrapper>
);

export default AboutUs;
