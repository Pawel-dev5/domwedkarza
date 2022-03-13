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
  display: flex;
  align-items: center;
  justify-content: center;
  height: 500px;
  padding: 1rem;
  gap: 0;

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

  ${({ customWidth }) =>
    customWidth &&
    css`
      width: ${customWidth};
    `}

  @media (min-width: ${({ theme }) => theme.breakpoints.lg}) {
    gap: 1rem;
    width: 75%;
    margin: auto;

    div:nth-child(1) {
      width: 70%;
    }
    div:nth-child(2) {
      width: 30%;
      margin: initial;
    }
  }
`;

export const StyledMorePostWrapper = styled(StyledWrapper)`
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

export const StyledSliderWrapper = styled.div`
  height: 400px;
  width: 100%;
  max-width: 600px;

  display: flex;
  align-items: center;
  justify-content: center;

  .container-with-dots {
    width: 600px;

    *:not(ul) {
      min-height: 400px;
      button {
        min-height: 25px !important;
      }
    }
    img {
      min-height: 400px !important;
      object-fit: cover;
    }
  }
`;

export const StylesMenuGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  height: 75%;

  @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
    width: 75%;
    grid-template-columns: repeat(4, 1fr);
  }
  span {
    margin: 1rem !important;

    img {
      :hover {
        transform: scale(1.1);
        transition: transform 0.5s;
      }
    }
  }
`;

export const StyledDotButton = styled.button`
  height: 25px;
  width: 25px;
  background-color: ${({ theme }) => theme.grey400};
  border-radius: 50%;
  display: inline-block;
  min-height: 25px !important;
  max-height: 25px;
`;
