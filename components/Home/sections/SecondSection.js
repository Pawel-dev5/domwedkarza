// STYLES
import { StyledSecondWrapper } from "./Style";
import { StyledText, StyledButton } from "../../StylesGeneral";

const SecondSection = ({ data }) => {
  console.log(data);
  return (
    <StyledSecondWrapper>
      <StyledText h3 black width="80%" lh="1.9rem">
        {data?.naglowek}
      </StyledText>

      <StyledButton type="button">{data?.przycisk}</StyledButton>
    </StyledSecondWrapper>
  );
};

export default SecondSection;
