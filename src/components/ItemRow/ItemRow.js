import React from 'react';
import { Image, Text, View, TouchableOpacity } from 'react-native';
import { itemRowStyle } from './style';

const ItemRow = ({
  images,
  roomsCount,
  city,
  address,
  description,
  place,
  price,
  subway,
  onPress,
  updateDate,
}) => (
  <TouchableOpacity style={itemRowStyle.itemRow} onPress={onPress}>
    <View style={itemRowStyle.imageContainer}>
      <Image source={{ uri: images[0] }} style={itemRowStyle.image} />
    </View>
    <View style={itemRowStyle.specification}>
      <Text numberOfLines={1} style={itemRowStyle.title}>
        {address}
      </Text>
      <Text numberOfLines={1} style={itemRowStyle.subtitle}>
        {updateDate}
      </Text>
      {!!subway && (
        <View style={itemRowStyle.subwayRow}>
          <Text style={itemRowStyle.subtitle}>Метро: {subway}</Text>
        </View>
      )}
      <Text ellipsizeMode="tail" style={itemRowStyle.description}>
        {description}
      </Text>
    </View>
    <Text style={itemRowStyle.price}>{`$ ${price}`}</Text>
  </TouchableOpacity>
);

export default ItemRow;
