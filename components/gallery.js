// STYLES
import { StylesGalleryGrid } from './Styles';
import { StyledWrapper } from './StylesGeneral';

const Gallery = ({ content }) => (
	<StyledWrapper column>
		<StylesGalleryGrid dangerouslySetInnerHTML={{ __html: content }} />
	</StyledWrapper>
);

export default Gallery;
