import React, { useEffect, useCallback, useState, useRef } from 'react';
import { connect } from 'react-redux';
import MainScreen from './MainScreen';
import { fetchRentApartments } from '../../duck/thunk';
import { LIMIT_ITEMS_COUNT } from '../../constants';
import { Animated } from 'react-native';

const MainScreenContainer = ({
  dispatchFetchRentApartments,
  apartments,
  componentId,
}) => {
  const [isRefreshing, setIsRefreshing] = useState(false);
  const [isLoadingMore, setIsLoadingMore] = useState(false);
  const [nextPage, setNextPage] = useState(1);

  useEffect(() => {
    setNextPage(apartments.length / LIMIT_ITEMS_COUNT + 1);
  }, [apartments]);

  const getApartment = useCallback(
    (completeFunction, currentPage) => {
      dispatchFetchRentApartments({
        page: currentPage || nextPage,
        onComplete: completeFunction,
      });
    },
    [dispatchFetchRentApartments, nextPage],
  );

  useEffect(getApartment, []);

  const handleRefresh = useCallback(() => {
    setIsRefreshing(true);
    getApartment(() => setIsRefreshing(false), 1);
  }, [getApartment]);

  const handleLoadMore = useCallback(() => {
    setIsLoadingMore(true);
    getApartment(() => setIsLoadingMore(false));
  }, [getApartment]);

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
