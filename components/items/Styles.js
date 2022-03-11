import styled, { css } from "styled-components";

export const StyledCoverImg = styled.div`
  cursor: pointer;
  position: relative;
  width: 100%;
  height: 100%;
  min-height: 20rem;
  max-width: 30rem;
  ${({ theme }) => theme.shadow};

  @media (min-width: ${({ theme }) => theme.breakpoints.lg}) {
    min-width: 30rem;
  }

  :hover {
    transform: scale(1.01);
  }
`;

export const StyledFooterAdres = styled.div`
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  align-items: flex-start;
`;

export const StyledTelWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0;
  padding-bottom: 1rem;
  padding-top: 0.5rem;
  align-items: flex-start;
`;

export const StyledContact = styled.div`
  color: ${({ theme }) => theme.black};

  * {
    color: ${({ theme }) => theme.black};
  }

  ${({ color }) =>
    color === "white" &&
    css`
      color: ${({ theme }) => theme.white};

      * {
        color: ${({ theme }) => theme.white};
      }
    `}

  ${({ color }) =>
    color === "black" &&
    css`
      width: 50%;
      > div {
        width: 50%;
      }

      span {
        font-size: 2rem;
      }
    `}
`;

export const StyledAdressWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 2rem;
`;
