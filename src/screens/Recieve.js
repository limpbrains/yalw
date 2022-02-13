import React, { useState} from 'react';
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
import {useSelector, useDispatch} from 'react-redux';

import actions from '../store/actions';
import Transaction from '../components/Transaction';
import Money from '../components/Money';

const Recieve = () => {
  const isDarkMode = useColorScheme() === 'dark';
  const dispatch = useDispatch();
  const [fistStep, setFirstStep] = useState(true);
  const [amount, setAmount] = useState(0);
  const [note, setNote] = useState('');

  return (
    <SafeAreaView style={styles.root}>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />

      <View>
        <Text style={styles.title}>Recieve</Text>

        {fistStep ? (
          <>
            <View style={styles.center}>
              <Text>Amount in sats</Text>
              <TextInput
                style={styles.inputAmount}
                onChangeText={setAmount}
                value={amount}
                autoFocus
              />
              <Text>
                <Money value={amount} currency="USD" />
              </Text>
            </View>
            <Text>Note</Text>
            <TextInput
              style={styles.inputNote}
              onChangeText={setNote}
              value={note}
            />
            <Button
              title="Create Invoice"
              onPress={() => {
                setFirstStep(false);
              }}
            />
          </>
        ) : (
          <></>
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
  inputAmount: {
    height: 50,
    margin: 12,
    padding: 10,
    fontWeight: '700',
    fontSize: 30,
  },
  inputNote: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
});

export default Recieve;
