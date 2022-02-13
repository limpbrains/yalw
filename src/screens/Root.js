import React, {useEffect} from 'react';
import {ActivityIndicator, StyleSheet, Text, View} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';

import actions from '../store/actions';
import Home from './Home';

const Root = () => {
  const lnd = useSelector(state => state.lnd);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(actions.lnd.start());
  }, [dispatch]);

  // starting in progress
  if (lnd.running === null) {
    return (
      <View style={[styles.center]}>
        <ActivityIndicator size="large" />
      </View>
    );
  }

  return <Home />;
};

const styles = StyleSheet.create({
  center: {
    flex: 1,
    justifyContent: 'center',
    flexDirection: 'row',
  },
});

export default Root;
