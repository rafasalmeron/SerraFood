import {StyleSheet} from "react-native";

export const styles = StyleSheet.create({
    storeCard: {
        flex: 1,
        width: '100%',
        flexDirection: 'column',
        marginBottom: 10,
        borderRadius: 8,
        padding: 10,
        backgroundColor: '#fff',
    },
    storeInfo: {
        flexDirection: 'row',
        marginBottom: 10,
    },
    storeLogo: {
        width: 50,
        height: 50,
        borderRadius: 25,
        marginRight: 10,
    },
    storeName: {
        fontSize: 18,
        fontWeight: 'bold',
    },
    storeDetails: {
        fontSize: 12,
        color: '#777',
    },
    productsContainer: {
        marginTop: 10,
    },
    conteiner: {
        backgroundColor: '#fff',
        flex: 1,
        gap: 10,
    },
    content: {
        flexDirection: 'column',
        justifyContent: 'center',
    },
    content2: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingBottom: 5,
    },
    content3: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        width: '100%',
        justifyContent: 'space-between',
    },
    text2: {
        fontFamily: 'Roboto',
        color: '#e7a74e',
        fontWeight: 'bold',
    },
    text3: {
        fontFamily: 'Roboto',
        color: 'gray',
    },
    text4: {
        fontFamily: 'Roboto',
        color: '#5bab85',
    },
    text5: {
        fontFamily: 'Roboto',
        color: '#5b8088',
        backgroundColor: '#eef3f5',
        borderRadius: 5,
        padding: 3,
        width: '100%',
        textAlign: 'center',
    },
    iconDiscount: {
        width: 15,
        height: 15,
        marginRight: 5,
    },
    buttonPressed: {
        backgroundColor: '#939393',
    },
    logoLojas: {
        width: 70,
        height: 70,
        marginRight: 10,
        borderRadius: 50,
    },
    super:{
        width:13,
        height:13,
        borderRadius:50,
        marginRight:10,
    },
    storeList: {
        paddingHorizontal: 10,
    },
    storeItem: {
        flex: 1,
        width: '100%',
        flexDirection: 'column',
        backgroundColor: '#fff',
        padding: 15,
        borderRadius: 8,
        marginBottom: 10,

    },
    storeItemPressed: {
        backgroundColor: '#f0f0f0',
        boxShadow: '#000',
        boxShadowOff: {width: 0, height: 2},
        boxShadowOpacity: 0.1,
        boxShadowRadius: 4,
        elevation: 2,
    },
    storeText: {
        fontFamily: 'Helvetica',
        fontSize: 16,
        color: '#333',
        fontWeight: 'bold',
        paddingRight: 20,
        width: 230,
    },
    emptyText: {
        textAlign: 'center',
        fontSize: 16,
        color: '#999',
        marginTop: 20
    }
});