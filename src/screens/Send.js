import React, {useState} from 'react';
import {
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  TextInput,
  Button,
} from 'react-native';
import {useDispatch} from 'react-redux';

import actions from '../store/actions';
import Money from '../components/Money';

const Recieve = ({navigation}) => {
  const isDarkMode = useColorScheme() === 'dark';
  const dispatch = useDispatch();
  const [invoice, setInvoice] = useState('');
  const amount = 12345678;

  return (
    <SafeAreaView style={styles.root}>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />

      <View>
        <Text style={styles.title}>Send</Text>

        <Text>Invoice</Text>
        <TextInput
          style={styles.inputInvoice}
          onChangeText={setInvoice}
          value={invoice}
        />
        {invoice.length > 5 && (
          <>
            <View style={styles.center}>
              <Text style={styles.amountUSD}>
                <Money value={amount} currency="USD" />
              </Text>
              <Text>
                <Money value={amount} currency="BTC" />
              </Text>
            </View>
            <Text>Note</Text>
            <Text>Transaction note</Text>
            <Button
              title="Send"
              onPress={() => {
                dispatch(
                  actions.transactions.add({
                    id: Math.random(),
                    date: Math.floor(Date.now() / 1000),
                    status: 'sent',
                    value: amount,
                  }),
                );

                navigation.goBack();
              }}
            />
          </>
        )}
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
  center: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: 300,
  },
  amountUSD: {
    fontWeight: '700',
    fontSize: 30,
  },
  inputInvoice: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
});

export default Recieve;
