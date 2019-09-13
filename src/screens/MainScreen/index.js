import React, {useEffect, useCallback, useState} from 'react';
import {connect} from 'react-redux';
import MainScreen from './MainScreen';
import {fetchRentApartments} from '../../duck/thunk';

const MainScreenContainer = ({dispatchFetchRentApartments, apartments}) => {
  const [isRefreshing, setIsRefreshing] = useState(false);

  const handleRefresh = useCallback(() => {
    setIsRefreshing(true);
    dispatchFetchRentApartments({
      onSuccess: () => setIsRefreshing(false),
      onFailure: () => setIsRefreshing(false),
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(handleRefresh, []);

  return (
    <MainScreen
      apartments={apartments}
      isRefreshing={isRefreshing}
      onRefresh={handleRefresh}
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
