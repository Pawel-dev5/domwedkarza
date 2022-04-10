import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import Image from "next/image";
import logo from "../../public/logoDW.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookSquare } from "@fortawesome/free-brands-svg-icons";

// COMPONENTS
import Burger from "../items/Burger";
import SubMenu from "../items/submenu";

// STYLES
import { StyledLogoWrapper, StyledButton } from "../StylesGeneral";
import {
  StyledNavWrapper,
  StyledNavMenuWrapper,
  StyledNavText,
  StyledMenuWrapper,
  StyledMobileMenuWrapper,
  StyledMobileMenu,
  StyledMobileNavWrapper,
  StyledLayout,
  StyledMobileBodyWrapper,
  StyledBurgerWrapper,
  StyledSubMenuWrapper,
} from "./Styles";

const Navigation = ({ menuItems, subMenuItems, hideSubMenu }) => {
  const router = useRouter();

  return (
    <StyledMenuWrapper>
      <StyledNavWrapper submenu hideSubMenu={hideSubMenu}>
        <StyledSubMenuWrapper>
          {subMenuItems && <SubMenu subMenuItems={subMenuItems} />}

          <Link href="https://www.facebook.com/" passHref target="_blank">
            <FontAwesomeIcon
              icon={faFacebookSquare}
              className="fa-xl"
              style={{ color: "#fff" }}
            />
          </Link>
        </StyledSubMenuWrapper>
      </StyledNavWrapper>

      <StyledNavWrapper>
        {logo && (
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
        )}

        {menuItems && (
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
        )}
      </StyledNavWrapper>
    </StyledMenuWrapper>
  );
};

const NavigationMobile = ({ menuItems, subMenuItems, children }) => {
  const router = useRouter();
  const [asideMenu, setAsideMenu] = useState(false);

  return (
    <StyledMobileNavWrapper>
      {children && <StyledLayout>{children}</StyledLayout>}

      <StyledMobileMenuWrapper>
        {logo && (
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
        )}

        <StyledBurgerWrapper asideMenu={asideMenu}>
          <StyledButton
            burger
            type="button"
            onClick={() => setAsideMenu(!asideMenu)}
          >
            <Burger />
          </StyledButton>
        </StyledBurgerWrapper>
      </StyledMobileMenuWrapper>

      <StyledMobileMenu
        asideMenu={asideMenu}
        onClick={() => setAsideMenu(!asideMenu)}
      >
        <StyledMobileBodyWrapper>
          {menuItems && (
            <>
              {menuItems?.map((item) => (
                <Link href={item?.node?.path} passHref key={item?.node?.id}>
                  <StyledNavText
                    customPadding="0.5rem"
                    active={router?.pathname === item?.node?.path ?? true}
                  >
                    {item?.node?.label}
                  </StyledNavText>
                </Link>
              ))}
            </>
          )}

          <StyledNavWrapper submenu>
            {subMenuItems && <SubMenu subMenuItems={subMenuItems} />}

            <Link href="https://www.facebook.com/" passHref>
              <FontAwesomeIcon
                icon={faFacebookSquare}
                className="fa-xl"
                style={{ color: "#fff" }}
              />
            </Link>
          </StyledNavWrapper>
        </StyledMobileBodyWrapper>
      </StyledMobileMenu>
    </StyledMobileNavWrapper>
  );
};

Navigation.Mobile = NavigationMobile;
export default Navigation;
