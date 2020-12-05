import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const ComponentsScreen = () => {
  const name = 'Bemmy';

  return (
    <View>
      <Text style={styles.header}>Getting started with React Native!</Text>
      <Text style={styles.subheader}>My name is {name}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    fontSize: 40,
  },
  subheader: {
    fontSize: 24,
  },
});

export default ComponentsScreen;
