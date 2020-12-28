import AsyncStorage from '@react-native-async-storage/async-storage';
import createDateContext from './createDataContext';
import trackApi from '../api/track';

const authReducer = (state, action) => {
  switch (action.type) {
    case 'add_error':
      return { ...state, errorMessage: action.payload };
    case 'clear_error':
      return { ...state, errorMessage: '' };
    case 'signin':
      return { token: action.payload, errorMessage: '' };
    case 'signout':
      return { token: null, errorMessage: '' };
    default:
      return state;
  }
};

const clearError = (dispatch) => () => {
  dispatch({ type: 'clear_error' });
};

const signUp = (dispatch) => async (email, password) => {
  try {
    const res = await trackApi.post('/signup', { email, password });
    await AsyncStorage.setItem('token', res.data.token);
    dispatch({ type: 'signin', payload: res.data.token });
  } catch (error) {
    dispatch({ type: 'add_error', payload: 'Something went wrong' });
  }
};

const signIn = (dispatch) => async (email, password) => {
  try {
    const res = await trackApi.post('/signin', { email, password });
    await AsyncStorage.setItem('token', res.data.token);
    dispatch({ type: 'signin', payload: res.data.token });
  } catch (error) {
    dispatch({ type: 'add_error', payload: 'Something went wrong' });
  }
};

const localSignIn = (dispatch) => async () => {
  const token = await AsyncStorage.getItem('token');
  if (token) {
    dispatch({ type: 'signin', payload: token });
  }
};

const signOut = (dispatch) => async () => {
  await AsyncStorage.removeItem('token');
  dispatch({ type: 'signout' });
};

export const { Provider, Context } = createDateContext(
  authReducer,
  { signUp, signIn, signOut, clearError, localSignIn },
  { token: null, errorMessage: '' },
);
