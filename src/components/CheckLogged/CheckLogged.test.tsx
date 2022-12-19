import { render } from "@testing-library/react";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { UserState } from "../../interfaces/Users";
import { mockUnloggedUser } from "../../mocks/mockUsers";

import { store } from "../../redux/store/store";
import CheckLogged from "./CheckLogged";

let mockUnlogged: UserState;

jest.mock("../../redux/hooks", () => ({
  ...jest.requireActual("../../redux/hooks"),
  useAppSelector: () => mockUnlogged.logged,
}));

const mockNavigate = jest.fn();

jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useNavigate: () => mockNavigate,
}));

describe("Given a CredentialsValidation component", () => {
  describe("When its invoked and the user is not logged in", () => {
    test("Then it should call the navigate function", () => {
      mockUnlogged = { ...mockUnloggedUser };

      render(
        <Provider store={store}>
          <BrowserRouter>
            <CheckLogged>
              <h1>Clevddit</h1>
            </CheckLogged>
          </BrowserRouter>
        </Provider>
      );

      expect(mockNavigate).toHaveBeenCalled();
    });
  });
});
