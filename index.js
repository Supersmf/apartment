import {Navigation} from 'react-native-navigation';
import {pushMainScreen} from './src/navigation/index';

Navigation.events().registerAppLaunchedListener(() => pushMainScreen());
