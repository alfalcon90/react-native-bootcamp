import React from 'react';
import { View, Text } from 'react-native';
import ImageDetail from '../components/ImageDetail';

const ImageScreen = () => {
  return (
    <View>
      <Text>Image Screen</Text>
      <ImageDetail
        image={require('../res/img/beach.jpg')}
        label="Beach"
        score="8"
      />
      <ImageDetail
        image={require('../res/img/forest.jpg')}
        label="Forest"
        score="10"
      />
      <ImageDetail
        image={require('../res/img/mountain.jpg')}
        label="Mountain"
        score="9"
      />
    </View>
  );
};

export default ImageScreen;
