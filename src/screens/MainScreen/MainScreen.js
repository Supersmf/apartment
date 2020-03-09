import React from 'react';
import { View, Text, ScrollView, RefreshControl, FlatList } from 'react-native';
import ItemRow from '../../components/ItemRow/ItemRow';
import { pushApartmentDetailsScreen } from '../../navigation/Navigation';
import { styles } from './styles';

const MainScreen = ({
  apartments,
  handleRefresh,
  isRefreshing,
  componentId,
  handleLoadMore,
}) => (
  // <ScrollView
  //   style={styles.container}
  //   refreshControl={
  //     <RefreshControl refreshing={isRefreshing} onRefresh={onRefresh} />
  //   }>
  // {apartments.map(apartment => (
  //   <ItemRow
  //     key={apartment._id}
  //     {...apartment}
  //     onPress={() => pushApartmentDetailsScreen(componentId, apartment)}
  //   />
  // ))}
  <View>
    <Text style={styles.title}>Minsk</Text>
    <Text style={styles.subtitle} />
    <FlatList
      data={apartments}
      renderItem={({ item }) => (
        <ItemRow
          key={item._id}
          {...item}
          onPress={() => pushApartmentDetailsScreen(componentId, item)}
        />
      )}
      keyExtractor={item => item._id}
      onEndReached={handleLoadMore}
      onEndReachedThreshold={0.01}
      // refreshing={handleRefresh}
    />
  </View>
  // </ScrollView>
);

export default MainScreen;
