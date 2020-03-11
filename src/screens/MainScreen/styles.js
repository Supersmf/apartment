import { StyleSheet, Dimensions } from 'react-native';

const { height: screenHeight } = Dimensions.get('window');

export const styles = StyleSheet.create({
  container: {
    backgroundColor: '#f7f7f7',
    padding: 5,
    marginBottom: 60,
    // height: screenHeight - 60,
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
  },
  subtitle: {
    fontSize: 16,
    color: 'grey',
  },
  list: {
    display: 'flex',
  },
  spinner: {
    alignSelf: 'center',
  },
  emptySpinner: {
    alignSelf: 'center',
    marginTop: screenHeight / 3,
  },
  spindicator: {
    position: 'absolute',
    top: 10,
    right: 10,
  },
});
