import React, {useEffect, useCallback, useState} from 'react';
import {connect} from 'react-redux';
import MainScreen from './MainScreen';
import {fetchRentApartments} from '../../duck/thunk';

const apartments = [
  {
    ownerPhone: ['(29) 677-52-83'],
    images: [
      'https://s.domovita.by/images/e6/53ef13c5fdd6beff4db984adea091254.mini.jpg',
      'https://s.domovita.by/images/56/ec76a62e1103661bee85751053253f39.mini.jpg',
      'https://s.domovita.by/images/dd/2073426c0d48339db10c0b337aaa1f70.mini.jpg',
      'https://s.domovita.by/images/02/79561302c91c1f958ae981529e5f1c68.mini.jpg',
      'https://s.domovita.by/images/48/11e41a864cfe51255753ff412999c7b0.mini.jpg',
      'https://s.domovita.by/images/b8/86cb420d8bf69997fa5c8c295e631338.mini.jpg',
      'https://s.domovita.by/images/62/dd8a3fc18e0d3277481691abf107666e.mini.jpg',
      'https://s.domovita.by/images/96/a1134db2bcb75a663329d7a21c648e0f.mini.jpg',
      'https://s.domovita.by/images/bb/aec40ba0e5e3656417a8248fc6559b5e.mini.jpg',
      'https://s.domovita.by/images/f5/c1169fe6506bb3b9e0279db1d48e0e65.mini.jpg',
      ,
    ],
    _id: '5e56a0c488f1ca0023874c89',
    city: 'Минск',
    area: 'Октябрьский район',
    subway: 'Ковальская слобода',
    address: 'ул. Братская, д. 2',
    isOwner: false,
    ownerName: '',
    price: 330,
    totalArea: '27.5',
    livingArea: '22.5',
    kitchenArea: '',
    roomsCount: '1',
    floor: '12',
    facilities: {
      isRefrigerator: true,
      isElevator: true,
      isWiFi: true,
      isFurniture: true,
      isWashingMachine: true,
    },
    innerId: '66732',
    publicationDate: '2020-02-25T00:00:00.000Z',
    updateDate: '2020-02-25T00:00:00.000Z',
    description:
      'Сдается очень уютная и красивая 1-х комнатная кв-pа на длительный сpок в новом доме. Кваpтиpа полностью готова к заселению. Имеется все необходимое для качественной жизни: мебель, бытовая тех-ка (холодильник, стиpальная машина, плита). Рядом отлично развита инфраструктура и транспортное сообщение, торговые центры, магазины. Сдается по договору, сумма аренды 330 у.е. и залог за сохранность имущества в двойном размере аренды. ',
    url:
      'https://domovita.by/minsk/flats/rent/1-komnatnaa-kvartira-ul-bratskaa-2-2',
    __v: 0,
  },
  {
    ownerPhone: ['(29) 550-00-43'],
    images: [
      'https://s.domovita.by/images/a8/058ec83119d4c85e0f1182509341e196.mini.jpg',
      'https://s.domovita.by/images/c3/658dbf17f4a6708cdbc70188b150b76c.mini.jpg',
      'https://s.domovita.by/images/0b/efe91ebf5ca1f059247e5e1e174c49c8.mini.jpg',
      'https://s.domovita.by/images/98/8fbbfa6f2b6d95fd52f7153315d9a78f.mini.jpg',
      'https://s.domovita.by/images/a7/59b77ec00b92a652bc5b6584106e3f7b.mini.jpg',
      'https://s.domovita.by/images/25/85a45e2fa997f881cc5ed0594687d4ec.mini.jpg',
      'https://s.domovita.by/images/05/68c169f25ad7a0c4601044f0712fb8fb.mini.jpg',
      'https://s.domovita.by/images/ea/18efe5a190b09e35961518b5fa14a937.mini.jpg',
      'https://s.domovita.by/images/da/7dc45e3aca92721ea74c00a038e87e43.mini.jpg',
      'https://s.domovita.by/images/1d/89ed8b61e983b32b8eb2702ae44233dd.mini.jpg',
      ,
    ],
    _id: '5e56a0c488f1ca0023874c8e',
    city: 'Минск',
    area: 'Фрунзенский район',
    subway: 'Молодежная',
    address: 'ул. Тимирязева, д. 10',
    isOwner: false,
    ownerName: '',
    price: 750,
    totalArea: '59.3',
    livingArea: '33',
    kitchenArea: '8.9',
    roomsCount: '2',
    floor: '14',
    facilities: {
      isRefrigerator: true,
      isElevator: true,
      isWiFi: true,
      isFurniture: true,
      isWashingMachine: true,
    },
    innerId: '64659',
    publicationDate: '2019-12-18T00:00:00.000Z',
    updateDate: '2020-02-17T00:00:00.000Z',
    description:
      'Сдаётся 2-х комнатная квартира в новом доме с отличным ремонтом. по ул. Тимирязева 10 Укомплектована всей техникой ( TV, стиральная машинка, холодильник, микроволновая печь) и мебелью. Развитая инфраструктура , метро" Молодежная" в шаговой доступности.Договор,регистрация, интернет оптоволокно .Первое заселение.',
    url:
      'https://domovita.by/minsk/flats/rent/2-komnatnaa-kvartira-ul-timirazeva-10-8',
    __v: 0,
  },
];

const MainScreenContainer = ({
  dispatchFetchRentApartments,
  // apartments,
  componentId,
}) => {
  const [isRefreshing, setIsRefreshing] = useState(false);

  const handleRefresh = useCallback(() => {
    setIsRefreshing(true);
    dispatchFetchRentApartments({
      onSuccess: () => setIsRefreshing(false),
      onFailure: () => setIsRefreshing(false),
    });
  }, [dispatchFetchRentApartments]);

  // useEffect(handleRefresh, []);

  return (
    <MainScreen
      apartments={apartments}
      isRefreshing={isRefreshing}
      // onRefresh={handleRefresh}
      onRefresh={() => ({})}
      componentId={componentId}
    />
  );
};

const mapStateToProps = state => ({
  apartments: state.main.apartments,
});

const mapDispatchToProps = {
  dispatchFetchRentApartments: fetchRentApartments,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(MainScreenContainer);

// export default MainScreenContainer;
