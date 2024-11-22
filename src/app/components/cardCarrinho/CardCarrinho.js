import React from 'react';
import { View, Text, Button } from 'react-native';
import styles from './style';

const CardCarrinho = ({ item, removeItem }) => {
  return (
    <View style={styles.item}>
      <Text style={styles.itemText}>{item.name}</Text>
      <Text style={styles.itemPrice}>R${item.price.toFixed(2)}</Text>
      <Button title="Remover" onPress={() => removeItem(item.id)} />
    </View>
  );
};

export default CardCarrinho;
