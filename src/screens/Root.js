import React, {useEffect} from 'react';
import {ActivityIndicator, StyleSheet, View} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import actions from '../store/actions';
import Home from './Home';
import Recieve from './Recieve';

const Stack = createNativeStackNavigator();

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

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={Home}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Recieve"
          component={Recieve}
          options={{headerShown: false, presentation: 'modal'}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  center: {
    flex: 1,
    justifyContent: 'center',
    flexDirection: 'row',
  },
});

export default Root;
