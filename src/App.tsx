import { Route, Routes } from "react-router-dom";
import Header from "./components/Header/Header";
import HomePage from "./pages/HomePage/HomePage";
import LoginRegisterPage from "./pages/LoginRegisterPage/LoginRegisterPage";
import PostPage from "./pages/PostPage/PostPage";
import "./styles/sass/styles.scss";

const App = (): JSX.Element => {
  return (
    <>
      <Routes>
        <Route path="/login" element={<LoginRegisterPage />}></Route>
        <Route
          path="/home"
          element={
            <>
              <Header />
              <HomePage />
            </>
          }
        ></Route>
        <Route
          path="/post/:id"
          element={
            <>
              <Header />
              <PostPage />
            </>
          }
        ></Route>
      </Routes>
    </>
  );
};

export default App;
