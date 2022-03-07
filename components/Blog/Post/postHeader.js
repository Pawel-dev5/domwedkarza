import { CoverImage } from "../../items";
import PostTitle from "./postTitle";
import { Avatar } from "../../elements";

const PostHeader = ({ title, featuredImage, author }) => (
  <>
    <PostTitle>{title}</PostTitle>
    <div>
      <Avatar author={author} />
    </div>
    <div>
      <CoverImage title={title} featuredImage={featuredImage} />
    </div>
    <div></div>
  </>
);

export default PostHeader;
