import React from "react";
import { Image, Pressable, Text, View } from "react-native";
import { styles } from "./style";
import icon from '../../../../assets/icons8-discount-40.png';

const CardLoja = ({ loja, setCurrentScreen }) => {

  const goToDetalhesLoja = () => {
    setCurrentScreen("DetalhesLoja", { loja: loja });
  };

  return (
      <Pressable
          onPress={goToDetalhesLoja}
          style={styles.storeItem}
      >
        <Image
            source={{uri: loja.logo}}
            style={styles.logoLojas}
        />
        <View style={styles.content}>
          <View style={styles.content2}>
            <Text style={styles.storeText}>{loja.name}</Text>

                <Image
                    source={ loja.lojaSuper}
                    style={styles.super}
                />
          </View>

          <View style={styles.content2}>
            <Text style={styles.text2}>★ {loja.star} </Text>
            <Text style={styles.text3}> ⦁ </Text>
            <Text style={styles.text3}> {loja.category} </Text>
            <Text style={styles.text3}> ⦁ </Text>
            <Text style={styles.text3}> {loja.distancia}</Text>
          </View>

          <View style={styles.content2}>
            <Text style={styles.text3}> {loja.tempoPreparo} </Text>
            <Text style={styles.text3}> ⦁ </Text>
            <Text style={styles.text4}> {loja.frete}</Text>
          </View>

          <View style={styles.content3}>
            {loja.cupom && (
                <Text style={styles.text5}>
                  <Image
                      source={icon}
                      style={styles.iconDiscount}
                  />
                  {loja.cupom}
                </Text>
            )}
          </View>
        </View>
      </Pressable>
  );
};

export default CardLoja;