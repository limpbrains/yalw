import {LDK_STARTED, LDK_INFO} from '../constants';

const INITIAL_STATE = {
  running: null,
  info: {},
};

export default function ldk(state = INITIAL_STATE, action) {
  switch (action.type) {
    case LDK_STARTED:
      return {...state, running: action.running};
    case LDK_INFO:
      return {...state, info: action.info};
    default:
      return state;
  }
}
