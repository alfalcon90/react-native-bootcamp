import createDataContext from './createDataContext';

const blogReducer = (state, action) => {
  switch (action.type) {
    case 'get_blogposts':
      return action.payload;
    case 'add_blogpost':
      return [
        ...state,
        {
          id: Math.floor(Math.random() * 10000),
          title: action.payload.title,
          content: action.payload.content,
        },
      ];
    case 'remove_blogpost':
      return state.filter((blogPost) => blogPost.id !== action.payload);
    case 'edit_blogpost':
      return state.map((blogPost) => {
        return blogPost.id === action.payload.id ? action.payload : blogPost;
      });
    default:
      return state;
  }
};

const addBlogPost = (dispatch) => async (title, content, callback) => {
  dispatch({ type: 'add_blogpost', payload: { title, content } });
  callback();
};

const removeBlogPost = (dispatch) => (id) => {
  dispatch({ type: 'remove_blogpost', payload: id });
};

const editBlogPost = (dispatch) => (id, title, content, callback) => {
  dispatch({ type: 'edit_blogpost', payload: { id, title, content } });
  callback();
};

export const { Context, Provider } = createDataContext(
  blogReducer,
  { addBlogPost, removeBlogPost, editBlogPost },
  [{ title: 'Post Title', content: 'Post Content', id: 1 }],
);
