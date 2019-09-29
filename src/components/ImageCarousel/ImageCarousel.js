// @flow
import React, {useRef} from 'react';
import {
  View,
  Text,
  Dimensions,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import Carousel, {ParallaxImage} from 'react-native-snap-carousel';
import styled from 'styled-components/native';

const {width: screenWidth} = Dimensions.get('window');

const ImageCarousel = ({imagesUrl}) => {
  const carouselRef = useRef(null);

  const goForward = () => {
    carouselRef.current.snapToNext();
  };
  console.log(imagesUrl);

  const renderItem = ({item, index}, parallaxProps) => (
    <View style={styles.item}>
      {console.log(parallaxProps)}
      <ParallaxImage
        source={{uri: item}}
        containerStyle={styles.imageContainer}
        style={styles.image}
        parallaxFactor={0.4}
        {...parallaxProps}
      />
      {/* <Text style={styles.title} numberOfLines={2}>
          {'item.title'}
        </Text> */}
    </View>
  );

  return (
    // <View>
    <View style={styles.container}>
      {/* <TouchableOpacity onPress={goForward}>
        <Text>go to next slide</Text>
      </TouchableOpacity> */}
      <Carousel
        ref={carouselRef}
        sliderWidth={screenWidth}
        sliderHeight={screenWidth}
        itemWidth={screenWidth - 60}
        data={imagesUrl}
        renderItem={renderItem}
        hasParallaxImages={true}
      />
    </View>
    // </View>
  );
};

export default ImageCarousel;

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
});
