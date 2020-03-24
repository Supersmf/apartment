import { StyleSheet } from 'react-native';
import { colors } from '../../styles';

const styles = StyleSheet.create({
  button: {
    height: 35,
    alignSelf: 'stretch',
    flex: 1,
    justifyContent: 'center',
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 0.5,
  },
  validButton: {
    backgroundColor: colors.primary_color,
  },
  invalidButton: {
    backgroundColor: colors.secondary_color,
  },
  buttonText: {
    color: colors.white_color,
    fontSize: 22,
  },
  leftButton: {
    borderTopLeftRadius: 8,
    borderBottomLeftRadius: 8,
  },
  rightButton: {
    borderTopRightRadius: 8,
    borderBottomRightRadius: 8,
  },
});

export default styles;
