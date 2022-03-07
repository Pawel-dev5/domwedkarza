import Image from "next/image";
import Link from "next/link";
import logo from "../../public/logoDW.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAt } from "@fortawesome/free-solid-svg-icons";
import { faFacebookSquare } from "@fortawesome/free-brands-svg-icons";

// COMPONENTS
import { Container } from "../elements";

// STYLES
import { StyledFooterWrapper, StyledFooter, StyledIconWrapper } from "./Styles";
import { StyledLogoWrapper, StyledText } from "../StylesGeneral";

const Footer = () => {
  const currentDate = new Date();
  let year = currentDate.getFullYear();
  return (
    <Container>
      <StyledFooter>
        <StyledFooterWrapper>
          <div>
            <StyledLogoWrapper>
              <Link href="/" passHref>
                <Image
                  alt="Nad Zalewem"
                  src={logo}
                  layout="fill"
                  objectFit="cover"
                />
              </Link>
            </StyledLogoWrapper>
          </div>

          <div>
            <StyledText white>
              al.Jerozolimskie 200,
              <br />
              02-486 Warszawa
            </StyledText>
          </div>

          <StyledIconWrapper>
            <Link href="mailto:joanna.oblekowska@finlux.com.pl" passHref>
              <FontAwesomeIcon icon={faAt} className="fa-xl" />
            </Link>
            <Link
              href="https://www.facebook.com/FinluxBiuroRachunkowe"
              passHref
            >
              <FontAwesomeIcon icon={faFacebookSquare} className="fa-xl" />
            </Link>
          </StyledIconWrapper>
        </StyledFooterWrapper>

        <br />

        <StyledText center h6 grey>
          Copyright © {year} and realization Paweł Nowecki. All rights reserved.
        </StyledText>
      </StyledFooter>
    </Container>
  );
};
export default Footer;
