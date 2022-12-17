import { IUser } from "../../interfaces/Users";
import { mockLoadedUsers } from "../../mocks/mockUsers";
import usersReducer, { loadUsersActionCreator } from "./usersSlice";

describe("Given a loadUsers slice", () => {
  describe("When its invoked with a list of users", () => {
    test("Then it should return the same list of users", () => {
      const expectedLoadedUsers: IUser[] = mockLoadedUsers;
      const usersToLoad: IUser[] = mockLoadedUsers;

      const loadAction = loadUsersActionCreator(usersToLoad);
      const loadedPosts = usersReducer(usersToLoad, loadAction);

      expect(loadedPosts).toEqual(expectedLoadedUsers);
    });
  });
});
