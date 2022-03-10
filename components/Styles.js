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

export const StyledAboutWrapper = styled.div`
  width: 80%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin: auto;

  li {
    list-style: disc outside none;
    margin-left: 1em;
    overflow: visible;
  }

  ul {
    margin: 1em;
    overflow: visible;
  }
`;

export const StyledSectionWrapper = styled.div`
  width: 100%;
  height: 100%;
  min-height: 550px;
  padding: 1rem;
  margin-bottom: 1rem;

  img {
    min-height: 800px !important;
    object-fit: cover;
  }

  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  @media (min-width: ${({ theme }) => theme.breakpoints.lg}) {
    flex-direction: row;
  }
`;

export const StyledListWrapper = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: center;
  text-align: left;
  flex-direction: column;
  max-width: 500px;
  padding-bottom: 4rem;

  @media (min-width: ${({ theme }) => theme.breakpoints.lg}) {
    margin-right: 10rem;
  }
`;

export const StyledImageWrapper = styled.div`
  position: relative;
  min-width: 500px;
  min-height: 500px;
  max-width: 800px;

  height: 100%;
  width: 100%;
`;
