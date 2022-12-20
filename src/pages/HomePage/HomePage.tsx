import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import Loader from "../../components/Loader/Loader";
import ItemsList from "../../components/ItemsList/ItemsList";
import { IPost } from "../../interfaces/Post";
import { IUser } from "../../interfaces/Users";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { getAllPostsThunk } from "../../redux/thunks/postsThunks";
import { getAllUsersThunk } from "../../redux/thunks/usersThunks";
import "./HomePage.scss";

const HomePage = (): JSX.Element => {
  const { pathname } = useLocation();
  const dispatch = useAppDispatch();
  const currentPosts: IPost[] = useAppSelector((state) => state.posts);
  const currentUsers: IUser[] = useAppSelector((state) => state.users);
  const loading = useAppSelector((state) => state.ui.loading);

  useEffect(() => {
    dispatch(getAllPostsThunk());
    dispatch(getAllUsersThunk());
  }, [dispatch]);

  return (
    <>
      <main className="home-page">
        {loading && <Loader />}
        <h1 className="home-page__title">{`${
          pathname === "/users" ? "Users" : "Posts"
        } `}</h1>
        <ItemsList
          userList={pathname === "/users" ? currentUsers : undefined}
          postList={currentPosts}
        />
      </main>
    </>
  );
};

export default HomePage;
