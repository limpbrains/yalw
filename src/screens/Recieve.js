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
import {useSelector, useDispatch} from 'react-redux';

import actions from '../store/actions';
import Transaction from '../components/Transaction';
import Money from '../components/Money';

const Recieve = ({navigation}) => {
  const isDarkMode = useColorScheme() === 'dark';
  const dispatch = useDispatch();
  const [fistStep, setFirstStep] = useState(true);
  const [amount, setAmount] = useState('0');
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
          <>
            <View style={styles.center}>
              <Text>QRCODE</Text>
              <Text>
                lntb1u1pwz5w78pp5e8w8cr5c30xzws92v36sk45znhjn098rtc4pea6ertnmvu25ng3sdpywd6hyetyvf5hgueqv3jk6meqd9h8vmmfvdjsxqrrssy29mzkzjfq27u67evzu893heqex737dhcapvcuantkztg6pnk77nrm72y7z0rs47wzc09vcnugk2ve6sr2ewvcrtqnh3yttv847qqvqpvv398
              </Text>
            </View>
            <Button title="Close" onPress={() => navigation.goBack()} />
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
