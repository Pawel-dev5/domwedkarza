import Head from "next/head";
import { COMPANY_NAME } from "../../lib/constants";

// COMPONENTS
import Meta from "../meta";
import Navigation from "./navigation";
import Footer from "./footer";

// STYLES
import { StyledLayoutBackground, StyledLayout } from "./Styles";

const Layout = ({ children, slug, menuItems, subMenuItems }) => (
  <>
    <Head>
      <title>
        {COMPANY_NAME} {slug ?? ""}
      </title>
      <meta name="description" content={`${COMPANY_NAME}. ${slug ?? ""}`} />
      <Meta slug={slug} />
    </Head>
    <Navigation menuItems={menuItems} subMenuItems={subMenuItems} />

    <StyledLayoutBackground>
      <StyledLayout>{children}</StyledLayout>
    </StyledLayoutBackground>

    <Footer />
  </>
);

export default Layout;
