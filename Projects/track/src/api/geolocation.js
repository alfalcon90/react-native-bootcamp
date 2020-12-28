import { Alert, Linking, Platform } from 'react-native';
import Geolocation from 'react-native-geolocation-service';
import { check, request, PERMISSIONS } from 'react-native-permissions';

const title = 'Turn on Location';
const body = 'The app is not very useful without access to your location.';

const openSetting = () => {
  Linking.openSettings().catch(() => {
    Alert.alert('Unable to open settings');
  });
};

const showDialog = () => {
  Alert.alert(title, body, [
    { text: 'Cancel', onPress: () => {} },
    { text: 'Go to Settings', onPress: openSetting },
  ]);
};

export const getLocationPermission = async () => {
  if (Platform.OS === 'android' && Platform.Version < 23) {
    return true;
  }

  const permissionStr =
    Platform.OS === 'android'
      ? PERMISSIONS.ANDROID.ACCESS_FINE_LOCATION
      : PERMISSIONS.IOS.LOCATION_WHEN_IN_USE;

  let hasPermission = await check(permissionStr);
  if (hasPermission === 'granted') {
    return true;
  }

  hasPermission = await request(permissionStr);
  if (hasPermission === 'granted' || hasPermission === 'limited') {
    return true;
  }

  return false;
};

const config = {
  enableHighAccuracy: true,
  timeout: 15000,
  maximumAge: 10000,
  distanceFilter: 100,
  interval: Platform.OS === 'android' ? 10000 : null,
  fastestInterval: Platform.OS === 'android' ? 5000 : null,
  useSignificantChanges: Platform.OS === 'ios' ? true : null,
};

export const watchLocation = async (callback) => {
  const hasPermission = await getLocationPermission();
  if (!hasPermission) {
    showDialog();
  } else {
    const watchId = Geolocation.watchPosition(
      ({ coords }) => callback(coords),
      (error) => {
        console.log(error.code, error.message);
      },
      { config },
    );

    return watchId;
  }
};

export const stopWatchingLocation = (watchId) => {
  Geolocation.clearWatch(watchId);
};
