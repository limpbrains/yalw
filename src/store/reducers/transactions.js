import {TX_ADD} from '../constants';

const INITIAL_STATE = {
  list: [
    {
      id: 1,
      date: 1644753037,
      status: 'pending',
      value: 100500,
    },
    {
      id: 2,
      date: 1644753037,
      status: 'recieved',
      value: 100500,
    },
    {
      id: 3,
      date: 1644753037,
      status: 'sent',
      value: 100500,
    },
    {
      id: 4,
      date: 1644753037,
      status: 'pending',
      value: 100500,
    },
    {
      id: 5,
      date: 1644753037,
      status: 'recieved',
      value: 100500,
    },
  ],
};

export default function lnd(state = INITIAL_STATE, action) {
  switch (action.type) {
    case TX_ADD:
      return {...state, list: [...state.list, action.value]};
    default:
      return state;
  }
}
