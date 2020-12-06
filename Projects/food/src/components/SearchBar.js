import React from 'react';
import { View, TextInput, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const SearchBar = ({ term, onChangeText, onSubmit }) => {
  return (
    <View style={styles.container}>
      <View style={styles.iconContainer}>
        <Icon name="search" size={24} color="black" />
      </View>
      <TextInput
        value={term}
        onChangeText={onChangeText}
        onEndEditing={onSubmit}
        style={styles.input}
        autoCapitalize="none"
        autoCorrect={false}
        placeholder="Search"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#f0EEEE',
    height: 48,
    borderRadius: 24,
    flexDirection: 'row',
  },
  input: {
    flex: 1,
    fontSize: 16,
  },
  iconContainer: {
    height: 48,
    width: 48,
    marginLeft: 8,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default SearchBar;
