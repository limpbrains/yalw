import {LDK_STARTED, LDK_INFO, LDK_STATE} from '../constants';

const INITIAL_STATE = {
  running: null,
  info: {},
  state: null,
};

export default function ldk(state = INITIAL_STATE, action) {
  switch (action.type) {
    case LDK_STARTED:
      return {...state, running: action.running};
    case LDK_INFO:
      return {...state, info: action.info};
    case LDK_STATE:
      return {...state, state: action.value};
    default:
      return state;
  }
}
