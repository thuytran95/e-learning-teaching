let initialState = {
  course: [],
};

const courseReducer = (state = initialState, actions) => {
  const { type, payload } = actions;
  switch (type) {
    default:
      return { ...state };
  }
};

export default courseReducer;
