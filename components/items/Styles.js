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
      color: ${({ theme }) => theme.black};

      * {
        color: ${({ theme }) => theme.black};
      }
    `}
`;

export const StyledAdressWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 2rem;
  span {
    width: 70%;
  }
`;

export const StyledNavText = styled.a`
  text-decoration: none;
  color: ${({ theme }) => theme.white};
  font-size: 1rem;

  :hover,
  :active,
  :focus {
    text-decoration: underline;
    color: ${({ theme }) => theme.darken({ amount: 0.2, color: theme.white })};
  }

  ${({ active }) =>
    active &&
    css`
      font-weight: ${({ theme }) => theme.semiBold};
      text-decoration: underline;
      color: ${({ theme }) =>
        theme.darken({ amount: 0.2, color: theme.white })};
    `}

  ${({ submenu }) =>
    submenu &&
    css`
      padding: 0 0.8rem;
      font-size: 0.85rem;
    `}
  
  ${({ customPadding }) =>
    customPadding &&
    css`
      padding: ${customPadding};
    `}
`;
