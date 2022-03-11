import styled, { css } from "styled-components";
import { StyledWrapper } from "../StylesGeneral";

// MORE STORIES
export const StyledMoreStoriesWrapper = styled.section`
  margin: 2rem auto;
  text-align: center;
  width: 100%;

  @media (min-width: ${({ theme }) => theme.breakpoints.lg}) {
    > div {
      display: flex;
      -webkit-box-align: center;
      align-items: center;
      -webkit-box-pack: center;
      justify-content: center;
      flex-flow: column nowrap;
      text-align: center;

      > div:nth-child(even) {
        flex-direction: row;
        > div {
          margin: 1rem;
        }
      }

      > div:nth-child(odd) {
        flex-direction: row-reverse;
        > div {
          margin: 1rem;
        }
        > div:nth-child(2) {
          align-items: flex-start;
        }
      }
    }
  }
`;

// HERO POST
export const StyledHeroImgWrapper = styled.div`
  cursor: pointer;
  position: relative;
  min-height: 30rem;
  ${({ theme }) => theme.shadow};

  @media (min-width: ${({ theme }) => theme.breakpoints.lg}) {
    margin: 0.5rem;
  }
`;

export const StyledHeroWrapper = styled(StyledWrapper)`
  margin: 0;
  align-items: flex-start;
  text-align: left;
  justify-content: space-between;
  width: 100%;
  cursor: pointer;

  ${({ column }) =>
    column &&
    css`
      flex-direction: column;
    `}

  > p {
    padding: 0.5rem;
    padding-left: 0;
    cursor: pointer;
  }
`;

export const StyledHeroSection = styled.section`
  width: 100%;

  @media (min-width: ${({ theme }) => theme.breakpoints.lg}) {
    width: 75%;
    margin: auto;
  }
`;
