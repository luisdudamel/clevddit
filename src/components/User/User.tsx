import { useNavigate } from "react-router-dom";
import { IUser } from "../../interfaces/Users";
import "./User.scss";

interface PostProps {
  user: IUser;
}

const User = ({ user }: PostProps): JSX.Element => {
  const navigate = useNavigate();

  const openUserDetail = () => {
    navigate(`/user/${user.id.toString()}`);
  };

  return (
    <div onClick={openUserDetail} className="post">
      <h2 className="user__username">{user.username}</h2>
      <h3 className="user__name">{user.name}</h3>
      <p className="user__email">{user.email}</p>
      <div className="actions-container">
        <button
          onClick={openUserDetail}
          type="button"
          className="action-button"
        >
          <img
            className="user__action"
            width={48}
            height={48}
            src="/img/icons/eye.svg"
            alt="Open user icon"
          />
        </button>
        <button type="button" className="action-button">
          <img
            className="user__action"
            width={48}
            height={48}
            src="/img/icons/delete.svg"
            alt="Delete User"
          />
        </button>
      </div>
    </div>
  );
};

export default User;
