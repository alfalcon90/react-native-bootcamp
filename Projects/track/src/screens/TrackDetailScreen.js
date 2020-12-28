import React, { useContext } from 'react';
import { View, StyleSheet } from 'react-native';
import { Text } from 'react-native-elements';
import MapView, { Polyline } from 'react-native-maps';
import { Context as TrackContext } from '../context/TrackContext';

const TrackDetailScreen = ({ route }) => {
  const { state } = useContext(TrackContext);
  const track = state.find((t) => t._id === route.params._id);
  const intialCoords = track.locations[0];

  return (
    <View style={styles.container}>
      <Text h3>{track.name}</Text>
      <MapView
        style={styles.map}
        initialRegion={{
          ...intialCoords,
          latitudeDelta: 0.01,
          longitudeDelta: 0.01,
        }}>
        <Polyline coordinates={track.locations} />
      </MapView>
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
    height: 300,
  },
});

export default TrackDetailScreen;
