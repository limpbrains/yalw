import {LDK_STARTED} from '../constants';

import lnd, {
  ENetworks,
  LndConf,
  ss_lnrpc,
} from '@synonymdev/react-native-lightning';

const lndConf = new LndConf(ENetworks.regtest);

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
