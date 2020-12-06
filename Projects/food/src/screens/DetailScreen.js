import React, { useState, useEffect } from 'react';
import { View, FlatList, Image, StyleSheet } from 'react-native';
import yelp from '../apis/yelp';

const DetailScreen = ({ route }) => {
  const [result, setResult] = useState(null);

  const fetchBusiness = async (id) => {
    try {
      const response = await yelp.get(`/${id}`);
      setResult(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchBusiness(route.params.id);
  }, [route.params.id]);

  if (!result) {
    return null;
  }

  return (
    <View>
      <FlatList
        data={result.photos}
        keyExtractor={(photo) => photo}
        renderItem={({ item }) => (
          <Image style={styles.image} source={{ uri: item }} />
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  image: {
    height: 240,
    width: '100%',
    marginVertical: 8,
  },
});

export default DetailScreen;
