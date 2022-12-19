import { mockUnloggedUser } from "../../../mocks/mockUsers";
import userReducer, { loginUserActionCreator } from "./userSlice";

describe("Given a userReducer", () => {
  describe("When its invoked with an user with the logged property set to false", () => {
    test("Then it should return an user with the logged property set to true", () => {
      const expectedLoggedStatus = true;
      const mockUser = mockUnloggedUser;

      const loginAction = loginUserActionCreator();
      const loggedUser = userReducer(mockUser, loginAction);

      expect(loggedUser.logged).toBe(expectedLoggedStatus);
    });
  });
});
