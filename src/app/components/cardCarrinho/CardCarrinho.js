import React from 'react';
import { Image, Text, View, TouchableOpacity } from 'react-native';
import styles from './style';

const CardCarrinho = ({ item, removeItem }) => {
  return (
    <View style={styles.card}>
      <Image source={{ uri: item.photo }} style={styles.image} />
      <View style={styles.details}>
        <Text style={styles.name}>{item.name}</Text>
        <Text style={styles.price}>R${item.price.toFixed(2)}</Text>
        <TouchableOpacity style={styles.removeButton} onPress={() => removeItem(item.cartItemId)}>
          <Text style={styles.removeButtonText}>Remover</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default CardCarrinho;