import {LDK_STARTED, LDK_INFO, LDK_STATE} from '../constants';

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

let LND;

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

    await Native.unlockWallet('password');

    // await new Promise(resolve => setTimeout(resolve, 10000));

    dispatch({
      type: LDK_STARTED,
      running: true,
    });

    // subscribe to lnd state updates
    lnd.stateService.subscribeToStateChanges(res => {
      if (res.isOk()) {
        console.log('subscribe', res.value);
        dispatch({
          type: LDK_STATE,
          value: res.value,
        });
      }
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
