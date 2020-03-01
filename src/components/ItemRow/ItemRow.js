import React from 'react';
import { Image, Text, View, TouchableOpacity } from 'react-native';
import { itemRowStyle } from './style';
// import { colors } from '../../styles';

const ItemRow = ({
  images,
  roomsCount = 1,
  city,
  address,
  description,
  place,
  price,
  subway,
  onPress,
}) => (
  <TouchableOpacity style={itemRowStyle.itemRow} onPress={onPress}>
    <View style={itemRowStyle.itemRow__imageContainer}>
      <Image source={{ uri: images[0] }} style={itemRowStyle.itemRow__image} />
    </View>
    <View style={itemRowStyle.itemRow__specification}>
      <Text numberOfLines={1} style={itemRowStyle.title}>
        {`${city}, ${address}`}
      </Text>
      <Text numberOfLines={1} style={itemRowStyle.subtitle}>
        {place}
      </Text>
      {!!subway && (
        <View style={itemRowStyle.subwayRow}>
          <Text style={itemRowStyle.subtitle}>{subway}</Text>
        </View>
      )}
      <Text ellipsizeMode="tail" style={itemRowStyle.description}>
        {description}
      </Text>
    </View>
    <View style={itemRowStyle.itemRow__property}>
      {/* <Text style={itemRowStyle.text_primary}>{`к-т: ${roomsCount}`}</Text> */}
      <Text style={itemRowStyle.text_primary}>{`$ ${price}`}</Text>
    </View>
  </TouchableOpacity>
);

export default ItemRow;
