// @flow
import React from 'react';
import {Navigation} from 'react-native-navigation';
import {MainScreen} from '../screens/index';
import {Provider} from 'react-redux';
// import {Provider} from 'src/redux';
import {MAIN_SCREEN} from './Screens';
import createStore from '../store/createStore';

const initialState = window.___INITIAL_STATE__;
export const store = createStore(initialState);

const WrappedComponent = Component => props => (
  <Provider store={store}>
    <Component {...props} />
  </Provider>
);

export default function() {
  Navigation.registerComponent(MAIN_SCREEN, () => WrappedComponent(MainScreen));
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
