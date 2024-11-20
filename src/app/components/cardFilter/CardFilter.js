import React from 'react';
import { FlatList, TouchableOpacity, Text, View, Image, StyleSheet } from 'react-native';

const CardFilter = ({ data, onPress, type }) => {

  const renderItem = ({ item }) => (
      <TouchableOpacity
          style={styles.resultItem}
          onPress={() => onPress(item.id)}
      >
        {type === 'store' ? (
            <View style={styles.storeItem}>
              <Image source={{ uri: item.logo }} style={styles.storeLogo} />
              <Text style={styles.storeName}>{item.name}</Text>
            </View>
        ) : (
            <View style={styles.productItem}>
              <Image source={{ uri: item.photo }} style={styles.productImage} />
              <Text style={styles.productName}>{item.name}</Text>
            </View>
        )}
      </TouchableOpacity>
  );

  return (
      <FlatList
          data={data}
          renderItem={renderItem}
          keyExtractor={(item) => item.id.toString()}
      />
  );
};

const styles = StyleSheet.create({
  resultItem: {
    marginBottom: 16,
  },
  storeItem: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  storeLogo: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginRight: 10,
  },
  storeName: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  productItem: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  productImage: {
    width: 50,
    height: 50,
    borderRadius: 5,
    marginRight: 10,
  },
  productName: {
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default CardFilter;
