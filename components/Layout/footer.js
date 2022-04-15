import Link from "next/link";
import Image from "next/image";
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
  StyledImageWrapper,
} from "./Styles";
import { StyledText } from "../StylesGeneral";

const Footer = ({ footerItems, subMenuItems }) => {
  const currentDate = new Date();
  let year = currentDate.getFullYear();

  return (
    <Container>
      <StyledFooter>
        <StyledFooterWrapper>
          {footerItems && subMenuItems && (
            <KontaktItems
              subMenuItems={subMenuItems}
              footerItems={footerItems}
              color="white"
            />
          )}

          <StyledIframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d10241.729473778934!2d20.0513739!3d50.0781913!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x6544d5b2113f21d5!2sDom%20W%C4%99dkarza%20%7C%20Sala%20Weselna!5e0!3m2!1spl!2spl!4v1646849746358!5m2!1spl!2spl"
            allowFullScreen=""
            loading="lazy"
            title="mapa"
          />
        </StyledFooterWrapper>

        <StyledFooterWrapper>
          <StyledText h5 white>
            Informujemy, że nasza firma korzysta z&nbsp;subwencji finansowej, w
            {/* eslint-disable-next-line */}
            ramach rządowego programu "Tarcza Finansowa 2.0 Polskiego
            Funduszu&nbsp;
            {/* eslint-disable-next-line */}
            Rozwoju dla Mikro, Małych i Średnich Firm", udzielonej przez przez
            PFR SA.
          </StyledText>

          <StyledImageWrapper>
            <Image
              alt=" ys"
              src="https://db.restauracja-nadzalewem.pl/wp-content/uploads/2022/03/277112027_339491871473215_3428012668149106858_n.webp"
              layout="fixed"
              width={145}
              height={60}
              style={{ objectFit: "cover" }}
            />
          </StyledImageWrapper>
        </StyledFooterWrapper>

        <StyledSubFooter>
          <StyledText center h5 white>
            © {year} Wszelkie prawa zastrzeżone. Nad Zalewem Restauracja &
            Eventy. Made by Paweł Nowecki
          </StyledText>

          <Link
            href="https://www.facebook.com/Restauracja-Eventy-Nad-Zalewem-163812774261061"
            passHref
          >
            <FontAwesomeIcon icon={faFacebookSquare} className="fa-xl" />
          </Link>
        </StyledSubFooter>
      </StyledFooter>
    </Container>
  );
};
export default Footer;
