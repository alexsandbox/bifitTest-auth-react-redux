import * as actionTypes from '../constants/ActionTypes';

const initialLogin = {
  errors: {},
  user: {
    name: '',
    password: '',
  },
  submitDisabled: false,
};

export default function login(state = initialLogin, action) {
  switch (action.type) {
    case actionTypes.LOGIN_CHANGE_USER:
      return { ...state, user: { ...state.user, ...action.user } };
    case actionTypes.LOGIN_CLEAR:
    case actionTypes.LOGIN_SUCCESS:
      return initialLogin;
    case actionTypes.LOGIN_PROGRESS:
      return { ...state, submitDisabled: true };
    case actionTypes.LOGIN_ERROR:
      return { ...state, errors: action.errors, submitDisabled: false };
    default:
      return state;
  }
}
