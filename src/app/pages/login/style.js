import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    padding: 20,
    justifyContent: 'center',
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#d50132',
    textAlign: 'center',
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 16,
    color: '#666',
    textAlign: 'center',
    marginBottom: 30,
  },
  label: {
    fontSize: 16,
    color: '#333',
    marginBottom: 5,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    padding: 12,
    backgroundColor: '#fff',
    marginBottom: 10,
  },
  errorInput: {
    borderColor: '#d50132',
  },
  errorText: {
    color: '#d50132',
    fontSize: 12,
    marginBottom: 10,
  },
  button: {
    backgroundColor: '#FFFFFF',
    padding: 15,
    borderRadius: 8,
    alignItems: 'center',
    marginTop: 10,
    borderWidth: 2,
    borderColor: '#d50132',
  },
  buttonText: {
    color: 'black',
    fontSize: 16,
    fontWeight: 'bold',
  },
  forgotPassword: {
    color: '#d50132',
    textAlign: 'center',
    marginTop: 15,
    textDecorationLine: 'underline',
  },
});
