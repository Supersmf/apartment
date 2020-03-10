import React, { useEffect, useCallback, useState, useRef } from 'react';
import { connect } from 'react-redux';
import MainScreen from './MainScreen';
import { fetchRentApartments } from '../../duck/thunk';
import { LIMIT_ITEMS_COUNT } from '../../constants';

const MainScreenContainer = ({
  dispatchFetchRentApartments,
  apartments,
  componentId,
}) => {
  const [isRefreshing, setIsRefreshing] = useState(false);
  const [page, setPage] = useState(1);

  useEffect(() => {
    setPage(apartments.length / LIMIT_ITEMS_COUNT);
  }, [apartments]);

  const getApartment = useCallback(
    currentPage => {
      dispatchFetchRentApartments({
        page: currentPage || page + 1,
        onComplete: () => setIsRefreshing(false),
      });
    },
    [dispatchFetchRentApartments, page],
  );

  const handleRefresh = useCallback(() => {
    setIsRefreshing(true);
    getApartment(1);
  }, [getApartment]);

  useEffect(handleRefresh, []);

  const handleLoadMore = useCallback(() => {
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
