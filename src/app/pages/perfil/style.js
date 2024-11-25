import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  topSection: {
    flex: 1,
    justifyContent: 'flex-end',
  },
  bottomSection: {
    height: '25%', 
    borderTopLeftRadius: 50,
    borderTopRightRadius: 50,
    backgroundColor: '#ddd',
    padding: 20,
    alignItems: 'center',
  },
  spacing: {
    height: 20,
  },
  button: {
    backgroundColor: '#FFFFFF',
    width: '95%',
    height: 50,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 2,
    borderColor: '#d50132',
  },  
  buttonText: {
    color: 'black',
    fontSize: 16,
    fontWeight: 'bold',
  },
  menuContainer: {
    marginTop: 20,
  },
  menuItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 13,
    paddingHorizontal: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
  menuIcon: {
    marginRight: 10,
  },
  menuLabel: {
    fontSize: 16,
    color: '#333',
  },
  userInfo: {
    marginBottom: 20,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
  },
  subtitle: {
    fontSize: 14,
    color: '#555',
  },
});
