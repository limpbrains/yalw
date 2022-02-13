import {LDK_STARTED} from '../constants';

const INITIAL_STATE = {
  running: null,
};

export default function ldk(state = INITIAL_STATE, action) {
  switch (action.type) {
    case LDK_STARTED:
      return {...state, running: action.running};
    default:
      return state;
  }
}
