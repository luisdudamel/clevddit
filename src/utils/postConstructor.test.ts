import { mockConstructedPosts, mockTwoPosts } from "../mocks/mockPosts";
import { mockLoadedUsers } from "../mocks/mockUsers";
import { constructData } from "./postsConstructor";

describe("Given a postConstructor function", () => {
  describe("When it's called with a lists of posts with userId and a usersList", () => {
    test("Then it should return a list of posts without userId and the usersList", () => {
      const expectedPostsList = mockConstructedPosts;

      const constructedPosts = constructData(mockTwoPosts, mockLoadedUsers);

      expect(expectedPostsList).toEqual(constructedPosts);
    });
  });
});
