import Post from "../Post/Post";
import "./PostList.scss";

const PostList = (): JSX.Element => {
  return (
    <div className="post-list">
      <Post />
      <Post />
      <Post />
      <Post />
    </div>
  );
};

export default PostList;
