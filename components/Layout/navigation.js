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
  StyledMenuWrapper,
  StyledSubMenu,
} from "./Styles";

const Navigation = ({ menuItems, subMenuItems }) => {
  const router = useRouter();

  return (
    <StyledMenuWrapper>
      <StyledNavWrapper submenu>
        <div>
          {subMenuItems?.map((item) => (
            <StyledSubMenu
              href={`${
                item?.node?.path === "http://email" ? "mailto:" : "tel:"
              }${item?.node?.label}`}
              key={item?.node?.id}
            >
              <StyledNavText submenu key={item?.node?.id}>
                {item?.node?.label}
              </StyledNavText>
            </StyledSubMenu>
          ))}
        </div>

        <Link href="https://www.facebook.com/" passHref>
          <FontAwesomeIcon
            icon={faFacebookSquare}
            className="fa-xl"
            style={{ color: "#fff" }}
          />
        </Link>
      </StyledNavWrapper>

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
          {menuItems?.map((item) => (
            <Link href={item?.node?.path} passHref key={item?.node?.id}>
              <StyledNavText
                active={router?.pathname === item?.node?.path ?? true}
              >
                {item?.node?.label}
              </StyledNavText>
            </Link>
          ))}
        </StyledNavMenuWrapper>
      </StyledNavWrapper>
    </StyledMenuWrapper>
  );
};

export default Navigation;
