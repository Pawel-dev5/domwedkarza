import styled from "styled-components";

export const StyledSecondWrapper = styled.div`
  width: 100%;
  height: 700px;

  @media (min-width: ${({ theme }) => theme.breakpoints.lg}) {
    height: 500px;
  }

  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  text-align: center;
`;
