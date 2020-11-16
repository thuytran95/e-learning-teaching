import { courseService } from "../../Service";
import { createAction } from ".";
import { FETCH_COURSES, FETCH_COURSE_DETAIL } from "./type";

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

export const fetchDetailCourse = (id) => {
  return (dispatch) => {
    courseService
      .fetchCourseDetail(id)
      .then((res) => {
        // console.log(res);
        dispatch(createAction(FETCH_COURSE_DETAIL, res.data));
      })
      .catch((err) => {
        console.log(err);
      });
  };
};
