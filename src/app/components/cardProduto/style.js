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
        marginBottom: 16,
    },
    productImage: {
        width: 150,
        height: 120,
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
    addButton: {
        marginTop: 8,
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
