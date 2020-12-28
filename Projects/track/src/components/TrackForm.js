import React, { useContext } from 'react';
import { View, StyleSheet } from 'react-native';
import { Input, Button } from 'react-native-elements';
import { Context as LocationContext } from '../context/LocationContext';
import useSaveTrack from '../hooks/useSaveTrack';

const TrackForm = () => {
  const {
    state: { name, recording, locations },
    startRecording,
    stopRecording,
    changeName,
  } = useContext(LocationContext);
  const [saveTrack] = useSaveTrack();

  return (
    <View>
      <Input onChangeText={changeName} value={name} placeholder="Enter name" />
      {recording ? (
        <Button
          onPress={stopRecording}
          title="Stop Recording"
          buttonStyle={{ backgroundColor: 'red' }}
          style={styles.button}
        />
      ) : (
        <Button
          onPress={startRecording}
          title="Start Recording"
          style={styles.button}
        />
      )}
      {!recording && locations.length ? (
        <Button
          onPress={saveTrack}
          title="Save Recording"
          style={styles.button}
        />
      ) : null}
    </View>
  );
};

const styles = StyleSheet.create({
  button: {
    marginVertical: 8,
  },
});

export default TrackForm;
