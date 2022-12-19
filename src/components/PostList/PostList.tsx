import { IPost } from "../../interfaces/Post";
import { IUser } from "../../interfaces/Users";
import { useAppDispatch } from "../../redux/hooks";
import { deletePostThunk } from "../../redux/thunks/postsThunks";
import Post from "../Post/Post";
import "./PostList.scss";

interface PostListProps {
  postList: IPost[];
  userList?: IUser[];
}

const PostList = ({ postList, userList }: PostListProps): JSX.Element => {
  const dispatch = useAppDispatch();

  const deletePost = (postId: number) => {
    dispatch(deletePostThunk(postId));
  };

  return (
    <>
      <ul className="post-list">
        {userList
          ? userList.map((user) => (
              <li className="post-list__item" key={user.id}></li>
            ))
          : postList.map((post) => (
              <li className="post-list__item" key={post.id}>
                <Post deleteAction={deletePost} post={post} />
              </li>
            ))}
      </ul>
    </>
  );
};

export default PostList;
