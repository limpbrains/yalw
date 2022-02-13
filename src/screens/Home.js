import React, {useEffect} from 'react';
import {
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  FlatList,
  Pressable,
} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';

import actions from '../store/actions';
import Transaction from '../components/Transaction';
import Money from '../components/Money';

const Home = ({navigation}) => {
  const isDarkMode = useColorScheme() === 'dark';
  const dispatch = useDispatch();
  const lnd = useSelector(state => state.lnd);
  const transactions = useSelector(state => state.transactions);

  console.info('transactions', transactions);

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
    <SafeAreaView style={styles.root}>
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

      <View style={styles.float}>
        <Pressable
          style={styles.fbutton}
          onPress={() => navigation.navigate('Recieve')}
        >
          <Text>Recieve</Text>
        </Pressable>
        <Pressable
          style={styles.fbutton}
          onPress={() => navigation.navigate('Send')}
        >
          <Text>Send</Text>
        </Pressable>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  root: {
    flex: 1,
  },
  title: {
    fontWeight: '700',
    marginVertical: 30,
    marginHorizontal: 10,
  },
  float: {
    backgroundColor: 'grey',
    position: 'absolute',
    bottom: 30,
    alignSelf: 'center',
    flexDirection: 'row',
  },
  fbutton: {
    padding: 10,
  },
});

export default Home;
