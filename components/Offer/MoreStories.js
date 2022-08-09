// COMPONENTS
import { PostPreview } from './Post';

// STYLES
import { StyledMoreStoriesWrapper } from './Styles';

// HELEPERS
import tokenMaker from '../../helpers/TokenMaker';

const MoreStories = ({ posts }) => (
	<StyledMoreStoriesWrapper>
		<div>
			{posts?.map(({ node }) => (
				<PostPreview key={tokenMaker(5)} {...node} />
			))}
		</div>
	</StyledMoreStoriesWrapper>
);

export default MoreStories;
