import React, { useEffect, useCallback, useState, useRef } from 'react';
import { connect } from 'react-redux';
import MainScreen from './MainScreen';
import { fetchRentApartments } from '../../duck/thunk';

const MainScreenContainer = ({
  dispatchFetchRentApartments,
  apartments,
  componentId,
}) => {
  const [isRefreshing, setIsRefreshing] = useState(false);
  const page = useRef(1);

  const getApartment = useCallback(() => {
    dispatchFetchRentApartments({
      page: page.current,
      onComplete: () => setIsRefreshing(false),
    });
  }, [dispatchFetchRentApartments]);

  const handleRefresh = useCallback(() => {
    setIsRefreshing(true);
    getApartment();
    page.current = 1;
  }, [getApartment]);

  useEffect(handleRefresh, []);

  const handleLoadMore = useCallback(() => {
    page.current += 1;
    getApartment();
  }, [getApartment]);

  return (
    <MainScreen
      apartments={apartments}
      isRefreshing={isRefreshing}
      handleRefresh={handleRefresh}
      componentId={componentId}
      handleLoadMore={handleLoadMore}
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
