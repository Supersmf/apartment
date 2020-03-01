// @flow
import React, { useCallback } from 'react';
import {
  View,
  Text,
  ScrollView,
  RefreshControl,
  StyleSheet,
} from 'react-native';
import ItemRow from '../../components/ItemRow/ItemRow';
import { pushApartmentDetailsScreen } from '../../navigation/Navigation';
// import { Button } from 'react-native-elements';
// import { SFProDisplayMedium } from 'src/fonts';

const MainScreen = ({ apartments, onRefresh, isRefreshing, componentId }) => (
  <ScrollView
    style={styles.container}
    refreshControl={
      <RefreshControl refreshing={isRefreshing} onRefresh={onRefresh} />
    }>
    <View>
      <Text style={styles.title}>{apartments[0].city}</Text>
      <Text style={styles.subtitle}>
        Rooms count: {apartments[0].roomsCount}
      </Text>
    </View>
    <View style={styles.itemsContainer}>
      {apartments.map(apartment => (
        <ItemRow
          key={apartment._id}
          {...apartment}
          onPress={() => pushApartmentDetailsScreen(componentId, apartment)}
        />
      ))}
    </View>
  </ScrollView>
);

export default MainScreen;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#f7f7f7',
    padding: 10,
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
  },
  subtitle: {
    fontSize: 16,
    color: 'grey',
  },
  itemsContainer: {
    // padding: 10,
  },
});
