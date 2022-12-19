import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAppSelector } from "../../redux/hooks";

interface CheckLoggedProps {
  children: JSX.Element;
}

const CheckLogged = ({ children }: CheckLoggedProps): JSX.Element => {
  const logged = useAppSelector((state) => state.user.logged);
  const navigate = useNavigate();

  useEffect(() => {
    if (!logged) {
      navigate("/login");
    }
  }, [logged, navigate]);

  return children;
};

export default CheckLogged;
