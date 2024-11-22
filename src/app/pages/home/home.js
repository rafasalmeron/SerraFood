import {View, Text, Image, ScrollView, FlatList} from "react-native";
import {useState} from "react";
import Nav from "../../components/nav/Nav";
import {styles} from "./style";
import {stores} from "../../api/lojas";
import CardLoja from "../../components/cardLoja/CardLoja";
import logoFood from "../../../../assets/LogoSerraFood3.png";
import CardProduto from "../../components/cardProduto/CardProduto";

const Home = () => {
  const [selectedCategory, setSelectedCategory] = useState("Início");
  const imagens = [
    {
      id: 1,
      url: 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiOffRNAGCAONsiYnLApY_u31MLeCm-PZREKRT2noftZzhinIGCFF4wvjthtsNYiNQlAc1Adq-hBdcBt0G1O-737JEfR0HJkxzk1pQE_B2w2ZY8yMJ1k6AgLgWyThOEGPSgumaAEzHjLQaQ/s900/Promo%25C3%25A7%25C3%25A3o-Ifood-Tudo-Por-Apenas-0%252C99.webp',
    },
    {
      id: 2,
      url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSZ2iEqrb8Zw_qA0LI9nUjWne87N4zC3ZgPYA&s',
    },
    {
      id: 3,
      url: 'https://picsum.photos/350/150?random=3',
    },
  ];
  const filteredStores =
    selectedCategory === "Início"
      ? stores
      : stores.filter((lojas) => lojas.category === selectedCategory);

  return (
    <ScrollView style={styles.mainContainer}>
      <View style={styles.header}>
        <Image source={logoFood} style={styles.logo} />
        <Text style={styles.headerText}>Serra Food</Text>
      </View>

      <View style={styles.content}>
        <Nav onCategorySelect={(category) => setSelectedCategory(category)} />
      </View>

      <FlatList style={styles.flat}
        data={imagens}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (         
            <Image source={{ uri: item.url }} style={styles.image} resizeMode="contain" />
        )}
        horizontal
        ItemSeparatorComponent={
            () => <View style={styles.separator} />
        }
      />
      <Text style={styles.lojaText}>Lojas</Text>

      <FlatList
        data={filteredStores}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => <CardLoja item={item} />}
        ListEmptyComponent={
          <Text style={styles.emptyText}>Nenhuma loja encontrada.</Text>
        }
        contentContainerStyle={styles.storeList}
      />
    </ScrollView>
  );
=======
    const [selectedCategory, setSelectedCategory] = useState("Início");

    const imagens = [
        { id: 1, url: 'https://picsum.photos/350/150?random=1', },
        { id: 2, url: 'https://picsum.photos/350/150?random=2', },
        { id: 3, url: 'https://picsum.photos/350/150?random=3', },
    ];

    const filteredStores =
        selectedCategory === "Início"
            ? stores
            : stores.filter((lojas) => lojas.category === selectedCategory);

    const produtosBaratos = stores
        .flatMap((loja) => loja.produtos)
        .filter((produto) => produto.price < 30);

    const lojasSuper = stores.filter((loja) => loja.super !== '');
    const freteGratis = stores.filter((loja) => loja.frete === 'gratis');

    return (
        <ScrollView style={styles.mainContainer}>
            <View style={styles.header}>
                <Image source={logoFood} style={styles.logo}/>
                <Text style={styles.headerText}>Serra Food</Text>
            </View>

            <View style={styles.content}>
                <Nav onCategorySelect={(category) => setSelectedCategory(category)}/>
            </View>

            <FlatList style={styles.flat}
                      data={imagens}
                      keyExtractor={(item) => item.id.toString()}
                      renderItem={({item}) => (
                          <Image source={{uri: item.url}} style={styles.image} resizeMode="contain"/>
                      )}
                      horizontal
                      ItemSeparatorComponent={
                          () => <View style={styles.separator}/>
                      }
            />

            <View>
                <Text style={styles.lojaText}>Bom e Barato</Text>
                <Text style={styles.subText}>Opções de até R$30</Text>
            </View>

            <FlatList
                data={produtosBaratos}
                renderItem={
                    ({item}) => (
                        <CardProduto product={item}/>
                    )}
                horizontal
            />

            <Text style={styles.lojaText}>Lojas Super</Text>

            <FlatList
                data={lojasSuper}
                renderItem={
                    ({item}) => (
                       <View  style={styles.content2}>
                           <Image
                               source={{uri: item.logo}}
                               style={styles.logoSuper}
                           />
                            <Text style={styles.lojaSuperText}>{item.name}</Text>
                       </View>
                    )
                }
                horizontal
            />

            <FlatList
                data={freteGratis}
                renderItem={
                    ({item}) => (
                        <CardLoja item={item}/>
                    )
                }
                horizontal
            />

            <Text style={styles.lojaText}>Lojas</Text>

            <FlatList
                data={filteredStores}
                keyExtractor={(item) => item.id.toString()}
                renderItem={({item}) => <CardLoja item={item}/>}
                ListEmptyComponent={
                    <Text style={styles.emptyText}>Nenhuma loja encontrada.</Text>
                }
                contentContainerStyle={styles.storeList}
            />
        </ScrollView>
    );
};

export default Home;