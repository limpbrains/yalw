import {LND_STARTED, LND_INFO, LND_STATE} from '../constants';

const INITIAL_STATE = {
  running: null,
  info: {},
  state: null,
};

export default function lnd(state = INITIAL_STATE, action) {
  switch (action.type) {
    case LND_STARTED:
      return {...state, running: action.running};
    case LND_INFO:
      return {...state, info: action.info};
    case LND_STATE:
      return {...state, state: action.value};
    default:
      return state;
  }
}
