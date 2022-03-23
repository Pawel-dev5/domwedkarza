import Head from "next/head";
import { COMPANY_NAME } from "../../lib/constants";
import React, { useState, useEffect } from "react";

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
}) => {
  const [scrollDir, setScrollDir] = useState("START");

  useEffect(() => {
    const threshold = 0;
    let lastScrollY = window.pageYOffset;
    let ticking = false;

    const updateScrollDir = () => {
      const scrollY = window.pageYOffset;

      if (Math.abs(scrollY - lastScrollY) < threshold) {
        ticking = false;
        return;
      }
      setScrollDir(scrollY > lastScrollY ? "DOWN" : "UP");
      lastScrollY = scrollY > 0 ? scrollY : 0;
      ticking = false;

      if (scrollY === 0) {
        setScrollDir("START");
      }
    };

    const onScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(updateScrollDir);
        ticking = true;
      }
    };

    window.addEventListener("scroll", onScroll);

    console.log(scrollDir);

    return () => window.removeEventListener("scroll", onScroll);
  }, [scrollDir]);

  return (
    <>
      <Head>
        <title>
          {COMPANY_NAME} {slug ?? ""}
        </title>

        <meta name="description" content={`${COMPANY_NAME}. ${slug ?? ""}`} />
        <Meta slug={slug} />
      </Head>

      <StyledLayout>
        <Navigation
          menuItems={menuItems}
          subMenuItems={subMenuItems}
          hideSubMenu={scrollDir === "DOWN" ?? true}
        />

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
    </>
  );
};

export default Layout;
