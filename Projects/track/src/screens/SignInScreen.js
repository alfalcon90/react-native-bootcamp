import React, { useContext, useEffect } from 'react';
import { StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Context as AuthContext } from '../context/AuthContext';
import AuthForm from '../components/AuthForm';

const SignInScreen = ({ navigation }) => {
  const { state, signIn, clearError } = useContext(AuthContext);

  useEffect(() => {
    const unsubscribe = navigation.addListener('focus', () => {
      clearError();
    });

    return unsubscribe;
  }, [navigation]);

  return (
    <SafeAreaView style={styles.container}>
      <AuthForm
        headerLabel="Sign In"
        errorMessage={state.errorMessage}
        primaryBtnLabel="Sign In"
        secondaryBtnLabel="Don't have an account? Sign up"
        onSubmit={signIn}
        onSecondaryPress={() => navigation.navigate('SignUp')}
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

export default SignInScreen;
