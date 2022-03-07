// COMPONENTS
import { PostPreview } from "./Post";

// STYLES
import { StyledText } from "../../components/StylesGeneral";
import { StyledMoreStoriesWrapper } from "./Styles";

const MoreStories = ({ posts }) => (
  <StyledMoreStoriesWrapper>
    <StyledText h1 bold>
      Więcej wpisów
    </StyledText>

    <div>
      {posts?.map(({ node }) => (
        <PostPreview key={node.slug} {...node} />
      ))}
    </div>
  </StyledMoreStoriesWrapper>
);

export default MoreStories;
