// @flow
import React from 'react';
import {
  View,
  Text,
  Dimensions,
  StyleSheet,
  Alert,
  TouchableOpacity,
  Linking,
} from 'react-native';
import styled from 'styled-components/native';
import ImageCarousel from '../../components/ImageCarousel';
// import { Button } from 'react-native-elements';
// import {Navigation} from 'react-native-navigation';

const {width: screenWidth} = Dimensions.get('window');

const ApartmentDetailScreen = ({
  city,
  street,
  apartment,
  images,
  roomsCount,
  subway,
  description,
  date,
  url,
}) => {
  return (
    <View style={{height: '100%'}}>
      <Text>{`Apartment in ${city}`}</Text>
      <Text>{`Address: ${street} ${apartment}`}</Text>
      <Text>{`Rooms count: ${roomsCount}`}</Text>
      <Text>{`Phone: +${375295754755}`}</Text>
      {!!subway && <Text>{`Subway: ${subway}`}</Text>}
      {!!description && <Text>{`Description: ${description}`}</Text>}
      <Text>{`Date: ${date}`}</Text>
      <TouchableOpacity
        onPress={() => Alert.alert('Call tenant')}
        style={styles.button}>
        <Text>Call tenant</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => Linking.openURL(url)}
        style={styles.button}>
        <Text>Go to ad</Text>
      </TouchableOpacity>
      <ImageCarousel imagesUrl={images} />
    </View>
  );
};

export default ApartmentDetailScreen;

const VideoTitleText = styled.Text`
  color: white;
  top: 28;
  justify-content: center;
`;
const CurrentVideoImage = styled.Image`
  top: 25;
  box-shadow: 5px 10px;
  width: ${screenWidth};
  height: 230;
`;

const ThumbnailBackgroundView = styled.View`
  justify-content: center;
  align-items: center;
  width: ${screenWidth};
`;

const CurrentVideoTO = styled.TouchableOpacity``;
const CarouselBackgroundView = styled.View`
  background-color: black;
  height: 200;
  width: 100%;
`;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  item: {
    width: screenWidth - 60,
    height: screenWidth - 60,
  },
  imageContainer: {
    flex: 1,
    marginBottom: Platform.select({ios: 0, android: 1}), // Prevent a random Android rendering issue
    backgroundColor: 'white',
    borderRadius: 8,
  },
  image: {
    ...StyleSheet.absoluteFillObject,
    resizeMode: 'cover',
  },
  button: {
    alignItems: 'center',
    backgroundColor: '#DDDDDD',
    padding: 10,
    width: 100,
  },
});
