import styled from "styled-components";

export const StyledFormWrapper = styled.div`
  width: 300px;
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
