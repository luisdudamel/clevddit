import { useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import CheckLogged from "./components/CheckLogged/CheckLogged";
import CheckNotLogged from "./components/CheckNotLogged/CheckNotLogged";
import Header from "./components/Header/Header";
import { mockAdminCredentials } from "./mocks/mockCredentials";
import HomePage from "./pages/HomePage/HomePage";
import LoginRegisterPage from "./pages/LoginRegisterPage/LoginRegisterPage";
import PostPage from "./pages/PostPage/PostPage";
import { useAppDispatch } from "./redux/hooks";
import { loginUserThunk } from "./redux/thunks/userThunk";
import "./styles/sass/styles.scss";

const App = (): JSX.Element => {
  const dispatch = useAppDispatch();
  const token = localStorage.getItem("token");

  if (token) dispatch(loginUserThunk(mockAdminCredentials));

  return (
    <>
      <Routes>
        <Route
          path="/*"
          element={
            <CheckLogged>
              <LoginRegisterPage />
            </CheckLogged>
          }
        />
        <Route
          path="login"
          element={
            <CheckLogged>
              <LoginRegisterPage />
            </CheckLogged>
          }
        ></Route>
        <Route
          path="register"
          element={
            <CheckLogged>
              <LoginRegisterPage />
            </CheckLogged>
          }
        ></Route>
        <Route
          path="/home"
          element={
            <CheckNotLogged>
              <>
                <Header />
                <HomePage />
              </>
            </CheckNotLogged>
          }
        ></Route>
        <Route
          path="/users"
          element={
            <CheckNotLogged>
              <>
                <Header />
                <HomePage />
              </>
            </CheckNotLogged>
          }
        ></Route>
        <Route
          path="/post/:postId"
          element={
            <CheckNotLogged>
              <>
                <Header />
                <PostPage />
              </>
            </CheckNotLogged>
          }
        ></Route>
      </Routes>
    </>
  );
};

export default App;
