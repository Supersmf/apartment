import React, {useEffect, useCallback, useState} from 'react';
// import {connect} from 'react-redux';
import MainScreen from './MainScreen';
// import { fetchRentApartments } from '../../duck/thunk';

const MainScreenContainer = ({
  dispatchFetchRentApartments = undefined,
  apartments = [
    {
      images: [
        'https://s.domovita.by/images/30/627fe438dda8fcce242ceba64d1ea041.mini.jpg',
        'https://s.domovita.by/images/c6/6d329ebce6f161be0b78ceef0919b1f7.mini.jpg',
        'https://s.domovita.by/images/69/14818bb736005fbfd4a144079d781474.mini.jpg',
        'https://s.domovita.by/images/d0/af3488fb1de841f41b8bc21736a4a6d4.mini.jpg',
      ],
      city: 'Гомель',
      street: 'пр-т Речицкий',
      apartment: 'д. 120',
      place: 'Советский район / Солнечный',
      subway: '',
      price: '133',
      description:
        ' Отличная большая квартира с мебелью, телевизором,телефоном, холодильником, интернетом, рядом остановки общественного транспорта,напротив гипермаркет Гиппо, рядом Евроопт, недалеко рынок Давы ',
      url:
        'https://domovita.by/gomel/flats/rent/1-komnatnaa-kvartira-pr-t-recickij-120',
    },
  ],
}) => {
  const [isRefreshing, setIsRefreshing] = useState(false);

  // const handleRefresh = useCallback(() => {
  // setIsRefreshing(true);
  //   dispatchFetchRentApartments({
  //     onSuccess: () => setIsRefreshing(false),
  //     onFailure: () => setIsRefreshing(false)
  //   });
  // });

  // useEffect(handleRefresh, []);

  return (
    <MainScreen
      apartments={apartments}
      isRefreshing={isRefreshing}
      // onRefresh={handleRefresh}
    />
    // <MainScreen />
  );
};

// const mapStateToProps = state => ({
//   apartments: state.main.apartments
// });

// const mapDispatchToProps = {
//   dispatchFetchRentApartments: fetchRentApartments
// };

// export default connect(
// mapStateToProps,
// mapDispatchToProps
// )(MainScreenContainer);

export default MainScreenContainer;
