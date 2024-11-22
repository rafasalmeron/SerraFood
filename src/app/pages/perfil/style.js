import { StyleSheet, Dimensions } from 'react-native';

const { height } = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  topSection: {
    height: (height * 2) / 3,
    backgroundColor: '#4CAF50',
  },
  bottomSection: {
    height: height / 3,
    borderTopLeftRadius: 100,
    borderTopRightRadius: 100,
    padding: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  spacing: {
    height: 20,
  },
  button: {
    backgroundColor: '#d50132',
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 10,
    alignItems: 'center',
  },
});

export default styles;
