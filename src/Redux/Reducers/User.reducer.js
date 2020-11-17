import { FETCH_CREDENTAIL } from "../Action/type";

let initialState = {
  // thong tin dang nhap
  credential: null,
};

const UserReducer = (state = initialState, actions) => {
  const { type, payload } = actions;
  switch (type) {
    case FETCH_CREDENTAIL:
      state.credential = payload;
      return { ...state };
    default:
      return state;
  }
};

export default UserReducer;
