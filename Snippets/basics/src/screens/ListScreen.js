import React from 'react';
import { FlatList, View, Text, StyleSheet } from 'react-native';

const ListScreen = () => {
  const friends = [
    { name: 'Friend #1', age: 23 },
    { name: 'Friend #2', age: 54 },
    { name: 'Friend #3', age: 43 },
    { name: 'Friend #4', age: 23 },
    { name: 'Friend #5', age: 24 },
    { name: 'Friend #6', age: 56 },
    { name: 'Friend #7', age: 34 },
    { name: 'Friend #8', age: 13 },
    { name: 'Friend #9', age: 45 },
  ];

  return (
    <View>
      <FlatList
        keyExtractor={(friend) => friend.name}
        data={friends}
        renderItem={({ item }) => {
          return (
            <Text style={styles.text}>
              {item.name} - Age {item.age}
            </Text>
          );
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    marginVertical: 48,
  },
});

export default ListScreen;
