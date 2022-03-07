// STYLES
import { StyledTagsWrapper, StyledTags } from "./Styles";

const Tags = ({ tags }) => (
  <>
    {tags && (
      <StyledTagsWrapper>
        {tags?.map((tag, index) => (
          <StyledTags key={index}>{tag.node.name}</StyledTags>
        ))}
      </StyledTagsWrapper>
    )}
  </>
);

export default Tags;
