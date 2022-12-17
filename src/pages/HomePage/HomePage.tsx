import { useEffect } from "react";
import Loader from "../../components/Loader/Loader";
import PostList from "../../components/PostList/PostList";
import { RawPost } from "../../interfaces/Post";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { getAllPostsThunk } from "../../redux/thunks/postsThunks";
import { getAllUsersThunk } from "../../redux/thunks/usersThunks";
import "./HomePage.scss";

const HomePage = (): JSX.Element => {
  const dispatch = useAppDispatch();
  const currentPosts: RawPost[] = useAppSelector((state) => state.posts);
  const loading = useAppSelector((state) => state.ui.loading);

  useEffect(() => {
    dispatch(getAllPostsThunk());
    dispatch(getAllUsersThunk());
  }, [dispatch]);

  return (
    <>
      {loading && <Loader />}
      <main className="home-page">
        <h1 className="home-page__title">Posts</h1>
        <PostList postList={currentPosts} />
      </main>
    </>
  );
};

export default HomePage;
