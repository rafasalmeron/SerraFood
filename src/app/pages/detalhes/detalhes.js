import { 
  Image, 
  ScrollView, 
  Text, 
  View, 
  TextInput, 
  FlatList, 
  TouchableOpacity 
} from "react-native";
import Icon from 'react-native-vector-icons/Ionicons';
import { useState } from 'react';
import { styles } from "./style";

const DetalhesLoja = () => {
  const loja = {
    id: '2',
    logo: 'https://picsum.photos/200/300?random=2',
    nome: 'Pizzaria Italiana',
    estrelas: 4.7,
    frete: 'Grátis',
    distancia: '1,0 km',
    tempoPreparo: '20-30 min',
    categoria: 'Pizzas',
    cupom: 'Cupom de 15% OFF',
    imagemLoja: 'https://picsum.photos/200/300?random=5',
    produtos: [
      { id: 1002, nome: "Pizza Margherita", preco: 49.99, categoria: "Pizzas", descricao: "Pizza com molho de tomate, queijo mozzarella, manjericão fresco e azeite.", foto: "https://picsum.photos/200/300?random=53", idLoja: 2 },
      { id: 1003, nome: "Pizza Pepperoni", preco: 55.99, categoria: "Pizzas", descricao: "Pizza com molho de tomate, queijo mozzarella e fatias de pepperoni crocante.", foto: "https://picsum.photos/200/300?random=54", idLoja: 2 },
      { id: 1004, nome: "Pizza Quatro Queijos", preco: 59.99, categoria: "Pizzas", descricao: "Pizza com molho de tomate, queijo mozzarella, queijo gorgonzola, queijo parmesão e queijo provolone.", foto: "https://picsum.photos/200/300?random=55", idLoja: 2 },
      { id: 1005, nome: "Pizza Calabresa", preco: 57.99, categoria: "Pizzas", descricao: "Pizza com molho de tomate, queijo mozzarella e calabresa fatiada.", foto: "https://picsum.photos/200/300?random=56", idLoja: 2 },
      { id: 1006, nome: "Pizza Frango com Catupiry", preco: 62.99, categoria: "Pizzas", descricao: "Pizza com molho de tomate, queijo mozzarella, frango desfiado e catupiry.", foto: "https://picsum.photos/200/300?random=57", idLoja: 2 },
      { id: 1007, nome: "Pizza Portuguesa", preco: 64.99, categoria: "Pizzas", descricao: "Pizza com molho de tomate, queijo mozzarella, presunto, ovo, azeitona e cebola.", foto: "https://picsum.photos/200/300?random=58", idLoja: 2 },
      { id: 1008, nome: "Pizza Vegetariana", preco: 56.99, categoria: "Pizzas", descricao: "Pizza com molho de tomate, queijo mozzarella, brócolis, cogumelos e pimentão.", foto: "https://picsum.photos/200/300?random=59", idLoja: 2 },
      { id: 1009, nome: "Pizza Frutos do Mar", preco: 67.99, categoria: "Pizzas", descricao: "Pizza com molho de tomate, queijo mozzarella, camarão, lula e molho branco.", foto: "https://picsum.photos/200/300?random=60", idLoja: 2 },
      { id: 1010, nome: "Pizza de Carne Seca", preco: 63.99, categoria: "Pizzas", descricao: "Pizza com molho de tomate, queijo mozzarella e carne seca desfiada.", foto: "https://picsum.photos/200/300?random=61", idLoja: 2 },
      { id: 1011, nome: "Pizza de Bacon com Cheddar", preco: 61.99, categoria: "Pizzas", descricao: "Pizza com molho de tomate, queijo mozzarella, bacon crocante e cheddar.", foto: "https://picsum.photos/200/300?random=62", idLoja: 2 },
      { id: 1012, nome: "Pizza de Pepperoni com Bacon", preco: 65.99, categoria: "Pizzas", descricao: "Pizza com molho de tomate, queijo mozzarella, pepperoni e bacon crocante.", foto: "https://picsum.photos/200/300?random=63", idLoja: 2 }
   ]
  };

  const [searchTerm, setSearchTerm] = useState("");

  const produtosFiltrados = loja.produtos.filter((produto) =>
    produto.nome.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const lidarComProduto = (idProduto) => {
    console.log('Produto selecionado:', idProduto);
  };

  return (
    <ScrollView style={styles.container}>
      <TouchableOpacity style={styles.botaoVoltar} onPress={() => {}}>
        <Icon name="arrow-back" size={30} color="#fff" />
      </TouchableOpacity>
      <Image
        source={{ uri: loja.imagemLoja }}
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
          <Text style={styles.nomeLoja}>{loja.nome}</Text>
          <Text style={styles.avaliacaoLoja}>Avaliação: ⭐ {loja.estrelas}</Text>
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

      <TextInput
        style={styles.campoBusca}
        placeholder="Buscar Produtos"
        placeholderTextColor="#888"
        value={searchTerm}
        onChangeText={setSearchTerm}
      />

      <Text style={styles.tituloProdutos}>Produtos</Text>
      <FlatList
        data={produtosFiltrados}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => lidarComProduto(item.id)}>
            <View style={styles.cardProduto}>
              <View style={styles.infoProduto}>
                <Text style={styles.nomeProduto}>{item.nome}</Text>
                <Text style={styles.descricaoProduto}>{item.descricao}</Text>
                <Text style={styles.precoProduto}>R${item.preco}</Text>
              </View>
              <Image
                source={{ uri: item.foto }}
                style={styles.imagemProduto}
              />
            </View>
          </TouchableOpacity>
        )}
        keyExtractor={(item) => item.id.toString()}
      />
    </ScrollView>
  );
};

export default DetalhesLoja;
