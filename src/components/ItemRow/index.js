import React from 'react';
import {Image, Text, View, TouchableOpacity} from 'react-native';
// import {Ionicons} from '@expo/vector-icons';
import {itemRowStyle} from './style';
import {colors} from '../../styles';

const ItemRow = ({
  images,
  roomsCount = 1,
  city,
  apartment,
  description,
  place,
  price,
  street,
  subway,
}) => (
  <TouchableOpacity style={itemRowStyle.itemRow} onPress={() => alert('press')}>
    <View style={itemRowStyle.itemRow__imageContainer}>
      <Image source={{uri: images[0]}} style={itemRowStyle.itemRow__image} />
    </View>
    <View style={itemRowStyle.itemRow__specification}>
      <Text numberOfLines={1} style={itemRowStyle.title}>
        {`${street}, ${apartment}`}
      </Text>
      <Text numberOfLines={1} style={itemRowStyle.subtitle}>
        {place}
      </Text>
      {!!subway && (
        <View style={itemRowStyle.subwayRow}>
          {/* <Ionicons
            name="ios-subway"
            size={12}
            // style={{ }}
            color={colors.primary_color}
          /> */}
          <Text style={itemRowStyle.subtitle}>{subway}</Text>
        </View>
      )}
      <Text ellipsizeMode="tail" style={itemRowStyle.description}>
        {description}
      </Text>
    </View>
    <View style={itemRowStyle.itemRow__property}>
      <Text style={itemRowStyle.text_white}>{city}</Text>
      <Text style={itemRowStyle.text_white}>{`к-т: ${roomsCount}`}</Text>
      <Text style={itemRowStyle.text_white}>{`${price} $`}</Text>
    </View>
  </TouchableOpacity>
);

export default ItemRow;
