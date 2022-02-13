import {combineReducers} from 'redux';

import lnd from './lnd';
import transactions from './transactions';

export default combineReducers({
  lnd,
  transactions,
});
