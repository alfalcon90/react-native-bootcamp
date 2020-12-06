import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import ResultsItem from '../components/ResultsItem';

const ResultsList = ({ title, results }) => {
  const navigation = useNavigation();

  if (!results.length) {
    return null;
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <FlatList
        horizontal
        data={results}
        keyExtractor={(result) => result.id}
        renderItem={({ item }) => (
          <ResultsItem
            result={item}
            onPress={() =>
              navigation.navigate('Detail', { id: item.id, name: item.name })
            }
          />
        )}
        showsHorizontalScrollIndicator={false}
        style={styles.list}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    marginTop: 16,
    marginHorizontal: -16,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginLeft: 16,
  },
  list: {
    paddingLeft: 8,
    marginTop: 12,
  },
});

export default ResultsList;
