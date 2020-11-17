import { createAction } from ".";
import { userService } from "../../Service";
import { FETCH_CREDENTAIL } from "./type";
export const login = (user) => {
  // return ve mot ham
  return (dispatch) => {
    userService
      .signIn(user)
      .then((res) => {
        // console.log(res);
        // console.log(user);
        dispatch(createAction(FETCH_CREDENTAIL, res.data));
        localStorage.setItem("credential", JSON.stringify(res.data));
      })
      .catch((err) => {
        console.log(err);
      });
  };
};
