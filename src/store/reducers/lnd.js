import {
  LND_STARTED,
  LND_INFO,
  LND_STATE,
  LND_BALANCE,
  LND_SYNCH_PROGRESS,
} from '../constants';

const INITIAL_STATE = {
  running: null,
  info: {},
  state: null,
  balance: 0,
  synchProgress: 0,
};

export default function lnd(state = INITIAL_STATE, action) {
  switch (action.type) {
    case LND_STARTED:
      return {...state, running: action.running};
    case LND_INFO:
      return {...state, info: action.info};
    case LND_STATE:
      return {...state, state: action.value};
    case LND_BALANCE:
      return {...state, balance: action.value};
    case LND_SYNCH_PROGRESS:
      return {...state, synchProgress: action.value};
    default:
      return state;
  }
}
