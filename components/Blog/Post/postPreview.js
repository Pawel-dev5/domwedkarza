import Link from "next/link";

// COMPONENTS
import { CoverImage, Tags } from "../../items";

// STYLES
import { StyledText } from "../../../components/StylesGeneral";
import { StyledPostPreviewWrapper, StyledPostPrevInfo } from "./Styles";

const PostPreview = ({ title, featuredImage, excerpt, slug, tags }) => (
  <StyledPostPreviewWrapper>
    {featuredImage && (
      <Link href={`/blog/${slug}`} passHref>
        <CoverImage title={title} featuredImage={featuredImage} slug={slug} />
      </Link>
    )}

    <StyledPostPrevInfo>
      <Link href={`/blog/${slug}`} passHref>
        <StyledText h1 bold pointer>
          {title}
        </StyledText>
      </Link>

      <div>
        <Link href={`/blog/${slug}`} passHref>
          <div dangerouslySetInnerHTML={{ __html: excerpt }} />
        </Link>

        {tags && <Tags tags={tags?.edges} />}
      </div>
    </StyledPostPrevInfo>
  </StyledPostPreviewWrapper>
);

export default PostPreview;
