import { Navigation } from 'react-native-navigation';
import IconMaterialIcons from 'react-native-vector-icons/MaterialIcons';
import IconOcticons from 'react-native-vector-icons/Octicons';

import {
  MAIN_SCREEN,
  PROPERTY_SCREEN,
  APARTMENT_DETAILS_SCREEN,
  MAP_SCREEN,
} from './Screens';
import registerScreens from './registerScreens';

const icons = [];

export const loadIcons = Promise.all([
  IconMaterialIcons.getImageSource('domain', 25),
  IconMaterialIcons.getImageSource('map', 25),
  IconMaterialIcons.getImageSource('menu', 25, 'white'),
  IconMaterialIcons.getImageSource('language', 25, 'white'),
  IconOcticons.getImageSource('settings', 25),
])
  .then(sources => {
    [
      icons.domain,
      icons.map,
      icons.menu,
      icons.language,
      icons.settings,
    ] = sources;
    return true;
  })
  .catch(error => error);

registerScreens();

export function pushMainScreen() {
  loadIcons.then(() => {
    const commonTopBar = {
      title: {
        text: 'Apartment App',
      },
      leftButtons: [
        {
          id: 'nav_user_btn',
          icon: icons.menu,
        },
      ],
      rightButtons: [
        {
          id: 'nav_logout_btn',
          icon: icons.language,
        },
      ],
    };

    Navigation.setDefaultOptions({
      topBar: {
        background: {
          color: '#039893',
        },
        title: {
          color: 'white',
        },
        backButton: {
          title: '',
          color: 'white',
        },
        buttonColor: 'white',
      },
      statusBar: {
        style: 'light',
      },
      layout: {
        orientation: ['portrait'],
      },
      bottomTabs: {
        titleDisplayMode: 'alwaysShow',
      },
      bottomTab: {
        textColor: 'gray',
        selectedTextColor: 'black',
        iconColor: 'gray',
        selectedIconColor: 'black',
      },
    });

    Navigation.setRoot({
      root: {
        id: 'MAIN_SCREEN',
        bottomTabs: {
          children: [
            {
              stack: {
                children: [
                  {
                    component: {
                      name: MAIN_SCREEN,
                      options: {
                        topBar: commonTopBar,
                      },
                    },
                  },
                ],
                options: {
                  bottomTab: {
                    icon: icons.domain,
                    testID: 'FIRST_TAB_BAR_BUTTON',
                  },
                },
              },
            },
            {
              stack: {
                children: [
                  {
                    component: {
                      name: MAP_SCREEN,
                      options: {
                        topBar: commonTopBar,
                      },
                    },
                  },
                ],
                options: {
                  bottomTab: {
                    icon: icons.map,
                    testID: 'SECOND_TAB_BAR_BUTTON',
                  },
                },
              },
            },
            {
              stack: {
                children: [
                  {
                    component: {
                      name: PROPERTY_SCREEN,
                      options: {
                        topBar: commonTopBar,
                      },
                    },
                  },
                ],
                options: {
                  bottomTab: {
                    icon: icons.settings,
                    testID: 'SECOND_TAB_BAR_BUTTON',
                  },
                },
              },
            },
          ],
        },
      },
    });
  });
}

export const pushApartmentDetailsScreen = (componentId, props) => {
  Navigation.push(componentId, {
    component: {
      name: APARTMENT_DETAILS_SCREEN,
      passProps: props,
      options: {
        topBar: {
          title: {
            text: 'ApartmentDetailScreen',
          },
        },
        bottomTabs: {
          visible: false,
          translucent: true,
          drawBehind: true,
        },
      },
    },
  });
};
