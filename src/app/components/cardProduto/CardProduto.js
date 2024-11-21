import React from 'react';
import { View, Text, Image } from 'react-native';
import { styles } from './style';

const ProductCard = ({product}) => {

    return (
        <View style={styles.cardContainer}>
            <View style={styles.productsContainer}>
                <View key={product.id} style={styles.productItem}>
                    <Image source={{uri: product.photo}} style={styles.productImage}/>
                    <Text style={styles.productName}>{product.name}</Text>
                    <Text style={styles.productPrice}>R$ {product.price}</Text>
                </View>
            </View>
        </View>
    );
};

export default ProductCard;