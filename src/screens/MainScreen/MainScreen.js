import React from 'react';
import { View, Text, ScrollView, RefreshControl, FlatList } from 'react-native';
import Spinner from 'react-native-spinkit';
import ItemRow from '../../components/ItemRow/ItemRow';
import { pushApartmentDetailsScreen } from '../../navigation/Navigation';
import { styles } from './styles';
import { colors } from '../../styles';

const Loader = () => (
  <Spinner
    style={styles.spinner}
    color={colors.secondary_color}
    size={50}
    type={'ThreeBounce'}
  />
);

const MainScreen = ({
  apartments,
  handleRefresh,
  isRefreshing,
  componentId,
  handleLoadMore,
}) => (
  <View style={styles.container}>
    <Text style={styles.title}>Minsk</Text>
    <Text style={styles.subtitle} />
    <FlatList
      style={styles.list}
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
      ListFooterComponent={Loader}
      refreshing={handleRefresh}
      // ListHeaderComponent={Loader}
    />
  </View>
);

export default MainScreen;
