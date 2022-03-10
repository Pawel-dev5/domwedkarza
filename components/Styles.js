import styled, { css } from "styled-components";

export const StyledFormWrapper = styled.div`
  width: 500px;
  height: 300px;
  background-color: grey;
  color: black;
  text-align: center;
`;

export const StyledFormContainer = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-around;
  flex-flow: column nowrap;
  text-align: center;
  margin: 2.5rem auto;

  width: 100%;
  max-width: 1220px;
  padding: 1rem 2rem;

  @media (min-width: ${({ theme }) => theme.breakpoints.lg}) {
    flex-flow: row nowrap;
  }
`;

export const StylesGalleryGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  height: 100%;

  @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
    width: 75%;
    grid-template-columns: repeat(2, 1fr);
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.lg}) {
    width: 75%;
    grid-template-columns: repeat(3, 1fr);
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
