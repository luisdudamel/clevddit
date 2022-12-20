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
    <div onClick={openUserDetail} className="user">
      <h2 className="user__username">{user.username}</h2>
      <h3 className="user__name">{user.name}</h3>
      <h4 className="user__email">{user.email}</h4>
      <p className="user__website">{user.website}</p>
      <p className="user__company">{user.company.name}</p>
      <p className="user__phone">{user.phone}</p>
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
      </div>
    </div>
  );
};

export default User;
