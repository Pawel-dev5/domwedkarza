import Link from 'next/link';
import Image from 'next/image';

// STYLES
import { StyledText, StyledWrapper } from '../../../components/StylesGeneral';
import { StyledPostPreviewWrapper, StyledCoverImg } from './Styles';
import { StyledMorePostWrapper } from '../Styles';

const PostPreview = ({ title, featuredImage, excerpt, slug }) => (
	<Link href={`/oferta/${slug}`} passHref>
		<StyledPostPreviewWrapper>
			{featuredImage && (
				<StyledCoverImg>
					<Image layout="fill" alt={title} src={featuredImage?.node?.sourceUrl} />
				</StyledCoverImg>
			)}

			<StyledWrapper between hero column>
				<StyledMorePostWrapper column>
					<StyledText h1 bold black pointer>
						{title}
					</StyledText>
				</StyledMorePostWrapper>

				<StyledMorePostWrapper dangerouslySetInnerHTML={{ __html: excerpt }} />
			</StyledWrapper>
		</StyledPostPreviewWrapper>
	</Link>
);

export default PostPreview;
