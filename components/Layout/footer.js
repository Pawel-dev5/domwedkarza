import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookSquare } from "@fortawesome/free-brands-svg-icons";

// COMPONENTS
import { Container } from "../elements";
import { KontaktItems } from "../items";

// STYLES
import {
  StyledFooterWrapper,
  StyledFooter,
  StyledSubFooter,
  StyledIframe,
} from "./Styles";
import { StyledText } from "../StylesGeneral";

const Footer = ({ footerItems, subMenuItems }) => {
  const currentDate = new Date();
  let year = currentDate.getFullYear();

  return (
    <Container>
      <StyledFooter>
        <StyledFooterWrapper>
          <KontaktItems
            subMenuItems={subMenuItems}
            footerItems={footerItems}
            color="white"
          />

          <StyledIframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d10241.729473778934!2d20.0513739!3d50.0781913!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x6544d5b2113f21d5!2sDom%20W%C4%99dkarza%20%7C%20Sala%20Weselna!5e0!3m2!1spl!2spl!4v1646849746358!5m2!1spl!2spl"
            allowFullScreen=""
            loading="lazy"
            title="mapa"
          />
        </StyledFooterWrapper>

        <StyledSubFooter>
          <StyledText center h5 white>
            © {year} Wszelkie prawa zastrzeżone. Nad Stawem. Restauracja &
            Eventy. Made by Paweł Nowecki
          </StyledText>

          <Link href="https://www.facebook.com/" passHref>
            <FontAwesomeIcon
              icon={faFacebookSquare}
              className="fa-xl"
              style={{ color: "#fff" }}
            />
          </Link>
        </StyledSubFooter>
      </StyledFooter>
    </Container>
  );
};
export default Footer;
