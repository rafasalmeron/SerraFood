import React from 'react';
import { View, Text, Image } from 'react-native';
import { styles } from './style';

const ProductCard = ({product}) => {
    console.log('Product Data:', product);
    return (
        <View style={styles.cardContainer}>
            <View style={styles.productsContainer}>
                <View key={product.id} style={styles.productItem}>
                    <Image source={{uri: product.image}} style={styles.productImage}/>
                    <Text style={styles.productName}>{product.name}</Text>
                </View>
            </View>
        </View>
    );
};

export default ProductCard;