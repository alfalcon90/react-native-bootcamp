import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { Text, Input, Button } from 'react-native-elements';

const AuthForm = (props) => {
  const [email, setEmail] = useState(props.initialState.email);
  const [password, setPassword] = useState(props.initialState.password);

  return (
    <View>
      <Text h3 style={styles.header}>
        {props.headerLabel}
      </Text>
      <Input
        leftIcon={{ type: 'ionicon', name: 'mail-outline' }}
        leftIconContainerStyle={{ marginRight: 8 }}
        placeholder="Enter email"
        value={email}
        onChangeText={setEmail}
        autoCapitalize="none"
        autoCorrect={false}
      />
      <Input
        secureTextEntry
        leftIcon={{ type: 'ionicon', name: 'key-outline' }}
        leftIconContainerStyle={{ marginRight: 8 }}
        placeholder="Enter password"
        value={password}
        onChangeText={setPassword}
        autoCapitalize="none"
        autoCorrect={false}
      />
      {props.errorMessage ? (
        <Text style={styles.errorMessage}>{props.errorMessage}</Text>
      ) : null}
      <Button
        style={styles.button}
        title={props.primaryBtnLabel}
        onPress={() => props.onSubmit(email, password)}
      />
      <Button
        style={styles.button}
        title={props.secondaryBtnLabel}
        type="clear"
        onPress={props.onSecondaryPress}
      />
    </View>
  );
};

AuthForm.defaultProps = {
  initialState: {
    email: '',
    password: '',
  },
  headerLabel: 'Auth Form',
  errorMessage: null,
  primaryBtnLabel: 'Primary Button',
  secondaryBtnLabel: 'Secondary Button',
};

const styles = StyleSheet.create({
  header: {
    marginBottom: 40,
    textAlign: 'center',
  },
  button: {
    marginVertical: 8,
  },
  errorMessage: {
    fontSize: 16,
    color: 'red',
    marginBottom: 16,
    textAlign: 'center',
  },
});

export default AuthForm;
