import React from 'react';
import { Image, Text, StyleSheet, TouchableOpacity } from 'react-native';

const ResultsItem = ({ result, onPress }) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.container}>
      <Image source={{ uri: result.image_url }} style={styles.image} />
      <Text ellipsizeMode="tail" numberOfLines={1} style={styles.name}>
        {result.name}
      </Text>
      <Text style={styles.meta}>
        {result.rating} Stars, {result.review_count} Reviews
      </Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 8,
    width: 260,
  },
  image: {
    width: '100%',
    height: 160,
    borderRadius: 8,
    marginBottom: 4,
  },
  name: {
    fontWeight: 'bold',
    fontSize: 16,
  },
  meta: {
    color: 'gray',
  },
});

export default ResultsItem;
