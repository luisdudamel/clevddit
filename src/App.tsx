import { Route, Routes } from "react-router-dom";
import Header from "./components/Header/Header";
import HomePage from "./pages/HomePage/HomePage";
import LoginRegisterPage from "./pages/LoginRegisterPage/LoginRegisterPage";
import "./styles/sass/styles.scss";

const App = (): JSX.Element => {
  return (
    <>
      <Routes>
        <Route path="/*" element={<LoginRegisterPage />}></Route>
        <Route
          path="/home"
          element={
            <>
              <Header />
              <HomePage />
            </>
          }
        ></Route>
      </Routes>
    </>
  );
};

export default App;
