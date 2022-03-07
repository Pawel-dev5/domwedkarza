import Link from "next/link";
import { useRouter } from "next/router";
import Image from "next/image";
import logo from "../../public/logoDW.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookSquare } from "@fortawesome/free-brands-svg-icons";

// STYLES
import { StyledLogoWrapper } from "../../components/StylesGeneral";
import {
  StyledNavWrapper,
  StyledNavMenuWrapper,
  StyledNavText,
} from "./Styles";

const Navigation = () => {
  const router = useRouter();

  return (
    <StyledNavWrapper>
      <StyledNavMenuWrapper>
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
      </StyledNavMenuWrapper>

      <StyledNavMenuWrapper>
        <Link href="/" passHref>
          <StyledNavText active={router?.pathname === "/" ?? true}>
            Strona główna
          </StyledNavText>
        </Link>

        <Link href="/o-nas" passHref>
          <StyledNavText active={router?.pathname === "/o-nas" ?? true}>
            O nas
          </StyledNavText>
        </Link>

        <Link href="/oferta" passHref>
          <StyledNavText active={router?.pathname === "/oferta" ?? true}>
            Oferta
          </StyledNavText>
        </Link>

        <Link href="/galeria" passHref>
          <StyledNavText active={router?.pathname === "/galeria" ?? true}>
            Galeria
          </StyledNavText>
        </Link>

        <Link href="/Aktualności" passHref>
          <StyledNavText active={router?.pathname === "/Aktualności" ?? true}>
            Aktualności
          </StyledNavText>
        </Link>

        <Link href="/kontakt" passHref>
          <StyledNavText active={router?.pathname === "/kontakt" ?? true}>
            Kontakt
          </StyledNavText>
        </Link>

        <Link href="https://www.facebook.com/FinluxBiuroRachunkowe" passHref>
          <FontAwesomeIcon icon={faFacebookSquare} className="fa-xl" />
        </Link>
      </StyledNavMenuWrapper>
    </StyledNavWrapper>
  );
};

export default Navigation;
