import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  total: {
    marginTop: 20,
    padding: 15,
    backgroundColor: '#eee',
  },
  totalText: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  descontoText: {
    fontSize: 16,
    color: 'green',
    marginTop: 10,
  },
  cupomContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 20,
  },
  cupomInput: {
    flex: 1,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    padding: 10,
    marginRight: 10,
  },
  cupomButton: {
    padding: 10,
    backgroundColor: '#4CAF50',
    borderRadius: 5,
    alignItems: 'center',
  },
  cupomButtonText: {
    color: '#fff',
    fontSize: 14,
    fontWeight: 'bold',
  },
  metodosPagamento: {
    marginVertical: 20,
  },
  metodosTitulo: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  pickerContainer: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
  },
  picker: {
    height: 50,
    width: '100%',
  },
  finalizarButton: {
    padding: 15,
    backgroundColor: '#4CAF50',
    borderRadius: 5,
    alignItems: 'center',
  },
  finalizarButtonText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#fff',
  },
});

export default styles;
