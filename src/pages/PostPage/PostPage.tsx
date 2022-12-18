import Loader from "../../components/Loader/Loader";
import { useAppSelector } from "../../redux/hooks";

const PostPage = (): JSX.Element => {
  const loading = useAppSelector((store) => store.ui.loading);

  return <>{loading && <Loader />}</>;
};

export default PostPage;
