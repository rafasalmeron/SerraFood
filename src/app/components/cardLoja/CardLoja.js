import { useNavigation } from '@react-navigation/native';
import { Image, Pressable, Text, View } from "react-native";
import { styles } from "./style";
import icon from '../../../../assets/icons8-discount-40.png';

const CardLoja = ({ item }) => {
  const navigation = useNavigation();

  const handleNavigate = () => {
    navigation.navigate("DetalhesLoja", { loja: item });
  };  

  return (
    <Pressable
      onPress={() => handleNavigate(item)}
      style={styles.storeItem}
    >
      <Image
        source={{ uri: item.logo }}
        style={styles.logoLojas}
      />
      <View style={styles.content}>
        <View style={styles.content2}>
          <Text style={styles.storeText}>{item.name}</Text>
          {item.lojaSuper && (
            <Image
              source={item.lojaSuper}
              style={styles.super}
            />
          )}
        </View>

        <View style={styles.content2}>
          <Text style={styles.text2}>★ {item.star} </Text>
          <Text style={styles.text3}> ⦁ </Text>
          <Text style={styles.text3}> {item.category} </Text>
          <Text style={styles.text3}> ⦁ </Text>
          <Text style={styles.text3}> {item.distancia}</Text>
        </View>

        <View style={styles.content2}>
          <Text style={styles.text3}> {item.tempoPreparo} </Text>
          <Text style={styles.text3}> ⦁ </Text>
          <Text style={styles.text4}> {item.frete}</Text>
        </View>

        <View style={styles.content3}>
          {item.cupom && (
            <Text style={styles.text5}>
              <Image
                source={icon}
                style={styles.iconDiscount}
              />
              {item.cupom}
            </Text>
          )}
        </View>
      </View>
    </Pressable>
  );
};

export default CardLoja;
