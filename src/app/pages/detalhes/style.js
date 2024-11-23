import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    backgroundColor: '#f8f8f8',
    paddingBottom: 20,
  },
  botaoVoltar: {
    position: 'absolute',
    top: 30,
    left: 15,
    zIndex: 10,
  },
  imagemTopo: {
    width: '100%',
    height: 200,
  },
  cardLoja: {
    backgroundColor: '#fff',
    marginHorizontal: 15,
    marginTop: -30,
    borderRadius: 10,
    padding: 15,
    paddingTop: 40,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3,
  },
  containerLogo: {
    position: 'absolute',
    top: -30,
    alignSelf: 'center',
    zIndex: 10,
  },
  cupomContainer: {
    // marginTop: 10,
    // padding: 10,
    // backgroundColor: '#f0f8ff',
    // borderRadius: 5,
    // alignItems: 'center',
    // justifyContent: 'center',
  },
  
  cupomTexto: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#ff6347',
  },  
  logoLoja: {
    width: 60,
    height: 60,
    borderRadius: 30,
    borderWidth: 3,
    borderColor: '#fff',
  },
  infoLoja: {

  },
  nomeLoja: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#333',
  },
  avaliacaoLoja: {
    fontSize: 16,
    color: '#666',
  },
  detalhesLoja: {
    marginTop: 10,
  },
  textoDetalhe: {
    fontSize: 14,
    color: '#666',
    marginBottom: 0,
  },
  separadorLinha: {
    borderBottomWidth: 1,
    borderBottomColor: '#e0e0e0',
    marginVertical: 5,
  },
  campoBusca: {
    height: 40,
    borderRadius: 20,
    backgroundColor: '#fff',
    margin: 15,
    paddingLeft: 15,
    fontSize: 16,
    color: '#333',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
  },
  tituloProdutos: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#333',
    marginLeft: 20,
    marginTop: 15,
    marginBottom: 15,
  },
  cardProduto: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    marginHorizontal: 15,
    marginBottom: 20,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    padding: 15,
  },
  infoProduto: {
    flex: 1,
  },
  nomeProduto: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
  },
  descricaoProduto: {
    fontSize: 14,
    color: '#666',
    marginTop: 5,
  },
  priceButtonContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10,
  },
  precoProduto: {
    fontSize: 16,
    fontWeight: 'bold',
    marginTop: 10,
    color: '#e91e63',
    marginRight: 10,
  },
  imagemProduto: {
    width: 100,
    height: 100,
    borderRadius: 10,
  },
  addButton: {
    backgroundColor: 'red',
    paddingVertical: 8,
    paddingHorizontal: 12,
    borderRadius: 4,
    alignItems: 'center',
  },
  addButtonText: {
    color: '#fff',
    fontSize: 14,
    fontWeight: 'bold',
  },
});
