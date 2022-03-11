import styled, { css } from "styled-components";

// POST PREVIEW
export const StyledPostPreviewWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  text-align: left;
  -webkit-box-align: center;
  -webkit-box-pack: center;
  margin: 2rem auto;

  @media (min-width: ${({ theme }) => theme.breakpoints.lg}) {
    width: 1200px;
  }

  p {
    cursor: pointer;
    overflow: hidden;
    display: -webkit-box;
    -webkit-line-clamp: 5;
    -webkit-box-orient: vertical;
  }
`;

export const StyledPostPrevInfo = styled.div`
  min-height: 10rem;

  > div {
    display: flex;
    align-items: left;
    justify-content: space-around;
    min-height: 10rem;
    flex-flow: column wrap;
    gap: 0.5rem;
  }
`;
