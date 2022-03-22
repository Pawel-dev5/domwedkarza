import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import Image from "next/image";
import logo from "../../public/logoDW.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookSquare } from "@fortawesome/free-brands-svg-icons";

// COMPONENTS
import Burger from "../items/Burger";

// STYLES
import {
  StyledLogoWrapper,
  StyledSubMenu,
  StyledButton,
} from "../StylesGeneral";
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
} from "./Styles";

const Navigation = ({ menuItems, subMenuItems }) => {
  const router = useRouter();

  return (
    <StyledMenuWrapper>
      <StyledNavWrapper submenu>
        <div>
          {subMenuItems?.slice(0, -1).map((item) => (
            <>
              <StyledSubMenu
                href={`tel:${item?.node?.label}`}
                key={item?.node?.id}
              >
                <StyledNavText submenu key={item?.node?.id}>
                  {item?.node?.label}
                </StyledNavText>
              </StyledSubMenu>
            </>
          ))}

          {subMenuItems?.slice(2).map((item) => (
            <>
              <StyledSubMenu
                href={`mailto:${item?.node?.label}`}
                key={item?.node?.id}
              >
                <StyledNavText submenu key={item?.node?.id}>
                  {item?.node?.label}
                </StyledNavText>
              </StyledSubMenu>
            </>
          ))}
        </div>

        <Link
          href="https://www.facebook.com/profile.php?id=100057231978583"
          passHref
        >
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

const NavigationMobile = ({ menuItems, subMenuItems, children }) => {
  const router = useRouter();
  const [asideMenu, setAsideMenu] = useState(false);

  return (
    <StyledMobileNavWrapper>
      <StyledLayout>{children}</StyledLayout>

      <StyledMobileMenuWrapper>
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

        {/* <StyledNavMenuWrapper> */}
        <StyledBurgerWrapper asideMenu={asideMenu}>
          <StyledButton
            burger
            type="button"
            onClick={() => setAsideMenu(!asideMenu)}
          >
            <Burger />
          </StyledButton>
        </StyledBurgerWrapper>
        {/* </StyledNavMenuWrapper> */}
      </StyledMobileMenuWrapper>

      <StyledMobileMenu
        asideMenu={asideMenu}
        onClick={() => setAsideMenu(!asideMenu)}
      >
        <StyledMobileBodyWrapper>
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

            <Link
              href="https://www.facebook.com/profile.php?id=100057231978583"
              passHref
            >
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
