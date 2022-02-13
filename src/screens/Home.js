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
  const ldk = useSelector(state => state.ldk);
  const dispatch = useDispatch();

  console.info('ldk', ldk);

  useEffect(() => {
    dispatch(actions.ldk.getInfo());
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
