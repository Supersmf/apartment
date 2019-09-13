// @flow
import React, {PureComponent} from 'react';
import {ScrollView, RefreshControl} from 'react-native';
// import { Button } from 'react-native-elements';
import {Navigation} from 'react-native-navigation';

import {MAIN_SCREEN} from '../../navigation';
import ItemRow from '../../components/ItemRow';
// import { SFProDisplayMedium } from 'src/fonts';

const MainScreen = ({
  apartments = [],
  isRefreshing,
  onRefresh,
  componentId,
}) => {
  const handleGetStartAction = screenType => {
    Navigation.push(componentId, {
      component: {
        name: MAIN_SCREEN,
        passProps: {
          screenType,
        },
        options: {
          topBar: {
            title: {
              text: 'LOGIN',
            },
          },
        },
      },
    });
  };

  return (
    <ScrollView
      refreshControl={
        <RefreshControl refreshing={isRefreshing} onRefresh={onRefresh} />
      }>
      {apartments.map(apartment => (
        <ItemRow key={apartment.street + apartment.apartment} {...apartment} />
      ))}
    </ScrollView>
  );
};

export default MainScreen;
