import { useEffect } from 'react';
import { Navigation } from 'react-native-navigation';

export const useNavigationEvent = ({ componentId, onMount, onUnMount }) => {
  useEffect(() => {
    const navListener = Navigation.events().bindComponent(this, componentId);
    return () => {
      navListener.remove();
    };
  }, [componentId]);

  if (onMount) {
    this.componentDidAppear = onMount;
  }

  if (onUnMount) {
    this.componentDidDisappear = onUnMount;
  }
};

export default useNavigationEvent;
