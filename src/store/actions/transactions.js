import {TX_ADD} from '../constants';

export function addTransaction(tx) {
  return {type: TX_ADD, value: tx};
}
