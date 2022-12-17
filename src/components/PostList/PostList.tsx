import { IPost } from "../../interfaces/Post";
import Post from "../Post/Post";
import "./PostList.scss";

interface PostListProps {
  postList: IPost[];
}

const PostList = ({ postList }: PostListProps): JSX.Element => {
  return (
    <div className="post-list">
      <ul>
        {postList.map((post) => (
          <li>
            <Post />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PostList;
