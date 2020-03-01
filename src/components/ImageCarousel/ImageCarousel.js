// @flow
import React, { useRef, useState } from 'react';
import { View, Dimensions, StyleSheet } from 'react-native';
import Carousel, {
  ParallaxImage,
  Pagination,
} from 'react-native-snap-carousel';

const { width: screenWidth, height: screenHeight } = Dimensions.get('window');

const ImageItem = ({ item, index }, parallaxProps) => (
  <View style={styles.item}>
    <ParallaxImage
      source={{ uri: item }}
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

const ImageCarousel = ({ imagesUrl }) => {
  const carouselRef = useRef(null);
  const [activeSlide, setActiveSlide] = useState(0);

  // const goForward = () => {
  //   carouselRef.current.snapToNext();
  // };

  return (
    <View style={styles.container}>
      {/* <TouchableOpacity onPress={goForward}>
        <Text>go to next slide</Text>
      </TouchableOpacity> */}
      <Pagination
        dotsLength={imagesUrl.length}
        activeDotIndex={activeSlide}
        containerStyle={styles.paginationContainer}
        dotStyle={styles.paginationDot}
        // inactiveDotStyle={}
        inactiveDotOpacity={0.4}
        inactiveDotScale={0.6}
      />
      <Carousel
        ref={carouselRef}
        sliderWidth={screenWidth}
        itemWidth={screenWidth}
        data={imagesUrl}
        renderItem={ImageItem}
        hasParallaxImages={true}
        onSnapToItem={index => setActiveSlide(index)}
      />
    </View>
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
    marginBottom: Platform.select({ ios: 0, android: 1 }), // Prevent a random Android rendering issue
  },
  image: {
    // ...StyleSheet.absoluteFillObject,
    resizeMode: 'contain',
  },
  paginationContainer: {
    position: 'absolute',
    zIndex: 10,
    width: screenWidth,
  },
  paginationDot: {
    width: 20,
    height: 5,
    borderRadius: 2,
    backgroundColor: 'rgba(255, 255, 255, 0.92)',
  },
});
