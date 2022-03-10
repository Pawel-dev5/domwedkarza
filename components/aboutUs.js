// STYLES
import {
  StyledAboutWrapper,
  StyledSectionWrapper,
  StyledListWrapper,
  StyledImageWrapper,
} from "./Styles";
import { StyledText } from "./StylesGeneral";
import Image from "next/image";

const AboutUs = ({ aboutUsData }) => (
  <StyledAboutWrapper>
    <StyledText h1 black textAlign="center">
      {aboutUsData?.oNas?.header1}
    </StyledText>

    <br />

    <StyledSectionWrapper>
      <StyledListWrapper>
        <StyledText black>{aboutUsData?.oNas?.text1}</StyledText>
      </StyledListWrapper>

      <StyledImageWrapper>
        <Image
          width={600}
          height={500}
          alt="alt"
          src="https://db.finlux.com.pl/wp-content/uploads/2022/03/1-1.jpeg"
          layout="fill"
          objectFit="cover"
        />
      </StyledImageWrapper>
    </StyledSectionWrapper>

    <br />

    <StyledText black>{aboutUsData?.oNas?.text2}</StyledText>

    <br />

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
          alt="alt"
          src="https://db.finlux.com.pl/wp-content/uploads/2022/03/1-1.jpeg"
          layout="fill"
          objectFit="cover"
        />
      </StyledImageWrapper>
    </StyledSectionWrapper>

    <br />

    <StyledText black>{aboutUsData?.oNas?.text3}</StyledText>

    <br />

    <StyledText h1 black textAlign="center">
      {aboutUsData?.oNas?.header2}
    </StyledText>
  </StyledAboutWrapper>
);

export default AboutUs;
