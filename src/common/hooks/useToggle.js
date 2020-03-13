import { useCallback, useState } from 'react';

const useToggle = initialState => {
  const [isToggledOn, setToggle] = useState(initialState);
  const toggle = useCallback(() => setToggle(isOn => !isOn), []);
  const setToggleOn = useCallback(() => setToggle(true), []);
  const setToggleOff = useCallback(() => setToggle(false), []);

  return {
    isToggledOn,
    toggle,
    setToggleOn,
    setToggleOff,
  };
};

export default useToggle;
