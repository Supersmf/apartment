import React, { useEffect, useCallback, useState } from 'react';
import { connect } from 'react-redux';
import MainScreen from './MainScreen';
import { fetchRentApartments } from '../../duck/thunk';
import { LIMIT_ITEMS_COUNT } from '../../constants';
import { Animated } from 'react-native';
import useToggle from '../../common/hooks/useToggle';
import useNavigationEvent from '../../common/hooks/useNavigationEvent';

const MainScreenContainer = ({
  dispatchFetchRentApartments,
  apartments,
  componentId,
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

  const onMount = useCallback(() => {
    if (!apartments.length) {
      getApartment();
    }
  }, [apartments.length, getApartment]);

  useNavigationEvent({ componentId, onMount });

  useEffect(() => {
    setNextPage(Math.floor(apartments.length / LIMIT_ITEMS_COUNT) + 1);
  }, [apartments]);

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
    setIsLoadingMore(true);
    getApartment();
  }, [getApartment, setIsLoadingMore]);

  const scrollPos = new Animated.Value(0);
  const scrollSinkY = Animated.event(
    [{ nativeEvent: { contentOffset: { y: scrollPos } } }],
    { useNativeDriver: true },
  );

  return (
    <MainScreen
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
  apartments: state.main.apartments,
});

const mapDispatchToProps = {
  dispatchFetchRentApartments: fetchRentApartments,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(MainScreenContainer);
