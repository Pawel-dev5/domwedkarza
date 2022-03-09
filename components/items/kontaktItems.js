import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome, faPhone } from "@fortawesome/free-solid-svg-icons";

// STYLES
import {
  StyledFooterAdres,
  StyledTelWrapper,
  StyledContact,
  StyledAdressWrapper,
} from "./Styles";
import { StyledText, StyledSubMenu } from "../StylesGeneral";

const StyledIcon = styled(FontAwesomeIcon)`
  font-size: 1.3rem;
  margin-left: 0.5rem;
`;

const kontaktItems = ({ footerItems, subMenuItems, color }) => (
  <StyledContact color={color}>
    {footerItems && subMenuItems && (
      <>
        <StyledFooterAdres>
          <div>
            <StyledIcon icon={faHome} className="fa-xl" />
            <StyledText h5>Adres</StyledText>
          </div>

          <StyledAdressWrapper>
            <StyledText h5>{footerItems[0]?.node?.label}</StyledText>
            <StyledText h5>NIP: {footerItems[1]?.node?.label}</StyledText>
          </StyledAdressWrapper>
        </StyledFooterAdres>

        <StyledFooterAdres>
          <div>
            <StyledIcon icon={faPhone} className="fa-xl" />

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
      </>
    )}
  </StyledContact>
);

export default kontaktItems;
