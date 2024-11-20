import {StyleSheet} from "react-native";

export const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 5,
        borderBottomWidth: 1,
        borderColor: '#ddd',
        alignItems: 'center',
    },
    categoryButton: {
        paddingHorizontal: 15,
        marginHorizontal: 5,
    },
    selectedCategoryButton: {
        borderBottomWidth: 1,
        borderBottomColor: 'red',
    },
    categoryText: {
        fontSize: 16,
        color: '#333',
        alignSelf: 'center',
        fontWeight: 'bold',
        paddingVertical: 14
    },
    selectedCategoryText: {
        color: 'red',
        borderBottomWidth: 1,
        borderBottomColor: 'red',
    },
});