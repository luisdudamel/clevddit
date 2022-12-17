import { useEffect } from "react";
import Header from "../../components/Header/Header";
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
        <Header />
        <h1 className="home-page__title">Posts</h1>
      </main>
    </>
  );
};

export default HomePage;
