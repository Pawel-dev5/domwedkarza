import Image from "next/image";
import Link from "next/link";
import logo from "../../public/logoDW.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAt, faHome, faPhone } from "@fortawesome/free-solid-svg-icons";
import { faFacebookSquare } from "@fortawesome/free-brands-svg-icons";

// COMPONENTS
import { Container } from "../elements";

// STYLES
import {
  StyledFooterWrapper,
  StyledFooter,
  StyledSubMenu,
  StyledFooterAdres,
  StyledSubFooter,
  StyledTelWrapper,
} from "./Styles";
import { StyledLogoWrapper, StyledText } from "../StylesGeneral";

const Footer = ({ footerItems, subMenuItems }) => {
  const currentDate = new Date();
  let year = currentDate.getFullYear();

  return (
    <Container>
      <StyledFooter>
        <StyledFooterWrapper>
          <StyledLogoWrapper footer>
            <Link href="/" passHref>
              <Image
                alt="Nad Zalewem"
                src={logo}
                layout="fill"
                objectFit="cover"
              />
            </Link>
          </StyledLogoWrapper>

          <StyledFooterAdres>
            <div>
              <FontAwesomeIcon
                icon={faHome}
                className="fa-xl"
                style={{ color: "#fff" }}
              />
              <StyledText h5>Adres</StyledText>
            </div>

            <StyledText h5 footerAdres>
              {footerItems[0]?.node?.label}
            </StyledText>

            <StyledText h5 footerAdres>
              NIP: {footerItems[1]?.node?.label}
            </StyledText>
          </StyledFooterAdres>

          <StyledFooterAdres>
            <div>
              <FontAwesomeIcon
                icon={faPhone}
                className="fa-xl"
                style={{ color: "#fff" }}
              />

              <StyledText h5>Zadzwoń</StyledText>
            </div>

            <StyledTelWrapper>
              {subMenuItems?.map((item) => (
                <StyledSubMenu
                  href={`${
                    item?.node?.path === "http://email" ? "mailto:" : "tel:"
                  }${item?.node?.label}`}
                  key={item?.node?.id}
                >
                  <StyledText h5 submenu key={item?.node?.id}>
                    {item?.node?.label}
                  </StyledText>
                </StyledSubMenu>
              ))}
            </StyledTelWrapper>
          </StyledFooterAdres>
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
