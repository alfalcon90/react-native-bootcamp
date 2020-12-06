import { useState, useEffect } from 'react';
import yelp from '../apis/yelp';

export default () => {
  const [results, setResults] = useState([]);
  const [errorMessage, setErrorMessage] = useState('');

  const fetchResults = async (searchTerm) => {
    try {
      const response = await yelp.get('/search', {
        params: {
          limit: 50,
          term: searchTerm,
          location: 'san francisco',
        },
      });
      setResults(response.data.businesses);
      setErrorMessage('');
    } catch (err) {
      setErrorMessage('Something went wrong');
    }
  };

  useEffect(() => {
    fetchResults('');
  }, []);

  return [fetchResults, results, errorMessage];
};
