import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import SearchBar from '../components/SearchBar';
import ResultsList from '../components/ResultsList';
import useResults from '../hooks/useResults';

const SearchScreen = () => {
  const [term, setTerm] = useState('');
  const [fetchResults, results, errorMessage] = useResults();

  const filterResultsByPrice = (price) => {
    return results.filter((result) => {
      return result.price === price;
    });
  };

  return (
    <ScrollView>
      <View style={styles.container}>
        <SearchBar
          term={term}
          onChangeText={setTerm}
          onSubmit={() => fetchResults(term)}
        />
        {errorMessage ? <Text>{errorMessage}</Text> : null}
        <ResultsList results={filterResultsByPrice('$')} title="Value Meals" />
        <ResultsList results={filterResultsByPrice('$$')} title="Happy Meals" />
        <ResultsList
          results={filterResultsByPrice('$$$')}
          title="Treat Yo Self"
        />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    margin: 16,
    marginBottom: 56,
  },
});

export default SearchScreen;
