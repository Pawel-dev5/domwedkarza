// COMPONENTS
import { PostPreview } from "./Post";

// STYLES
import { StyledMoreStoriesWrapper } from "./Styles";

const MoreStories = ({ posts }) => (
  <StyledMoreStoriesWrapper>
    <div>
      {posts?.map(({ node }) => (
        <PostPreview key={node.slug} {...node} />
      ))}
    </div>
  </StyledMoreStoriesWrapper>
);

export default MoreStories;
