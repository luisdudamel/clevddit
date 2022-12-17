import { IPost } from "../../interfaces/Post";
import "./Post.scss";

interface PostProps {
  post: IPost;
  deleteAction: (id: number) => void;
}

const Post = ({ post, deleteAction }: PostProps): JSX.Element => {
  return (
    <div className="post">
      <h2 className="post__title">{post.title}</h2>
      <h3 className="post__author">By {post.user?.username}</h3>
      <p className="post__body">{post.body}</p>
      <div className="actions-container">
        <img
          className="post__action"
          width={48}
          height={48}
          src="img/icons/eye.svg"
          alt="Eye icon"
        />
        <img
          className="post__action"
          width={48}
          height={48}
          src="img/icons/delete.svg"
          alt="Delete icon"
          onClick={() => deleteAction(post.id)}
        />
      </div>
    </div>
  );
};

export default Post;
