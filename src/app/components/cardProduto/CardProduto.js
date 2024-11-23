import React, { useContext } from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import { styles } from './style';
import { CartContext } from '../../hooks/CartContext'; 

const ProductCard = ({product}) => {
    const { addItem } = useContext (CartContext);

    return (
        <View style={styles.cardContainer}>
            <View style={styles.productsContainer}>
                <View key={product.id} style={styles.productItem}>
                    <Image source={{uri: product.photo}} style={styles.productImage}/>
                    <Text style={styles.productName}>{product.name}</Text>
                    <Text style={styles.productPrice}>R$ {product.price.toFixed(2)}</Text>
                    <TouchableOpacity
                        style={styles.addButton}
                        onPress={() => addItem(product)}
                    >
                        <Text style={styles.addButtonText}>Adicionar ao Carrinho</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
};

export default ProductCard;