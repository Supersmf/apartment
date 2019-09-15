// @flow
import React, {PureComponent} from 'react';
import {ScrollView, RefreshControl} from 'react-native';
// import { Button } from 'react-native-elements';
import {Navigation} from 'react-native-navigation';

import {MAIN_SCREEN} from '../../navigation';
import ItemRow from '../../components/ItemRow/ItemRow';
import {pushApartmentDetailsScreen} from '../../navigation/Navigation';
// import { SFProDisplayMedium } from 'src/fonts';

class MainScreen extends React.Component {
  // const handleGetStartAction = screenType => {
  //   Navigation.push(componentId, {
  //     component: {
  //       name: MAIN_SCREEN,
  //       passProps: {
  //         screenType,
  //       },
  //       options: {
  //         topBar: {
  //           title: {
  //             text: 'LOGIN',
  //           },
  //         },
  //       },
  //     },
  //   });
  // };

  handleApartmentDetailsShow = () => {
    console.log(this.props);
    pushApartmentDetailsScreen(this.props.componentId);
  };
  render() {
    return (
      <ScrollView
        refreshControl={
          <RefreshControl
            refreshing={this.props.isRefreshing}
            onRefresh={this.props.onRefresh}
          />
        }>
        {this.props.apartments.map(apartment => (
          <ItemRow
            key={apartment.street + apartment.apartment}
            {...apartment}
            onPress={this.handleApartmentDetailsShow}
          />
        ))}
      </ScrollView>
    );
  }
}

export default MainScreen;
