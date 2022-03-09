import Link from "next/link";

// STYLES
import { StyledSecondWrapper } from "./Style";
import { StyledText, StyledButton } from "../../StylesGeneral";

const SecondSection = ({ data }) => {
  if (data) {
    return (
      <StyledSecondWrapper>
        <StyledText h3 black width="80%" lh="1.9rem">
          {data?.naglowek}
        </StyledText>

        <Link href={`/oferta`} passHref>
          <StyledButton type="button">{data?.przycisk}</StyledButton>
        </Link>
      </StyledSecondWrapper>
    );
  } else return null;
};

export default SecondSection;
