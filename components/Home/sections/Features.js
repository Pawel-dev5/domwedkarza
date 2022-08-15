import Image from 'next/image';

// STYLES
import { StyledItemsWrapper, StyledFeature, StyledIcon, StyledFeaturesWrapper } from './Style';
import { StyledText } from '../../StylesGeneral';

const Features = ({ features, heading }) => {
	let featureArray = [];

	if (features) {
		featureArray = Object.values(features);
	}

	return (
		<StyledFeaturesWrapper>
			{heading && (
				<StyledText featureHeader black semiBold center padding="2rem" width="100%">
					{heading}
				</StyledText>
			)}

			{featureArray && (
				<StyledItemsWrapper imagesCount={featureArray?.length}>
					{featureArray?.map((feature) => (
						<StyledFeature key={feature?.icon?.id}>
							<StyledIcon>
								<Image
									src={feature?.icon?.sourceUrl}
									alt={feature?.icon?.altText}
									width="140px"
									height="140px"
									quality={65}
								/>
							</StyledIcon>

							<div>
								<StyledText h2 black padding="1rem 0">
									{feature?.feature1Header}
								</StyledText>

								<StyledText h5 black padding="1rem 3rem">
									{feature?.feature1Text}
								</StyledText>
							</div>
						</StyledFeature>
					))}
				</StyledItemsWrapper>
			)}
		</StyledFeaturesWrapper>
	);
};

export default Features;
