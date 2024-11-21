import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        backgroundColor: '#fff',
    },
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-start',
        padding: 10,
        borderBottomWidth: 1,
        borderColor: '#ddd',
    },
    logo: {
        width: 62,
        height: 50,
        marginRight: 10,
    },
    logo2: {
        width: 200,
        height: 50,
        marginRight: 10,
    },
    headerText: {
        fontSize: 45,
        fontWeight: 'bold',
        fontFamily: 'Poppins',
        color: '#d50132',
    },
    content: {
        width: '100%',
        height: 50,
        justifyContent: 'center',
    },
    lojaText: {
        padding: 20,
        fontWeight: 'bold',
        fontSize: 15,
    },
    storeList: {
        paddingHorizontal: 10,
    },
    image: {
        width: 350,
        height: 150,    
        padding: 10,
        borderRadius: 10,
    },
    separator: {
        width: 10,
    },
    flat: {
        padding: 15,
    }
});
