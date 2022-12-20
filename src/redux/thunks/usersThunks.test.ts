import { getAllUsersThunk, getUserByIdThunk } from "./usersThunks";

describe("Given the getAllUsersThunk function", () => {
  describe("When it's called", () => {
    test("Then it should call dispatch", async () => {
      const dispatch = jest.fn();

      const thunk = getAllUsersThunk();
      await thunk(dispatch);

      expect(dispatch).toHaveBeenCalled();
    });
  });
});
describe("Given the getUserByIdThunk function", () => {
  describe("When it's called", () => {
    test("Then it should call dispatch", async () => {
      const dispatch = jest.fn();

      const thunk = getUserByIdThunk("2");
      await thunk(dispatch);

      expect(dispatch).toHaveBeenCalled();
    });
  });
});
