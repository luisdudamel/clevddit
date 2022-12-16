import { useEffect } from "react";
import { useAppDispatch } from "../../redux/hooks";
import { getAllPostsThunk } from "../../redux/thunks/postsThunks";

const url = process.env.REACT_APP_API_URL as string;

const HomePage = (): JSX.Element => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getAllPostsThunk(url));
  }, [dispatch]);

  return <></>;
};

export default HomePage;
