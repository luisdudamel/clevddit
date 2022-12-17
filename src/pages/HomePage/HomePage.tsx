import { useEffect } from "react";
import PostList from "../../components/PostList/PostList";
import { useAppDispatch } from "../../redux/hooks";
import { getAllPostsThunk } from "../../redux/thunks/postsThunks";
import "./HomePage.scss";

const HomePage = (): JSX.Element => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getAllPostsThunk());
  }, [dispatch]);

  return (
    <>
      <main className="home-page">
        <h1 className="home-page__title">Posts</h1>
        <PostList />
      </main>
    </>
  );
};

export default HomePage;
