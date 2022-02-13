import {
  LND_STARTED,
  LND_INFO,
  LND_STATE,
  LND_BALANCE,
  LND_SYNCH_PROGRESS,
} from '../constants';

import lnd, {
  // ENetworks,
  LndConf,
  // ss_lnrpc,
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
    lnd.stateService.subscribeToStateChanges(r => {
      if (r.isOk()) {
        console.log('subscribe', r.value);
        dispatch({
          type: LND_STATE,
          value: r.value,
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

export function mockBalanceProgress() {
  return async function (dispatch) {
    for (let i = 0; i <= 100; i += 10) {
      dispatch({
        type: LND_BALANCE,
        value: i * 5,
      });
      dispatch({
        type: LND_SYNCH_PROGRESS,
        value: i,
      });
      await new Promise(resolve => setTimeout(resolve, 1000));
    }
  };
}
