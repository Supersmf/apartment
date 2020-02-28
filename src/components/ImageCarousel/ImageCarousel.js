// @flow
import React, {useRef, useState} from 'react';
import {
  View,
  Text,
  Dimensions,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import Carousel, {ParallaxImage, Pagination} from 'react-native-snap-carousel';

const {width: screenWidth, height: screenHeight} = Dimensions.get('window');

const ImageItem = ({item, index}, parallaxProps) => (
  <View style={styles.item}>
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

const ImageCarousel = ({imagesUrl}) => {
  const carouselRef = useRef(null);
  const [activeSlide, setActiveSlide] = useState(0);

  // const goForward = () => {
  //   carouselRef.current.snapToNext();
  // };

  return (
    // <View>
    <View style={styles.container}>
      {/* <TouchableOpacity onPress={goForward}>
        <Text>go to next slide</Text>
      </TouchableOpacity> */}
      <Carousel
        ref={carouselRef}
        sliderWidth={screenWidth}
        // sliderHeight={screenWidth}
        itemWidth={screenWidth}
        data={imagesUrl}
        renderItem={ImageItem}
        hasParallaxImages={true}
        onSnapToItem={index => setActiveSlide(index)}
      />
      <Pagination
        dotsLength={imagesUrl.length}
        activeDotIndex={activeSlide}
        containerStyle={{backgroundColor: 'rgba(0, 0, 0, 0.75)'}}
        dotStyle={{
          width: 10,
          height: 10,
          borderRadius: 5,
          marginHorizontal: 8,
          backgroundColor: 'rgba(255, 255, 255, 0.92)',
        }}
        inactiveDotStyle={
          {
            // Define styles for inactive dots here
          }
        }
        inactiveDotOpacity={0.4}
        inactiveDotScale={0.6}
      />
    </View>
    // </View>
  );
};

export default ImageCarousel;

const styles = StyleSheet.create({
  container: {
    height: screenHeight / 2,
  },
  item: {
    flex: 1,
  },
  imageContainer: {
    flex: 1,
    marginBottom: Platform.select({ios: 0, android: 1}), // Prevent a random Android rendering issue
  },
  image: {
    // ...StyleSheet.absoluteFillObject,
    resizeMode: 'contain',
  },
});
