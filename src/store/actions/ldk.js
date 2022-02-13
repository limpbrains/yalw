import {LDK_STARTED, LDK_INFO} from '../constants';

import lnd, {
  ENetworks,
  LndConf,
  ss_lnrpc,
} from '@synonymdev/react-native-lightning';

const lndConf = new LndConf('testnet', {
  'Application Options': {
    alias: 'Synonym Test',
  },
  Neutrino: {
    'neutrino.connect': '35.240.72.95:18333',
  },
});

let ldk;

export function start() {
  return async function (dispatch) {
    const res = await lnd.start(lndConf);

    if (res.isErr()) {
      //Lnd failed to start
      console.error(res.error);

      dispatch({
        type: LDK_STARTED,
        running: false,
      });
      return;
    }

    dispatch({
      type: LDK_STARTED,
      running: true,
    });
  };
}

export function getInfo() {
  return async function (dispatch) {
    const res = await lnd.getInfo();

    if (res.isErr()) {
      return console.error('ERRRRRR', res.error);
    }
    console.warn('res', res);

    dispatch({
      type: LDK_INFO,
      info: res,
    });
  };
}
