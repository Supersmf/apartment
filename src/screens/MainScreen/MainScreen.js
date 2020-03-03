// @flow
import React from 'react';
import { View, Text, ScrollView, RefreshControl } from 'react-native';
import ItemRow from '../../components/ItemRow/ItemRow';
import { pushApartmentDetailsScreen } from '../../navigation/Navigation';
import { styles } from './styles';

const MainScreen = ({ apartments, onRefresh, isRefreshing, componentId }) => (
  <ScrollView
    style={styles.container}
    refreshControl={
      <RefreshControl refreshing={isRefreshing} onRefresh={onRefresh} />
    }>
    <View>
      <Text style={styles.title}>Minsk</Text>
      <Text style={styles.subtitle} />
    </View>
    {apartments.map(apartment => (
      <ItemRow
        key={apartment._id}
        {...apartment}
        onPress={() => pushApartmentDetailsScreen(componentId, apartment)}
      />
    ))}
  </ScrollView>
);

export default MainScreen;
