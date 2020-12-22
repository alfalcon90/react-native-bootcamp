import createDataContext from './createDataContext';
import jsonServer from '../api/jsonServer';

const blogReducer = (state, action) => {
  switch (action.type) {
    case 'get_blogposts':
      return action.payload;
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

const getBlogPosts = (dispatch) => async () => {
  const res = await jsonServer.get('/blogposts');
  dispatch({ type: 'get_blogposts', payload: res.data });
};

const addBlogPost = () => async (title, content, callback) => {
  await jsonServer.post('/blogposts', { title, content });
  callback();
};

const removeBlogPost = (dispatch) => async (id) => {
  await jsonServer.delete(`/blogposts/${id}`);
  dispatch({ type: 'remove_blogpost', payload: id });
};

const editBlogPost = (dispatch) => async (id, title, content, callback) => {
  await jsonServer.put(`/blogposts/${id}`, { title, content });
  dispatch({ type: 'edit_blogpost', payload: { id, title, content } });
  callback();
};

export const { Context, Provider } = createDataContext(
  blogReducer,
  { addBlogPost, removeBlogPost, editBlogPost, getBlogPosts },
  [],
);
