import { useLayoutEffect } from 'react';
import { Navigation } from 'react-native-navigation';

const useComponentDidAppear = (handler, componentId) => {
  useLayoutEffect(() => {
    const subscription = Navigation.events().registerComponentDidAppearListener(
      event => {
        if (componentId && event.componentId === componentId) {
          handler(event);
        }
      },
    );

    return () => subscription.remove();
  }, [handler, componentId]);
};

const useComponentDidDisappear = (handler, componentId) => {
  useLayoutEffect(() => {
    const subscription = Navigation.events().registerComponentDidDisappearListener(
      event => {
        if (componentId && event.componentId === componentId) {
          handler(event);
        }
      },
    );

    return () => subscription.remove();
  }, [handler, componentId]);
};

export { useComponentDidAppear, useComponentDidDisappear };
