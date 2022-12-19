import { UserCredentials } from "../../interfaces/Users";
import { mockAdminCredentials } from "../../mocks/mockCredentials";
import { mockUnloggedAdmin } from "../../mocks/mockUsers";
import { loginUserActionCreator } from "../feature/userSlice/userSlice";
import { AppDispatch } from "../store/store";

export const loginUserThunk =
  (loginFormData: UserCredentials) => async (dispatch: AppDispatch) => {
    if (loginFormData.username === mockAdminCredentials.username) {
      dispatch(loginUserActionCreator(mockUnloggedAdmin));
    }
  };
