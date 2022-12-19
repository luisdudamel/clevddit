import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAppSelector } from "../../redux/hooks";

interface CheckNotLoggedProps {
  children: JSX.Element;
}

const CheckNotLogged = ({ children }: CheckNotLoggedProps): JSX.Element => {
  const logged = useAppSelector((state) => state.user.logged);
  const navigate = useNavigate();

  useEffect(() => {
    if (!logged) {
      return navigate("/login");
    }
  }, [logged, navigate]);

  return children;
};

export default CheckNotLogged;
