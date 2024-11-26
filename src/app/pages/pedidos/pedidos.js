import React, { useContext } from "react";
import { Text, View } from "react-native";
import { CartContext } from "../../hooks/CartContext";
import { stores } from "../../api/lojas";
import CardPedido from "../../components/cardPedido/CardPedido";
import { styles } from "./style";

const Pedidos = ({ setCurrentScreen }) => {
    const { pedidos } = useContext(CartContext);

    const identificarLoja = (storeId) => {
        const loja = stores.find((store) => store.id === storeId);
        return loja ? loja : "Loja não encontrada";
    };

    return (
        <View style={styles.container}>
            <View style={styles.content1}>
                <Text style={styles.text}>Histórico</Text>
            </View>
            {pedidos.length === 0 ? (
                <Text style={styles.text}>Nenhum pedido concluído</Text>
            ) : (
                pedidos.map((pedido, index) => {
                    const storeId = pedido.items[0]?.storeId.toString();
                    const loja = identificarLoja(storeId);

                    return (
                        <CardPedido
                            key={pedido.id}
                            pedido={pedido}
                            loja={loja}
                            index={index}
                            setCurrentScreen={setCurrentScreen}
                        />
                    );
                })
            )}
        </View>
    );
};

export default Pedidos;