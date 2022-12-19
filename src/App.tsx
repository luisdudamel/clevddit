import { Route, Routes } from "react-router-dom";
import CheckLogged from "./components/CheckLogged/CheckLogged";
import CredentialsValidation from "./components/CheckLogged/CheckLogged";
import Header from "./components/Header/Header";
import HomePage from "./pages/HomePage/HomePage";
import LoginRegisterPage from "./pages/LoginRegisterPage/LoginRegisterPage";
import PostPage from "./pages/PostPage/PostPage";
import "./styles/sass/styles.scss";

const App = (): JSX.Element => {
  return (
    <>
      <Routes>
        <Route
          path="/*"
          element={<CheckLogged children={<LoginRegisterPage />} />}
        />
        <Route path="login" element={<LoginRegisterPage />}></Route>
        <Route path="register" element={<LoginRegisterPage />}></Route>
        <Route
          path="/home"
          element={
            <CredentialsValidation
              children={
                <>
                  <Header />
                  <HomePage />
                </>
              }
            />
          }
        ></Route>
        <Route
          path="/post/:postId"
          element={
            <CredentialsValidation
              children={
                <>
                  <Header />
                  <PostPage />
                </>
              }
            />
          }
        ></Route>
      </Routes>
    </>
  );
};

export default App;
