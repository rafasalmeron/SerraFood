import { View, Text, Image, ScrollView, FlatList, HorizontalScrollView } from "react-native";
import { useState } from "react";
import Nav from "../../components/nav/Nav";
import { styles } from "./style";
import { stores } from "../../api/lojas";
import CardLoja from "../../components/cardLoja/CardLoja";
import logoFood from "../../../../assets/LogoSerraFood3.png";

const Home = () => {
  const [selectedCategory, setSelectedCategory] = useState("Início");
  const imagens = [
    {
      id: 1,
      url: 'https://picsum.photos/350/150?random=1',
    },
    {
      id: 2,
      url: 'https://picsum.photos/350/150?random=2',
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
};

export default Home;
