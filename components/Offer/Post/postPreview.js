import Link from "next/link";

// COMPONENTS
import { CoverImage } from "../../items";

// STYLES
import { StyledText, StyledWrapper } from "../../../components/StylesGeneral";
import { StyledPostPreviewWrapper } from "./Styles";
import { StyledMorePostWrapper } from "../Styles";

const PostPreview = ({ title, featuredImage, excerpt, slug }) => (
  <Link href={`/oferta/${slug}`} passHref>
    <StyledPostPreviewWrapper>
      {featuredImage && (
        <CoverImage title={title} featuredImage={featuredImage} slug={slug} />
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
