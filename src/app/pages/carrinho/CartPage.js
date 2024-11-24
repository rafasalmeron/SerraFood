import React, { useContext, useState } from 'react';
import { View, FlatList, Text, TouchableOpacity, TextInput, Alert } from 'react-native';
import { CartContext } from '../../hooks/CartContext';
import CardCarrinho from '../../components/cardCarrinho/CardCarrinho';
import styles from './style';
import { Picker } from '@react-native-picker/picker';

const CartPage = () => {
  const { cartItems, total, removeItem, finalizarCompra, aplicarCupom, desconto } = useContext(CartContext);
  const [metodoPagamento, setMetodoPagamento] = useState(null);
  const [cupomInput, setCupomInput] = useState('');

  const handleAplicarCupom = () => {
    aplicarCupom(cupomInput);
    setCupomInput('');
  };

  const handleFinalizarCompra = () => {
    finalizarCompra(metodoPagamento);
    Alert.alert(
      "Compra Realizada",
      "Sua compra foi realizada com sucesso!",
    );
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={cartItems}
        keyExtractor={item => item.cartItemId}
        renderItem={({ item }) => (
          <CardCarrinho item={item} removeItem={removeItem} />
        )}
        contentContainerStyle={styles.flatListContent} />
      <View style={styles.footer}>
        <View style={styles.total}>
          <Text style={styles.totalText}>Total: R${total.toFixed(2)}</Text>
          {desconto > 0 && (
            <Text style={styles.descontoText}>Desconto aplicado: R${desconto}</Text>
          )}
        </View>
        <View style={styles.cupomContainer}>
          <TextInput
            style={styles.cupomInput}
            placeholder="Digite o cupom de desconto"
            value={cupomInput}
            onChangeText={setCupomInput} />
          <TouchableOpacity style={styles.cupomButton} onPress={handleAplicarCupom}>
            <Text style={styles.cupomButtonText}>Aplicar Cupom</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.metodosPagamento}>
          <Text style={styles.metodosTitulo}>Selecione o método de pagamento:</Text>
          <View style={styles.pickerContainer}>
            <Picker
              selectedValue={metodoPagamento}
              onValueChange={(itemValue) => setMetodoPagamento(itemValue)}
              style={styles.picker}>
              <Picker.Item label="Cartão" value="cartao" />
              <Picker.Item label="Pix" value="pix" />
              <Picker.Item label="Dinheiro" value="dinheiro" />
            </Picker>
          </View>
        </View>
        <TouchableOpacity style={styles.finalizarButton} onPress={handleFinalizarCompra}>
          <Text style={styles.finalizarButtonText}>Fechar Compra</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default CartPage;
