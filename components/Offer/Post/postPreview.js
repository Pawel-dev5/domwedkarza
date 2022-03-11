import Link from "next/link";

// COMPONENTS
import { CoverImage } from "../../items";

// STYLES
import { StyledText } from "../../../components/StylesGeneral";
import { StyledPostPreviewWrapper, StyledPostPrevInfo } from "./Styles";

const PostPreview = ({ title, featuredImage, excerpt, slug }) => (
  <StyledPostPreviewWrapper>
    {featuredImage && (
      <Link href={`/oferta/${slug}`} passHref>
        <CoverImage title={title} featuredImage={featuredImage} slug={slug} />
      </Link>
    )}

    <StyledPostPrevInfo>
      <Link href={`/oferta/${slug}`} passHref>
        <StyledText h1 bold pointer black>
          {title}
        </StyledText>
      </Link>

      <div>
        <Link href={`/oferta/${slug}`} passHref>
          <div dangerouslySetInnerHTML={{ __html: excerpt }} />
        </Link>
      </div>
    </StyledPostPrevInfo>
  </StyledPostPreviewWrapper>
);

export default PostPreview;
