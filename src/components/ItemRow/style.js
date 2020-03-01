import { StyleSheet } from 'react-native';
import { colors } from '../../styles';

export const itemRowStyle = StyleSheet.create({
  itemRow: {
    width: '100%',
    backgroundColor: '#fff',
    // borderWidth: 0.5,
    borderColor: '#fff',
    flexDirection: 'row',
    height: 100,
    alignItems: 'center',
    borderRadius: 2,
    marginTop: 10,
    elevation: 2,
    shadowOffset: { width: 5, height: 5 },
    shadowColor: 'grey',
    shadowOpacity: 0.5,
    shadowRadius: 10,
    overflow: 'hidden',
  },
  itemRow__imageContainer: {
    width: 100,
    height: 100,
    // marginLeft: 5,
    marginRight: 5,
  },
  itemRow__image: {
    width: '100%',
    height: '100%',
    // borderRadius: 5,
  },
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
    // marginTop: 2,
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
    // backgroundColor: colors.primary_color,
    alignItems: 'center',
    justifyContent: 'center',
    borderTopRightRadius: 5,
    borderBottomRightRadius: 5,
  },
  text_primary: {
    color: colors.primary_color,
    fontWeight: 'bold',
    fontSize: 16,
  },
});
