import React from 'react';
import { View, Text, Image } from 'react-native';

const ImageDetail = (props) => {
  return (
    <View>
      <Image source={props.image} />
      <Text>{props.label}</Text>
      <Text>Image score - {props.score}</Text>
    </View>
  );
};

export default ImageDetail;
