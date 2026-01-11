import { SET_ERRORS } from "../actionTypes";

const initialState = null;

const errorReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_ERRORS:
      return action.payload; // must be an object or null
    default:
      return state;
  }
};

export default errorReducer;
