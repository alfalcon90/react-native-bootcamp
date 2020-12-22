import React, { useContext } from 'react';
import { Context } from '../context/BlogContext';
import BlogPostForm from '../components/BlogPostForm';

const EditScreen = ({ route, navigation }) => {
  const { editBlogPost } = useContext(Context);

  return (
    <BlogPostForm
      initialState={{
        title: route.params.blogPost.title,
        content: route.params.blogPost.content,
      }}
      titleLabel="Edit Title"
      contentLabel="Edit Content"
      onSubmit={(title, content) =>
        editBlogPost(route.params.blogPost.id, title, content, () =>
          navigation.pop(),
        )
      }
    />
  );
};

export default EditScreen;
