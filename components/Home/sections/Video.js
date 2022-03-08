// STYLES
import { StyledVideo, StyledVideoWrapper } from "./Style";

const Video = ({ src }) => (
  <StyledVideoWrapper>
    <StyledVideo controls>
      <source src={src} type="video/mp4" />
    </StyledVideo>
  </StyledVideoWrapper>
);

export default Video;
