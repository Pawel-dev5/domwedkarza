// STYLES
import { StyledIframeWrapper } from "./Styles";

const VirtualWalk = ({ iframe }) => (
  <>
    {iframe && (
      <StyledIframeWrapper dangerouslySetInnerHTML={{ __html: iframe }} />
    )}
  </>
);
export default VirtualWalk;
