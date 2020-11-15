let initialState = {
  course: [],
  courseDetail: null,
};

const courseReducer = (state = initialState, actions) => {
  const { type, payload } = actions;
  switch (type) {
    case "FETCH_COURSES":
      state.course = payload;
      return { ...state };
    case "FETCH_COURSE_DETAIL":
      state.courseDetail = payload;
      return { ...state };
    default:
      return state;
  }
};

export default courseReducer;
