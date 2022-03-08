import styled, { css } from "styled-components";

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

export const StyledThirdSection = styled.div`
  position: relative;
  height: 1000px;

  display: flex;
  flex-direction: column;
  margin: 1rem 0;
  margin-bottom: 2rem;

  @media (min-width: ${({ theme }) => theme.breakpoints.lg}) {
    height: 300px;
    flex-direction: row;
  }
  @media (min-width: ${({ theme }) => theme.breakpoints.xl}) {
    height: 500px;
  }

  > div {
    position: relative;
  }

  > * {
    cursor: pointer;
    aspect-ratio: 1;
    overflow: hidden;

    img {
      transition: transform 0.25s ease;
      object-fit: cover;
      width: 100%;
      height: 100%;
    }

    :hover {
      img {
        transform: scale(1.1);
      }
    }
  }
`;
