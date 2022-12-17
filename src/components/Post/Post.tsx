import "./Post.scss";

const Post = (): JSX.Element => {
  return (
    <div className="post">
      <h2 className="post__title">
        sunt aut facere repellat provident occaecati excepturi optio
        reprehenderit
      </h2>
      <h3 className="post__author">By Elon</h3>
      <p className="post__body">
        quia et suscipit nsuscipit recusandae consequuntur expedita et cum
        nreprehenderit molestiae ut ut quas totam nnostrum rerum est autem sunt
        rem eveniet architecto
      </p>
      <div className="actions-container">
        <img width={48} height={48} src="img/icons/eye.svg" alt="Eye icon" />
        <img
          width={48}
          height={48}
          src="img/icons/delete.svg"
          alt="Delete icon"
        />
      </div>
    </div>
  );
};

export default Post;
