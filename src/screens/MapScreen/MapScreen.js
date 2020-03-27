import React from 'react';
import { View, StyleSheet } from 'react-native';
import MapView, { PROVIDER_GOOGLE, Marker } from 'react-native-maps'; // remove PROVIDER_GOOGLE import if not using Google Maps

const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
  },
  map: {
    ...StyleSheet.absoluteFillObject,
  },
});

const MapScreen = ({ apartments }) => (
  <View style={styles.container}>
    <MapView
      provider={PROVIDER_GOOGLE} // remove if not using Google Maps
      style={styles.map}
      region={{
        latitude: 53.9,
        longitude: 27.5667,
        latitudeDelta: 0.27,
        longitudeDelta: 0.27,
      }}>
      {apartments.map(({ location: { latitude, longitude } }, _id) => (
        <Marker key={_id} coordinate={{ latitude, longitude }} />
      ))}
    </MapView>
  </View>
);

export default MapScreen;
