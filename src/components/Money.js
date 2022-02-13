import React, {useEffect} from 'react';
import {Text, TouchableOpacity, StyleSheet, View} from 'react-native';

const Money = ({value, currency = 'SATS'}) => {
  let number = value;
  if (currency === 'BTC') {
    number = number / 10000000;
    number = Intl.NumberFormat('en-US', {style: 'currency', currency}).format(
      number,
    );
    number = number.replace('BTC', '₿');
  } else if (currency === 'USD') {
    number = number / 10000000 * 40000;
    number = Intl.NumberFormat('en-US', {style: 'currency', currency}).format(
      number,
    );
  } else if (currency === 'SATS') {
    number = 'sats' + Intl.NumberFormat('en-US').format(number);
  } else {
    throw new Error('unknown currency');
  }
  return number;
};

export default Money;
