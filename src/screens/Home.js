import React, {useEffect} from 'react';
import {
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  FlatList,
} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';

import actions from '../store/actions';
import Transaction from '../components/Transaction';
import Money from '../components/Money';

const Home = () => {
  const isDarkMode = useColorScheme() === 'dark';
  const dispatch = useDispatch();
  const lnd = useSelector(state => state.lnd);
  const transactions = useSelector(state => state.transactions);

  useEffect(() => {
    // dispatch(actions.lnd.getInfo());
    dispatch(actions.lnd.mockBalanceProgress());
  }, [dispatch]);

  const renderTransaction = tx => (
    <Transaction
      {...tx.item}
      onPress={() => {
        console.info(tx.item.id);
      }}
    />
  );

  return (
    <SafeAreaView>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />

      <View>
        <Text style={styles.title}>Wallet</Text>
        <Text>Total balance</Text>
        <Text>
          <Money value={lnd.balance} />
        </Text>
        <Text>
          synched to chain:{' '}
          {lnd.synchProgress === 100 ? '✅' : lnd.synchProgress}
        </Text>
        <Text>pending channels: 0</Text>
        <FlatList
          data={transactions.list}
          renderItem={renderTransaction}
          keyExtractor={item => item.id}
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  title: {
    fontWeight: '700',
    marginVertical: 30,
    marginHorizontal: 10,
  },
});

export default Home;
