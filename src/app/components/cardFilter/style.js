import {StyleSheet} from "react-native";

export const styles = StyleSheet.create({
    conteiner: {
        padding: 16,
        borderBottomWidth: 1,
        borderColor: '#eee',
    },
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