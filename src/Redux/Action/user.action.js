import { courseService } from "../../Service";
import { createAction } from "../Action";
import { FETCH_COURSES } from "./type";

// async action: action co chua b at dong bo
export const fetchCourse = () => {
  return (dispatch) => {
    courseService
      .fetchCourse()
      .then((res) => {
        //   console.log(res.data);
        dispatch(createAction(FETCH_COURSES, res.data));
      })
      .catch((err) => {
        console.log(err);
      });
  };
};
