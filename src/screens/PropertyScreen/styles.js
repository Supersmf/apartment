import { StyleSheet } from 'react-native';
import { colors } from '../../common/styles';

const styles = StyleSheet.create({
  cityContainer: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    margin: 4,
  },
  cityPicker: {
    height: 50,
    width: 200,
  },
  buttonContainer: {
    borderWidth: 1,
    borderRadius: 5,
    borderColor: colors.casper_color,
    margin: 4,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 10,
  },
  buttonBoxContainerTitle: {
    position: 'absolute',
    top: -14,
    left: 7,
    backgroundColor: '#fff',
    padding: 3,
  },
});

export default styles;
