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
export const StyledLayout = styled.main`
  width: 100%;
  height: 100%;
  min-height: 800px;
  background: ${({ theme }) => theme.white};
`;

// FOOTER
export const StyledFooterWrapper = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-around;
  width: 100%;
  max-width: 1220px;
  flex-direction: column;
  padding: 1rem 2rem;

  @media (min-width: ${({ theme }) => theme.breakpoints.lg}) {
    padding: 6rem 0;
    flex-direction: row;
  }

  > div {
    width: 100%;
    margin: 1.5rem 0px;
    @media (min-width: ${({ theme }) => theme.breakpoints.lg}) {
      width: 20%;
      margin: 0;
    }
  }
`;

export const StyledFooter = styled.footer`
  background-color: ${({ theme }) => theme.black};
  display: flex;
  align-items: center;
  flex-direction: column;
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
  position: -webkit-fixed; /* Safari */
  /* position: sticky; */
  position: fixed;
  width: 100%;
  z-index: 999;
  top: 0;
  background-color: ${({ theme }) => theme.black};
  display: flex;
  align-items: center;
  flex-direction: column;

  @media (max-width: ${({ theme }) => theme.breakpoints.lg}) {
    display: none;
  }
`;

export const StyledSubFooter = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: column;

  border-top: 1px solid rgba(255, 255, 255, 0.1);
  width: 100%;
  min-height: 2.8rem;
  padding: 2rem;

  @media (min-width: ${({ theme }) => theme.breakpoints.lg}) {
    flex-direction: row;
    align-items: flex-start;
    padding: 1.5rem 10rem;
  }
`;

export const StyledIframe = styled.iframe`
  border: none;
  width: 100%;
  height: 300px;

  @media (min-width: ${({ theme }) => theme.breakpoints.lg}) {
    width: 55%;
  }
`;

export const StyledLayoutHeader = styled.div`
  ${({ src }) =>
    src &&
    css`
      margin-top: 100px;
      min-height: 350px;
      width: 100%;
      background-image: url(${src});
      background-repeat: no-repeat;
      background-size: cover;
      background-position-x: center;
      background-position-y: center;
    `}
`;

export const StyledLayoutHeaderText = styled.div`
  width: 60%;
  border-bottom: 1px solid gray;
  height: 100px;
  text-align: center;
  margin: auto;
  display: flex;
  align-items: center;
  margin-bottom: 3rem;
  margin-top: 1rem;
  justify-content: center;
  flex-direction: column;

  @media (min-width: ${({ theme }) => theme.breakpoints.lg}) {
    width: 30%;
  }
`;
