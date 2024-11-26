import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import { styles } from './style';

const CardPedido = ({ pedido, loja, index, setCurrentScreen }) => {
    const produtos = pedido.items
        .map((produto) => produto.name)
        .join(", ");

    const goToDetalhes = () => {
        setCurrentScreen("DetalhesPedido", { pedido, loja });
    };
    return (
        <TouchableOpacity
            onPress={goToDetalhes}
            key={pedido.id}
            style={styles.conteinerCard}
        >
        <View style={styles.content2}>
                <Image
                    style={styles.image}
                    source={{
                        uri: pedido.items[0]?.photo || "https://via.placeholder.com/150",
                    }}
                />
                <View style={styles.content3}>
                    <Text style={styles.NomeLoja}>{loja.name}</Text>
                    <Text style={styles.NumeroPedido}>
                        Pedido concluído ⦁ N°: {index + 100}
                    </Text>
                </View>
            </View>

            <View
                style={[
                    styles.divider,
                    {
                        backgroundColor: '#ccc',
                        height: 1,
                        marginVertical: 10,
                    },
                ]}
            />

            <View style={styles.content4}>
                <Text style={styles.textQuantity}>{pedido.items.length}</Text>
                <Text style={styles.textProdutos}>{produtos}</Text>
            </View>

            <View
                style={[
                    styles.divider,
                    {
                        backgroundColor: '#ccc',
                        height: 1,
                        marginVertical: 10,
                    },
                ]}
            />

            <View style={styles.content5}>
                <TouchableOpacity>
                    <Text style={styles.buttonText}>Ajuda</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button}>
                    <Text style={styles.buttonText}>Adicionar à sacola</Text>
                </TouchableOpacity>
            </View>
        </TouchableOpacity>
    );
};

export default CardPedido;