// @flow
import React from 'react';
import {Navigation} from 'react-native-navigation';
import {MainScreen} from '../screens/index';
// import {Provider} from 'src/redux';
import {MAIN_SCREEN} from './Screens';

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

export default function() {
  Navigation.registerComponent(MAIN_SCREEN, () => MainScreen);
  // Navigation.registerComponent(LOGIN_SCREEN, () => WrappedComponent(LoginScreen));
  console.info('All screens have been registered...');
}
