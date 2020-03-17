import { useState } from 'react';

const useCheckbox = (checkBoxes, onChange) => {
  const [checkboxState, setCheckboxState] = useState({});
  console.log(checkBoxes);

  const updatedCheckBoxes = checkBoxes.map(({ value, isAvailable }) => {
    setCheckboxState({
      //   ...checkboxState,
      //   [`checkBox-${value}`]: {
      //     isAvailable,
      //     onChange: () => {
      //       onChange();
      //       this.isAvailable = !this.isAvailable;
      //     },
      //   },
    });
  });

  return updatedCheckBoxes;
};

export default useCheckbox;
