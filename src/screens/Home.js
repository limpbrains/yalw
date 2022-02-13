import React, {useEffect} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';

import actions from '../store/actions';

const Home = () => {
  const isDarkMode = useColorScheme() === 'dark';
  const lnd = useSelector(state => state.lnd);
  const dispatch = useDispatch();

  console.info('lnd', lnd);

  useEffect(() => {
    dispatch(actions.lnd.getInfo());
  }, [dispatch]);

  return (
    <SafeAreaView>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />

      <ScrollView contentInsetAdjustmentBehavior="automatic">
        <View>
          <Text style={styles.title}>Wallet</Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  title: {
    fontWeight: '700',
  },
});

export default Home;
