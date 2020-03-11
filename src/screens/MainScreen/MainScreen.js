import React from 'react';
import { View, Text, RefreshControl, Animated } from 'react-native';
import Spinner from 'react-native-spinkit';
import ItemRow from '../../components/ItemRow/ItemRow';
import { pushApartmentDetailsScreen } from '../../navigation/Navigation';
import { styles } from './styles';
import { colors } from '../../styles';
import Spindicator from '../../components/Spindicator';

const MainScreen = ({
  apartments,
  handleRefresh,
  isRefreshing,
  isLoadingMore,
  componentId,
  handleLoadMore,
  scrollPos,
  scrollSinkY,
}) => (
  <View style={styles.container}>
    <Text style={styles.title}>Minsk</Text>
    <Text style={styles.subtitle} />
    <Spindicator value={scrollPos} style={styles.spindicator} />
    <Animated.FlatList
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
      ListFooterComponent={
        isLoadingMore && (
          <Spinner
            style={styles.spinner}
            color={colors.secondary_color}
            size={50}
            type={'ThreeBounce'}
          />
        )
      }
      ListEmptyComponent={() => (
        <Spinner
          style={styles.emptySpinner}
          color={colors.primary_color}
          size={50}
          type={'9CubeGrid'}
        />
      )}
      onScroll={scrollSinkY}
      refreshControl={
        <RefreshControl refreshing={isRefreshing} onRefresh={handleRefresh} />
      }
    />
  </View>
);

export default MainScreen;
