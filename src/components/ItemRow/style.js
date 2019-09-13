import {StyleSheet} from 'react-native';
import {colors} from '../../styles';

export const itemRowStyle = StyleSheet.create({
  itemRow: {
    width: '100%',
    backgroundColor: '#fff',
    borderWidth: 0.5,
    borderColor: '#d6d7da',
    flexDirection: 'row',
    height: 70,
    alignItems: 'center',
    borderRadius: 8,
    marginTop: 5,
    elevation: 2,
    shadowOffset: {width: 5, height: 5},
    shadowColor: 'grey',
    shadowOpacity: 0.5,
    shadowRadius: 10,
  },
  itemRow__imageContainer: {
    width: 60,
    height: 60,
    marginLeft: 5,
    marginRight: 5,
  },
  itemRow__image: {width: '100%', height: '100%', borderRadius: 5},
  title: {
    color: colors.primary_color,
    fontSize: 12,
    fontWeight: '700',
  },
  subtitle: {
    fontSize: 11,
    lineHeight: 12,
  },
  description: {
    fontSize: 10,
    lineHeight: 10,
    color: colors.secondary_color,
    marginTop: 2,
    overflow: 'hidden',
  },
  subwayRow: {
    // fontSize: 10,
    display: 'flex',
    flexDirection: 'row',
  },
  itemRow__specification: {
    height: '100%',
    padding: 5,
    flex: 4,
  },
  itemRow__property: {
    marginRight: 0,
    height: '100%',
    flex: 1,
    backgroundColor: colors.primary_color,
    alignItems: 'center',
    justifyContent: 'center',
    borderTopRightRadius: 5,
    borderBottomRightRadius: 5,
  },
  text_white: {
    color: colors.white_color,
  },
});
