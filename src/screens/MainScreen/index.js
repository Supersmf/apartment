import React, { useEffect, useCallback, useState } from 'react';
import { connect } from 'react-redux';
import MainScreen from './MainScreen';
import { fetchRentApartments } from '../../duck/thunk';
import { LIMIT_ITEMS_COUNT } from '../../constants';
import { Animated } from 'react-native';
import useToggle from '../../common/hooks/useToggle';
import { useComponentDidAppear } from '../../common/hooks/useNavigationEvent';

const MainScreenContainer = ({
  city,
  apartments,
  componentId,
  dispatchFetchRentApartments,
  isFilterChanged,
}) => {
  const {
    isToggledOn: isRefreshing,
    setToggleOn: setIsRefreshing,
    setToggleOff: unsetIsRefreshing,
  } = useToggle();
  const {
    isToggledOn: isLoadingMore,
    setToggleOn: setIsLoadingMore,
    setToggleOff: unsetIsLoadingMore,
  } = useToggle();
  const {
    isToggledOn: isApartmentsFetching,
    setToggleOn: setIsApartmentsFetching,
    setToggleOff: unsetIsApartmentsFetching,
  } = useToggle();
  const [nextPage, setNextPage] = useState(1);

  useComponentDidAppear(() => {
    if (!apartments.length) {
      getApartment();
    }
  }, componentId);

  useEffect(() => {
    setNextPage(Math.floor(apartments.length / LIMIT_ITEMS_COUNT) + 1);
    if (isFilterChanged) {
      getApartment(1);
    }
  }, [apartments, getApartment, isFilterChanged]);

  const setAllLoadingFalse = useCallback(() => {
    unsetIsRefreshing();
    unsetIsLoadingMore();
    unsetIsApartmentsFetching();
  }, [unsetIsApartmentsFetching, unsetIsLoadingMore, unsetIsRefreshing]);

  const getApartment = useCallback(
    (currentPage, isRefresh) => {
      if (!isApartmentsFetching) {
        setIsApartmentsFetching();
        dispatchFetchRentApartments({
          page: currentPage || nextPage,
          onComplete: setAllLoadingFalse,
          isRefresh,
        });
      }
    },
    [
      dispatchFetchRentApartments,
      isApartmentsFetching,
      nextPage,
      setAllLoadingFalse,
      setIsApartmentsFetching,
    ],
  );

  const handleRefresh = useCallback(() => {
    setIsRefreshing();
    getApartment(1, true);
  }, [getApartment, setIsRefreshing]);

  const handleLoadMore = useCallback(() => {
    if (!(apartments.length % LIMIT_ITEMS_COUNT)) {
      setIsLoadingMore(true);
      getApartment();
    }
  }, [apartments.length, getApartment, setIsLoadingMore]);

  const scrollPos = new Animated.Value(0);
  const scrollSinkY = Animated.event(
    [{ nativeEvent: { contentOffset: { y: scrollPos } } }],
    { useNativeDriver: true },
  );

  return (
    <MainScreen
      city={city}
      apartments={apartments}
      isRefreshing={isRefreshing}
      isLoadingMore={isLoadingMore}
      handleRefresh={handleRefresh}
      componentId={componentId}
      handleLoadMore={handleLoadMore}
      scrollPos={scrollPos}
      scrollSinkY={scrollSinkY}
    />
  );
};

const mapStateToProps = state => ({
  city: state.main.city,
  apartments: state.main.apartments,
  isFilterChanged: state.main.isFilterChanged,
});

const mapDispatchToProps = {
  dispatchFetchRentApartments: fetchRentApartments,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(MainScreenContainer);
