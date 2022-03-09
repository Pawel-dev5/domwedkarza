import { KontaktItems } from "./items";
import styled from "styled-components";

// STYLES
import { StyledFormWrapper, StyledFormContainer } from "./Styles";

const Kontakt = ({ footerItems, subMenuItems }) => (
  <>
    <StyledFormContainer>
      <KontaktItems footerItems={footerItems} subMenuItems={subMenuItems} />
      <StyledFormWrapper>Miejsce na formularz</StyledFormWrapper>
    </StyledFormContainer>

    <iframe
      src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d10241.729473778934!2d20.0513739!3d50.0781913!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x6544d5b2113f21d5!2sDom%20W%C4%99dkarza%20%7C%20Sala%20Weselna!5e0!3m2!1spl!2spl!4v1646845227836!5m2!1spl!2spl"
      style={{ width: "100%", border: "none", height: "600px" }}
      allowFullScreen=""
      loading="lazy"
    />
  </>
);

export default Kontakt;
