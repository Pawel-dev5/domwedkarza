import styled, { css } from "styled-components";

// NAVIGATION
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
`;

export const StyledNavMenuWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: 1rem;
  padding: 0 3rem;
`;

export const StyledNavWrapper = styled.nav`
  position: -webkit-sticky; /* Safari */
  position: sticky;
  z-index: 999;
  top: 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  max-width: 1200px;
  height: 4rem;

  ${({ submenu }) =>
    submenu &&
    css`
      height: 2.5rem;
    `}
`;

// LAYOUT
export const StyledLayoutBackground = styled.div`
  background-image: url("https://db.finlux.com.pl/wp-content/uploads/2022/02/background-g29cbff064_1920.webp");
  background-repeat: no-repeat;
  background-size: cover;
  background-position-x: 30%;
`;

export const StyledLayout = styled.main`
  width: 100%;
  height: 100%;
  background-image: radial-gradient(
    circle at center,
    rgba(255, 255, 255, 0.9) 0,
    rgba(255, 255, 255, 0.9),
    rgba(255, 255, 255, 0.9) 100%
  ); ;
`;

// FOOTER
export const StyledFooterWrapper = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-around;
  width: 100%;

  > div {
    width: 33.33%;
  }
`;

export const StyledFooter = styled.footer`
  background-color: ${({ theme }) => theme.black};
  text-align: center;
`;

export const StyledIconWrapper = styled.div`
  height: 3rem;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: 1rem;
`;

export const StyledCopyright = styled.div`
  width: 100%;
  height: 2rem;
`;

export const StyledMenuWrapper = styled.div`
  background-color: ${({ theme }) => theme.black};
  display: flex;
  align-items: center;
  flex-direction: column;
`;

export const StyledSubMenu = styled.a`
  text-decoration: none;
  :hover {
    text-decoration: underline;
    color: ${({ theme }) => theme.darken({ amount: 0.2, color: theme.white })};
  }
`;
