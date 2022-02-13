import {TX_ADD} from '../constants';

export function add(tx) {
  return {type: TX_ADD, value: tx};
}
