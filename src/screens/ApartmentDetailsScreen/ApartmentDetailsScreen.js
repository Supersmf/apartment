// @flow
import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Alert,
  TouchableOpacity,
  Linking,
  ScrollView,
} from 'react-native';
import ImageCarousel from '../../common/components/ImageCarousel';
import Delimiter from '../../common/components/Delimiter';
import { colors } from '../../common/styles';

const ApartmentDetailScreen = ({
  city,
  address,
  images,
  roomsCount,
  subway,
  description,
  publicationDate,
  updateDate,
  url,
}) => {
  return (
    <ScrollView contentInsetAdjustmentBehavior="automatic">
      <ImageCarousel imagesUrl={images} />
      <View style={styles.buttonsContainer}>
        <TouchableOpacity
          onPress={() => Alert.alert('Call tenant')}
          style={[styles.button, styles.buttonPrimary]}>
          <Text>Call</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => Linking.openURL(url)}
          style={styles.button}>
          <Text>Go to ad</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.infoContainer}>
        <Text>{`Address: ${city} ${address}`}</Text>
      </View>
      <Delimiter />
      <View style={styles.infoContainer}>
        <Text>{`Rooms count: ${roomsCount}`}</Text>
        <Text>{`Phone: +${375295754755}`}</Text>
        {!!subway && <Text>{`Subway: ${subway}`}</Text>}
        {!!description && <Text>{`Description: ${description}`}</Text>}
        <Text>{`Publication Date: ${publicationDate}`}</Text>
        <Text>{`Update Date: ${updateDate}`}</Text>
      </View>
    </ScrollView>
  );
};

export default ApartmentDetailScreen;

const styles = StyleSheet.create({
  buttonsContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'stretch',
  },
  infoContainer: {
    padding: 10,
  },
  button: {
    backgroundColor: colors.primary_color,
    padding: 10,
    alignSelf: 'stretch',
    flex: 1,
    alignItems: 'center',
    color: colors.white_color,
  },
  buttonPrimary: {
    backgroundColor: colors.lime_green_color,
  },
});
