import { useEffect } from "react";
import { useAppDispatch } from "../../redux/hooks";
import { getAllPostsThunk } from "../../redux/thunks/postsThunks";

const HomePage = (): JSX.Element => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getAllPostsThunk());
  }, [dispatch]);

  return <></>;
};

export default HomePage;
