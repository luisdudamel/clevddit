import { getAllUsersThunk } from "./usersThunks";

describe("Given the getAllUsers function", () => {
  describe("When it's called", () => {
    test("Then it should call dispatch", async () => {
      const dispatch = jest.fn();

      const thunk = getAllUsersThunk();
      await thunk(dispatch);

      expect(dispatch).toHaveBeenCalled();
    });
  });
});

export {};
