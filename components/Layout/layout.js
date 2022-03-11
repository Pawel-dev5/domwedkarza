import Head from "next/head";
import { COMPANY_NAME } from "../../lib/constants";

// COMPONENTS
import Meta from "../meta";
import Navigation from "./navigation";
import Footer from "./footer";

// STYLES
import {
  StyledLayout,
  StyledLayoutHeader,
  StyledLayoutHeaderText,
} from "./Styles";
import { StyledText } from "../StylesGeneral";

const Layout = ({
  children,
  slug,
  menuItems,
  subMenuItems,
  footerItems,
  headerImg,
  headerText,
  subHeaderText,
  setAsideMenu,
  asideMenu,
}) => (
  <div
    data-swipe-threshold="10"
    data-swipe-timeout="1000"
    data-swipe-ignore="false"
  >
    <Head>
      <title>
        {COMPANY_NAME} {slug ?? ""}
      </title>

      <meta name="description" content={`${COMPANY_NAME}. ${slug ?? ""}`} />
      <Meta slug={slug} />
    </Head>

    <StyledLayout>
      <Navigation menuItems={menuItems} subMenuItems={subMenuItems} />

      <Navigation.Mobile
        menuItems={menuItems}
        subMenuItems={subMenuItems}
        setAsideMenu={setAsideMenu}
        asideMenu={asideMenu}
      >
        {headerImg?.sourceUrl && (
          <StyledLayoutHeader src={headerImg?.sourceUrl} />
        )}

        {(subHeaderText || headerText) && (
          <StyledLayoutHeaderText>
            {headerText && (
              <StyledText h1 black>
                {headerText}
              </StyledText>
            )}

            {subHeaderText && (
              <StyledText h3 black>
                {subHeaderText}
              </StyledText>
            )}
          </StyledLayoutHeaderText>
        )}
        {children}
      </Navigation.Mobile>

      <Footer footerItems={footerItems} subMenuItems={subMenuItems} />
    </StyledLayout>
  </div>
);

export default Layout;
