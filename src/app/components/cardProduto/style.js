import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    cardContainer: {
        padding: 16,
    },
    storeName: {
        fontSize: 18,
        fontWeight: 'bold',
    },
    storeCategory: {
        fontSize: 14,
        color: '#666',
        marginBottom: 8,
    },
    productsContainer: {
        flexDirection: 'row',
        flexWrap: 'wrap',
    },
    productItem: {
        width: '48%',
        marginBottom: 16,
    },
    productImage: {
        width: '100%',
        height: 100,
        borderRadius: 8,
    },
    productName: {
        fontSize: 14,
        fontWeight: 'bold',
        marginTop: 8,
    },
    productPrice: {
        fontSize: 14,
        color: '#333',
    },
});
