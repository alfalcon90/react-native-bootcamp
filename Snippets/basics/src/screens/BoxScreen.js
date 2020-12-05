import React from 'react';
import { View, StyleSheet } from 'react-native';

const BoxScreen = () => {
  return (
    <View style={styles.view}>
      <View style={styles.red} />
      <View style={styles.green} />
      <View style={styles.blue} />
    </View>
  );
};

const styles = StyleSheet.create({
  view: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    height: 200,
  },
  red: {
    height: 100,
    width: 100,
    backgroundColor: 'red',
  },
  green: {
    height: 100,
    width: 100,
    backgroundColor: 'green',
    alignSelf: 'flex-end',
  },
  blue: {
    height: 100,
    width: 100,
    backgroundColor: 'blue',
  },
});

export default BoxScreen;
