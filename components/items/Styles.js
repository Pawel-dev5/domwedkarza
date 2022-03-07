import styled from "styled-components";

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

// TAGS
export const StyledTagsWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin: 0.5rem 0;
`;

export const StyledTags = styled.span`
  min-width: 2rem;
  padding: 0.2rem 1rem;
  background-color: ${({ theme }) => theme.grey200};
  border: 1px solid ${({ theme }) => theme.grey400};
  border-radius: ${({ theme }) => theme.borderRadius400};
  font-size: 0.9rem;
  font-weight: 400;

  /* :hover {
    background-color: ${({ theme }) => theme.grey300};
    border: 1px solid ${({ theme }) => theme.grey500};
  } */
`;
