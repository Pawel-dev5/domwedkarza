// STYLES
import { StyledNavText } from "./Styles";
import { StyledSubMenu } from "../StylesGeneral";

const SubMenu = ({ subMenuItems }) => (
  <div>
    {subMenuItems?.slice(0, -1).map((item) => (
      <>
        <StyledSubMenu href={`tel:${item?.node?.label}`} key={item?.node?.id}>
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
);
export default SubMenu;
