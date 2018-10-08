import { alertTypes } from "../../constants/actionTypes";

const initialState = {
  message: "",
};

export function alert(state = initialState, action) {
  switch (action.type) {
    case alertTypes.SUCCESS:
      return {
        type: alertTypes.SUCCESS,
        message: action.message
      };
    case alertTypes.ERROR:
      return {
        type: alertTypes.ERROR,
        message: action.message
      };
    case alertTypes.CLEAR:
      return {};
    default:
      return state
  }
}