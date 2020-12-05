import React from 'react';
import {
  View,
  Text,
  Button,
  Pressable,
  Platform,
  StyleSheet,
} from 'react-native';

const Homescreen = ({ navigation }) => {
  return (
    <View>
      <Button
        title="Console Log"
        onPress={() => console.log(`Button pressed on ${Platform.OS}`)}
      />
      <Button
        title="Components"
        onPress={() => navigation.navigate('Components')}
      />
      <Button title="List" onPress={() => navigation.navigate('List')} />
      <Button title="Image" onPress={() => navigation.navigate('Image')} />
      <Button title="Counter" onPress={() => navigation.navigate('Counter')} />
      <Button title="Color" onPress={() => navigation.navigate('Color')} />
      <Button title="Square" onPress={() => navigation.navigate('Square')} />
      <Button title="Input" onPress={() => navigation.navigate('Input')} />
      <Button title="Box Model" onPress={() => navigation.navigate('Box')} />
      <Pressable
        style={styles.pressable}
        onPress={() => console.log('Pressable was pressed')}>
        <Text style={styles.text}>Pressable API</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  pressable: {
    height: 48,
    display: 'flex',
    width: '100%',
    backgroundColor: 'blue',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: 'white',
  },
});

export default Homescreen;
