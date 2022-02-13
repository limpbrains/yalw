import {LND_STARTED, LND_INFO, LND_STATE} from '../constants';

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

export function start() {
  return async function (dispatch) {
    const res = await lnd.start(lndConf);

    if (res.isErr()) {
      //Lnd failed to start
      console.error(res.error);

      dispatch({
        type: LND_STARTED,
        running: false,
      });
      return;
    }

    dispatch({
      type: LND_STARTED,
      running: true,
    });

    // subscribe to lnd state updates
    lnd.stateService.subscribeToStateChanges(res => {
      if (res.isOk()) {
        console.log('subscribe', res.value);
        dispatch({
          type: LND_STATE,
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
      throw res.error;
    }

    dispatch({
      type: LND_INFO,
      info: res,
    });
  };
}
