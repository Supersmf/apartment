import React, { useCallback } from 'react';
import { ToastAndroid } from 'react-native';
import ButtonGroup from './ButtonGroup';

const ButtonGroupContainer = ({ buttons, changeButtonsHandler }) => {
  const handleButtonChange = useCallback(
    currentLabel => {
      const newButtons = [...buttons];
      const isUnCheckAvailable =
        newButtons.filter(({ isAvailable }) => isAvailable).length > 1;
      const currentButtonIndex = buttons.findIndex(
        ({ value }) => value === currentLabel,
      );
      const isCurrentButtonValid = buttons[currentButtonIndex].isAvailable;

      if (!isUnCheckAvailable && isCurrentButtonValid) {
        ToastAndroid.showWithGravity(
          'At least one value must be selected',
          ToastAndroid.SHORT,
          ToastAndroid.CENTER,
        );
      }

      newButtons.splice(currentButtonIndex, 1, {
        ...buttons[currentButtonIndex],
        isAvailable: isUnCheckAvailable ? !isCurrentButtonValid : true,
      });

      changeButtonsHandler(newButtons);
    },
    [buttons, changeButtonsHandler],
  );

  return (
    <ButtonGroup buttons={buttons} handleButtonChange={handleButtonChange} />
  );
};

export default ButtonGroupContainer;
