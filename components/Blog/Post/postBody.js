const PostBody = ({ content }) => (
  <div>
    <div dangerouslySetInnerHTML={{ __html: content }} />
  </div>
);

export default PostBody;
