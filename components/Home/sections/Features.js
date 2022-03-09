// STYLES
import { StyledFeaturesWrapper, StyledFeature, StyledIcon } from "./Style";
import { StyledText } from "../../StylesGeneral";

const Features = ({ features }) => {
  let featureArray = [];

  if (features) {
    featureArray = Object.values(features);
  }

  if (features) {
    return (
      <StyledFeaturesWrapper imagesCount={featureArray?.length}>
        {featureArray?.map((feature, index) => (
          <StyledFeature key={index}>
            <StyledIcon src={feature?.icon} alt={feature?.icon} />

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
      </StyledFeaturesWrapper>
    );
  } else return null;
};

export default Features;
