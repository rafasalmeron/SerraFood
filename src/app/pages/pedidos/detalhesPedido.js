import React from "react";
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from "react-native";
import {calcularPrevisaoEntrega} from "../../functions/calcularPrevisaoEntrega";

const DetalhesDoPedido = ({ route }) => {
    const { pedido, loja } = route.params;
    const previsaoEntrega = calcularPrevisaoEntrega(loja.tempoPreparo);

    const calcularSubtotal = () => {
        return pedido.items
            .reduce((acc, item) => acc + parseFloat(item.price), 0)
            .toFixed(2);
    };

    return (
        <ScrollView style={styles.container}>

            <Text style={styles.loja}>{loja.name}</Text>

            <Text style={styles.previsao}>{previsaoEntrega}</Text>

            <View style={styles.itensContainer}>
                {pedido.items.map((item, index) => (
                    <View key={index} style={styles.item}>
                        <Text style={styles.itemQuantidade}>1x</Text>
                        <Text style={styles.itemDescricao}>{item.name}</Text>
                        <Text style={styles.itemPreco}>R$ {item.price}</Text>
                    </View>
                ))}
            </View>

            <View style={styles.resumoContainer}>
                <Text style={styles.label}>Subtotal</Text>
                <Text style={styles.valor}>R$ {calcularSubtotal()}</Text>
                <Text style={styles.label}>Cupom</Text>
                <Text style={styles.valor}>- R$ {pedido.cupom || "0,00"}</Text>
                <Text style={styles.label}>Taxa de entrega</Text>
                <Text style={styles.valor}>{pedido.deliveryFee || "Grátis"}</Text>
                <Text style={styles.totalLabel}>Total</Text>
                <Text style={styles.totalValor}>R$ {pedido.total}</Text>
            </View>

            <View style={styles.infoContainer}>
                <Text style={styles.label}>Nº do pedido</Text>
                <Text>{pedido.orderNumber}</Text>
                <Text style={styles.label}>Data do pedido</Text>
                <Text>{pedido.orderDate}</Text>
                <Text style={styles.label}>Status do pedido</Text>
                <Text>{pedido.status}</Text>
            </View>

            <View style={styles.acoes}>
                <TouchableOpacity style={styles.botao}>
                    <Text style={styles.botaoTexto}>Ver cardápio completo</Text>
                </TouchableOpacity>
            </View>
        </ScrollView>
    );
};

export default DetalhesDoPedido;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 15,
        backgroundColor: "#fff",
    },
    loja: {
        fontSize: 20,
        fontWeight: "bold",
        marginBottom: 5,
    },
    previsao: {
        fontSize: 16,
        color: "#666",
        marginBottom: 20,
    },
    itensContainer: {
        marginBottom: 20,
    },
    item: {
        flexDirection: "row",
        justifyContent: "space-between",
        marginBottom: 10,
    },
    itemQuantidade: {
        fontSize: 16,
        fontWeight: "bold",
    },
    itemDescricao: {
        fontSize: 16,
        flex: 1,
        marginLeft: 10,
    },
    itemPreco: {
        fontSize: 16,
        color: "#333",
    },
    resumoContainer: {
        borderTopWidth: 1,
        borderColor: "#ddd",
        paddingTop: 10,
        marginBottom: 20,
    },
    label: {
        fontSize: 14,
        color: "#666",
    },
    valor: {
        fontSize: 16,
        marginBottom: 5,
    },
    totalLabel: {
        fontSize: 18,
        fontWeight: "bold",
    },
    totalValor: {
        fontSize: 18,
        fontWeight: "bold",
        color: "#333",
    },
    enderecoContainer: {
        marginBottom: 20,
    },
    endereco: {
        fontSize: 16,
    },
    referencia: {
        fontSize: 14,
        color: "#666",
    },
    infoContainer: {
        marginBottom: 20,
    },
    acoes: {
        alignItems: "center",
    },
    botao: {
        backgroundColor: "#ff7d01",
        padding: 15,
        borderRadius: 5,
        width: "80%",
    },
    botaoTexto: {
        color: "#fff",
        textAlign: "center",
        fontSize: 16,
        fontWeight: "bold",
    },
});
