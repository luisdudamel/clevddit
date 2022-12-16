import { Route, Routes } from "react-router-dom";
import LoginRegisterPage from "./pages/LoginRegisterPage/LoginRegisterPage";
import "./styles/sass/styles.scss";

const App = (): JSX.Element => {
  return (
    <Routes>
      <Route path="/*" element={<LoginRegisterPage />}></Route>
    </Routes>
  );
};

export default App;
