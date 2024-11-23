import React, { useContext } from 'react';
import { View, FlatList, Text } from 'react-native';
import { CartContext } from '../../hooks/CartContext';
import CardCarrinho from '../../components/cardCarrinho/CardCarrinho';
import styles from './style';

const CartPage = () => {
  const { cartItems, total, removeItem } = useContext(CartContext);

  return (
    <View style={styles.container}>
      <FlatList
        data={cartItems}
        keyExtractor={item => item.cartItemId}
        renderItem={({ item }) => (
          <CardCarrinho item={item} removeItem={removeItem} />
        )}
      />
      <View style={styles.total}>
        <Text style={styles.totalText}>Total: R${total.toFixed(2)}</Text>
      </View>
    </View>
  );
};

export default CartPage;
