import {StyleSheet} from "react-native";

export const styles = StyleSheet.create({
    conteinerCard: {
        padding: 10,
        borderRadius: 10,
        borderStyle: "solid",
        borderWidth: 1,
        borderColor: "#ccc",
        marginBottom: 10,
    },
    content2: {
        flexDirection: "row",
        alignItems: "center",
        marginBottom: 15,
    },
    content3: {
        marginLeft: 10,
    },
    content4: {
        flexDirection: "row",
        paddingLeft: 10,
        marginVertical: 15,
        alignItems: "center",
    },
    content5: {
        flexDirection: "row",
        justifyContent: "space-evenly",
        marginVertical: 15,
        width: "100%",
    },
    image: {
        width: 50,
        height: 50,
        borderRadius: 50,
    },
    textQuantity: {
        fontSize: 14,
        fontWeight: "bold",
        marginRight: 10,
        paddingHorizontal: 5,
        backgroundColor: "#ddd",
        borderRadius: 5,
    },
    textProdutos: {
        fontSize: 18,
        color: "#999",
    },
    NomeLoja: {
        fontSize: 18,
    },
    NumeroPedido: {
        fontSize: 14,
        color: "#999",
    },
    button: {},
    buttonText: {
        color: "red",
        fontSize: 18,
        fontWeight: "semibold",
    },
});