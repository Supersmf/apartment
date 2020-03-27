import React from 'react';
import { connect } from 'react-redux';
import MapScreen from './MapScreen';

const MapScreenContainer = ({ apartments }) => (
  <MapScreen apartments={apartments} />
);

const mapStateToProps = state => ({
  apartments: state.main.apartments,
});

export default connect(mapStateToProps)(MapScreenContainer);
