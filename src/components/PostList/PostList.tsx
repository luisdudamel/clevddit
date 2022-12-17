import { RawPost } from "../../interfaces/Post";
import Post from "../Post/Post";
import "./PostList.scss";

interface PostListProps {
  postList: RawPost[];
}

const PostList = ({ postList }: PostListProps): JSX.Element => {
  return (
    <ul className="post-list">
      {postList.map((post) => (
        <li className="post-list__item" key={post.id}>
          <Post post={post} />
        </li>
      ))}
    </ul>
  );
};

export default PostList;
