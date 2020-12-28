/**
 * @format
 */
import React from 'react';
import { AppRegistry } from 'react-native';
import App from './App';
import { name as appName } from './app.json';
import { Provider as AuthProvider } from './src/context/AuthContext';
import { Provider as LocationProvider } from './src/context/LocationContext';
import { Provider as TrackProvider } from './src/context/TrackContext';

const ContextProvider = ({ children }) => {
  return (
    <AuthProvider>
      <LocationProvider>
        <TrackProvider>{children}</TrackProvider>
      </LocationProvider>
    </AuthProvider>
  );
};

const AppContainer = () => {
  return (
    <ContextProvider>
      <App />
    </ContextProvider>
  );
};

AppRegistry.registerComponent(appName, () => AppContainer);
