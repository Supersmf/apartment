// @flow
import React, {useCallback} from 'react';
import {ScrollView, RefreshControl} from 'react-native';
import ItemRow from '../../components/ItemRow/ItemRow';
import {pushApartmentDetailsScreen} from '../../navigation/Navigation';
// import { Button } from 'react-native-elements';
// import { SFProDisplayMedium } from 'src/fonts';

const MainScreen = ({apartments, onRefresh, isRefreshing, componentId}) => (
  <ScrollView
    refreshControl={
      <RefreshControl refreshing={isRefreshing} onRefresh={onRefresh} />
    }>
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
