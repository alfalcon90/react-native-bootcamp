import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, Button } from 'react-native';

const BlogPostForm = (props) => {
  const [title, setTitle] = useState(props.initialState.title);
  const [content, setContent] = useState(props.initialState.content);

  return (
    <View style={styles.container}>
      <Text style={styles.label}>{props.titleLabel}</Text>
      <TextInput
        style={styles.input}
        value={title}
        onChangeText={(text) => setTitle(text)}
      />
      <Text style={styles.label}>{props.contentLabel}</Text>
      <TextInput
        style={styles.input}
        value={content}
        onChangeText={(text) => setContent(text)}
      />
      <Button
        title={props.btnLabel}
        onPress={() => props.onSubmit(title, content)}
      />
    </View>
  );
};

BlogPostForm.defaultProps = {
  initialState: {
    title: '',
    content: '',
  },
  btnLabel: 'Save Blog Post',
  titleLabel: 'Title',
  contentLabel: 'Content',
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
  },
  input: {
    fontSize: 18,
    borderWidth: 1,
    borderColor: 'black',
    marginBottom: 16,
  },
  label: {
    fontSize: 20,
    marginBottom: 8,
  },
});

export default BlogPostForm;
