import React, { useContext, useState, useCallback } from 'react';
import { View, StyleSheet } from 'react-native';
import { Text } from 'react-native-elements';
import { useFocusEffect } from '@react-navigation/native';
import Map from '../components/Map';
import { Context as LocationContext } from '../context/LocationContext';
import useLocation from '../hooks/useLocation';
import TrackForm from '../components/TrackForm';

const TrackCreateScreen = () => {
  const {
    state: { recording },
    addLocation,
  } = useContext(LocationContext);
  const [isFocused, setIsFocused] = useState(true);
  const callback = useCallback(
    (location) => {
      addLocation(location, recording);
    },
    [recording],
  );
  useLocation(isFocused || recording, callback);

  useFocusEffect(
    useCallback(() => {
      setIsFocused(true);
      return () => setIsFocused(false);
    }, []),
  );

  return (
    <View style={styles.container}>
      <Text h3>Create a Track</Text>
      <View style={styles.map}>
        <Map />
      </View>
      <TrackForm />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 16,
    paddingTop: 24,
    justifyContent: 'center',
  },
  map: {
    marginBottom: 16,
    marginTop: 16,
  },
});

export default TrackCreateScreen;
