import React, {useEffect} from 'react';
import {Text, TouchableOpacity, StyleSheet, View} from 'react-native';

import Money from './Money';

const Transaction = ({id, date, status, value, onPress}) => {
  let label;
  let sign;
  switch (status) {
    case 'sent':
      label = 'Sent';
      sign = '-';
      break;
    case 'recieved':
      label = 'Recieved';
      sign = '+';
      break;
    default:
      label = 'Pending';
      sign = '';
  }

  return (
    <TouchableOpacity onPress={onPress} style={[styles.root]}>
      <View style={styles.icon} />
      <View style={styles.container}>
        <View style={styles.row}>
          <Text>{label}</Text>
          <Text>
            {sign} <Money value={value} currency="BTC" />
          </Text>
        </View>
        <View style={styles.row}>
          <Text>{date}</Text>
          <Text>
            <Money value={value} currency="USD" />
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  root: {
    flexDirection: 'row',
    marginTop: 8,
    paddingHorizontal: 8,
  },
  container: {
    flex: 1,
    marginLeft: 4,
  },
  icon: {
    width: 40,
    height: 40,
    backgroundColor: 'grey',
  },
  row: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    marginBottom: 4,
  },
});

export default Transaction;
