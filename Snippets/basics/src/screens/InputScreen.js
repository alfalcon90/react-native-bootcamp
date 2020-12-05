import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput } from 'react-native';

const InputScreen = () => {
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');

  return (
    <View style={styles.view}>
      <Text style={styles.label}>Enter name:</Text>
      <TextInput
        autoCapitalize="none"
        autoCorrect={false}
        style={styles.input}
        value={name}
        onChangeText={(text) => setName(text)}
      />
      <Text style={styles.label}>My name is {name}</Text>
      <Text style={styles.label}>Enter password:</Text>
      <TextInput
        autoCapitalize="none"
        autoCorrect={false}
        style={styles.input}
        value={password}
        onChangeText={(text) => setPassword(text)}
      />
      {password.length < 6 ? (
        <Text>Password must be at least 6 characters</Text>
      ) : null}
    </View>
  );
};

const styles = StyleSheet.create({
  view: {
    padding: 16,
  },
  input: {
    marginVertical: 16,
    borderColor: 'black',
    borderWidth: 1,
  },
  label: {
    fontSize: 24,
  },
});

export default InputScreen;
