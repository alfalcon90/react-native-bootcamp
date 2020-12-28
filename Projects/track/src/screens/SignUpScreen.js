import React, { useContext, useEffect } from 'react';
import { StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Context as AuthContext } from '../context/AuthContext';
import AuthForm from '../components/AuthForm';

const SignUpScreen = ({ navigation }) => {
  const { state, signUp, clearError } = useContext(AuthContext);

  useEffect(() => {
    const unsubscribe = navigation.addListener('focus', () => {
      clearError();
    });

    return unsubscribe;
  }, [navigation]);

  return (
    <SafeAreaView style={styles.container}>
      <AuthForm
        headerLabel="Sign Up"
        errorMessage={state.errorMessage}
        primaryBtnLabel="Sign Up"
        secondaryBtnLabel="Already have an account? Sign in"
        onSubmit={signUp}
        onSecondaryPress={() => navigation.navigate('SignIn')}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 16,
    marginBottom: 200,
    flex: 1,
    justifyContent: 'center',
  },
});

export default SignUpScreen;
