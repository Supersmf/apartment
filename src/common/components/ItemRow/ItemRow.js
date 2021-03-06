import React from 'react';
import { Image, Text, View, TouchableOpacity } from 'react-native';
import { styles } from './style';
import IconFontisto from 'react-native-vector-icons/Fontisto';
import IconFoundation from 'react-native-vector-icons/Foundation';
import IconFontAwesome5 from 'react-native-vector-icons/FontAwesome5';

const ItemRow = ({
  images,
  roomsCount,
  location: { city, address, subway },
  description,
  place,
  price,
  onPress,
  updateDate,
  facilities: {
    isRefrigerator,
    isElevator,
    isWiFi,
    isFurniture,
    isWashingMachine,
  },
}) => (
  <TouchableOpacity style={styles.itemRow} onPress={onPress}>
    <View style={styles.imageContainer}>
      <Image source={{ uri: images[0] }} style={styles.image} />
    </View>
    <View style={styles.specification}>
      <Text numberOfLines={1} style={styles.title}>
        {address}
      </Text>
      <Text numberOfLines={1} style={styles.subtitle}>
        {updateDate}
      </Text>

      <Text ellipsizeMode="tail" style={styles.description}>
        {description}
      </Text>
    </View>
    <View style={styles.property}>
      <View style={styles.priceContainer}>
        <Text style={styles.price}>{`$${price} `}</Text>
        <Text style={styles.roomsCount}>{`${roomsCount}-к`}</Text>
      </View>
      <View style={styles.facilities}>
        {!!subway && (
          <IconFontisto name="subway" style={styles.facilities__child} />
        )}
        {!!isWiFi && (
          <IconFontisto name="wifi" style={styles.facilities__child} />
        )}
        {!!isElevator && (
          <IconFoundation name="elevator" style={styles.facilities__child} />
        )}
        {!!isFurniture && (
          <IconFontAwesome5 name="couch" style={styles.facilities__child} />
        )}
      </View>
    </View>
  </TouchableOpacity>
);

export default ItemRow;
