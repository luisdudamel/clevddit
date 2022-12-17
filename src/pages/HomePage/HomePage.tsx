import { useEffect } from "react";
import Header from "../../components/Header/Header";
import { useAppDispatch } from "../../redux/hooks";
import { getAllPostsThunk } from "../../redux/thunks/postsThunks";

const HomePage = (): JSX.Element => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getAllPostsThunk());
  }, [dispatch]);

  return (
    <>
      <Header />
    </>
  );
};

export default HomePage;
