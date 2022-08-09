import Image from 'next/image';

// STYLES
import { StyledThirdSection } from './Style';

const ThirdSection = ({ data }) => {
	let gallery = [];
	if (data) {
		gallery = Object.values(data);
	}

	if (data) {
		return (
			<>
				<StyledThirdSection>
					{gallery?.map((image) => (
						<div key={image?.id} aria-hidden="true">
							<Image src={image?.sourceUrl} alt={image?.altText} layout="fill" />
						</div>
					))}
				</StyledThirdSection>
			</>
		);
	} else return null;
};

export default ThirdSection;
