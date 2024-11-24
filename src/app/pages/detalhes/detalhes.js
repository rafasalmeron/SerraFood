import React, { useState, useContext } from 'react';
import {
  Image,
  Text,
  View,
  FlatList,
  TouchableOpacity,
} from "react-native";
import Icon from 'react-native-vector-icons/Ionicons';
import { useRoute, useNavigation } from '@react-navigation/native';
import { styles } from "./style";
import { CartContext } from '../../hooks/CartContext';

const DetalhesLoja = () => {
  const route = useRoute();
  const navigation = useNavigation();
  const { loja } = route.params;
  const { addItem } = useContext(CartContext);

  const [searchTerm, setSearchTerm] = useState("");

  const produtosFiltrados = loja.produtos.filter((produto) => {
    return produto.name.toLowerCase().includes(searchTerm.toLowerCase());
  });

  const lidarComProduto = (idProduto) => {
    console.log('Produto selecionado:', idProduto);
  };

  return (
    <FlatList
      data={produtosFiltrados}
      ListHeaderComponent={() => (
        <View>
          <TouchableOpacity style={styles.botaoVoltar} onPress={() => navigation.goBack()}>
            <Icon name="arrow-back" size={30} color="#fff" />
          </TouchableOpacity>

          <Image
            source={{ uri: loja.lojaSuper }}
            style={styles.imagemTopo}
          />

          <View style={styles.cardLoja}>
            <View style={styles.containerLogo}>
              <Image
                source={{ uri: loja.logo }}
                style={styles.logoLoja}
              />
            </View>
            <View style={styles.infoLoja}>
              <Text style={styles.nomeLoja}>{loja.name}</Text>
              <Text style={styles.avaliacaoLoja}>Avaliação: ⭐ {loja.star}</Text>
            </View>
            <View style={styles.detalhesLoja}>
              <View style={styles.separadorLinha}></View>
              <Text style={styles.textoDetalhe}>Frete: {loja.frete}</Text>
              <View style={styles.separadorLinha}></View>
              <Text style={styles.textoDetalhe}>Distância: {loja.distancia}</Text>
              <View style={styles.separadorLinha}></View>
              <Text style={styles.textoDetalhe}>Tempo de Preparo: {loja.tempoPreparo}</Text>
              <View style={styles.separadorLinha}></View>
            </View>
            <View style={styles.cupomContainer}>
              <Text style={styles.cupomTexto}>{loja.cupom}</Text>
            </View>
          </View>

          <Text style={styles.tituloProdutos}>Produtos</Text>
        </View>
      )}
      renderItem={({ item }) => (
        <View style={styles.cardProduto}>
          <View style={styles.infoProduto}>
            <Text style={styles.nomeProduto}>{item.name}</Text>
            <Text style={styles.descricaoProduto}>{item.description}</Text>
            <View style={styles.priceButtonContainer}>
              <Text style={styles.precoProduto}>R${item.price}</Text>
              <TouchableOpacity
                style={styles.addButton}
                onPress={() => addItem(item)}>
                <Text style={styles.addButtonText}>Adicionar ao Carrinho</Text>
              </TouchableOpacity>
            </View>
          </View>
          <Image
            source={{ uri: item.photo }}
            style={styles.imagemProduto}
          />
        </View>
      )}
      keyExtractor={(item) => item.id.toString()}
    />
  );
};

export default DetalhesLoja;
