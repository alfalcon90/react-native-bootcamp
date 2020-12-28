import { useState, useEffect } from 'react';
import { watchLocation, stopWatchingLocation } from '../api/geolocation';

let watchId = null;

export default (shouldWatch, callback) => {
  const startWatching = async () => {
    watchId = await watchLocation(callback);
  };

  const stopWatching = () => {
    stopWatchingLocation(watchId);
  };

  useEffect(() => {
    shouldWatch ? startWatching() : stopWatching();
    return () => {
      stopWatching();
    };
  }, [shouldWatch, callback]);

  return;
};
