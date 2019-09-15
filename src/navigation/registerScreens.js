// @flow
import React from 'react';
import {Navigation} from 'react-native-navigation';
import {Provider} from 'react-redux';
import createStore from '../store/createStore';
import {MainScreen, PropertyScreen, ApartmentDetailsScreen} from '../screens';
import {
  MAIN_SCREEN,
  PROPERTY_SCREEN,
  APARTMENT_DETAILS_SCREEN,
} from './Screens';

const initialState = window.___INITIAL_STATE__;
const store = createStore(initialState);

const WrappedComponent = Component => props => (
  <Provider store={store}>
    <Component {...props} />
  </Provider>
);

export default function() {
  Navigation.registerComponent(MAIN_SCREEN, () => WrappedComponent(MainScreen));
  Navigation.registerComponent(PROPERTY_SCREEN, () =>
    WrappedComponent(PropertyScreen),
  );
  Navigation.registerComponent(APARTMENT_DETAILS_SCREEN, () =>
    WrappedComponent(ApartmentDetailsScreen),
  );
  // Navigation.registerComponent(LOGIN_SCREEN, () => WrappedComponent(LoginScreen));
  console.info('All screens have been registered...');
}

// function WrappedComponent(Component) {
//   return function inject(props) {
//     const EnhancedComponent = () => (
//        <Provider>
//       <Component {...props} />
//        </Provider>
//     );

//     return <EnhancedComponent />;
//   };
// }
