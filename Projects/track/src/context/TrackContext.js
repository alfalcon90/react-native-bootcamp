import createDateContext from './createDataContext';
import trackApi from '../api/track';

const trackReducer = (state, action) => {
  switch (action.type) {
    case 'fetch_tracks':
      return action.payload;
    default:
      return state;
  }
};

const fetchTracks = (dispatch) => async () => {
  const res = await trackApi.get('/tracks');
  dispatch({ type: 'fetch_tracks', payload: res.data });
};

const createTrack = (dispatch) => async (name, locations) => {
  await trackApi.post('/tracks', { name, locations });
};

export const { Provider, Context } = createDateContext(
  trackReducer,
  { fetchTracks, createTrack },
  {},
);
