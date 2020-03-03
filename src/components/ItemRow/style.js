import { StyleSheet } from 'react-native';
import { colors } from '../../styles';

export const styles = StyleSheet.create({
  itemRow: {
    width: '100%',
    backgroundColor: '#fff',
    borderColor: '#fff',
    flexDirection: 'row',
    height: 80,
    alignItems: 'center',
    borderRadius: 2,
    marginTop: 14,
    elevation: 2,
    shadowOffset: { width: 5, height: 5 },
    shadowColor: 'grey',
    shadowOpacity: 0.5,
    shadowRadius: 10,
    overflow: 'hidden',
  },
  imageContainer: {
    width: 80,
    height: 80,
  },
  image: {
    width: '100%',
    height: '100%',
  },
  title: {
    fontSize: 14,
    fontWeight: '700',
  },
  subtitle: {
    fontSize: 10,
    lineHeight: 12,
    paddingTop: 2,
  },
  description: {
    fontSize: 10,
    lineHeight: 10,
    color: colors.secondary_color,
    paddingTop: 4,
    overflow: 'hidden',
    height: 34,
  },
  specification: {
    height: '100%',
    padding: 5,
    paddingLeft: 10,
    flex: 10,
  },
  property: {
    flex: 3,
    alignSelf: 'flex-start',
  },
  price: {
    color: colors.primary_color,
    fontWeight: 'bold',
    fontSize: 20,
    paddingBottom: 5,
  },
  facilities: {
    fontSize: 18,
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
  },
  facilities__child: {
    color: colors.secondary_color,
    fontSize: 12,
  },
});
