import { PostHeader, PostTitle, PostBody, PostFooter } from "./Post";

const PostContent = ({ post }) => (
  <>
    <PostHeader
      title={post?.title}
      featuredImage={post?.featuredImage}
      date={post?.date}
      author={post?.author?.node}
      categories={post?.categories}
    />

    <PostBody content={post?.content} />

    <PostFooter
      tags={post?.tags?.edges}
      categories={post?.categories}
      date={post?.date}
    />
  </>
);

export default PostContent;
