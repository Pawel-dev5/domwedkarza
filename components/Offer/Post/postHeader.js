import { CoverImage } from "../../items";
import PostTitle from "./postTitle";

const PostHeader = ({ title, featuredImage }) => (
  <>
    <PostTitle>{title}</PostTitle>

    <CoverImage title={title} featuredImage={featuredImage} />
  </>
);

export default PostHeader;
