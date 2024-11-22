import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        backgroundColor: '#fff',
        marginLeft: 15,
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
        height: 60,
        marginRight: 10,
    },
    logo2: {
        width: 200,
        height: 50,
        marginRight: 10,
    },
    logoSuper: {
        width: 80,
        height: 80,
        marginRight: 10,
        borderRadius: 50,
        marginBottom: 10,
    },
    lojaSuperText: {
        fontSize: 14,
        width: 100,
        textAlign: 'center',
        paddingBottom: 10,
    },
    storeSuper: {
        flexDirection: 'row',
        backgroundColor: '#fff',
        padding: 15,
        borderRadius: 8,
        marginBottom: 10,
        width: '100%',
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
        paddingLeft: 20,
        fontWeight: 'bold',
        fontSize: 18,
    },
    subText: {
        paddingLeft: 20,
        fontSize: 14,
        color: '#888',
        fontWeight: 'bold',
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
    content2: {
        paddingTop: 10,
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        marginHorizontal: 10,
    }
});
