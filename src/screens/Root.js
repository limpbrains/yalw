import React, {useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux';

import actions from '../store/actions';
import Home from './Home';

const Root = () => {
  const ldk = useSelector(state => state.ldk);
  const dispatch = useDispatch();
  console.info('actions', actions);

  useEffect(() => {
    dispatch(actions.ldk.start())
  }, []);

  return <Home />;
};

export default Root;
