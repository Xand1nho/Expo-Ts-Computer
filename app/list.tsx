import dados from "@/assets/constants/mock";
import { Header } from "@/components/header";
import { Item } from "@/components/item";
import { router } from "expo-router";
import React from "react";
import {
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function List() {
  const voltar = () => {
    router.push("/");
  };

  return (
    <>
      <View>
        <Header image={require("@/assets/images/Papa_Gaio.jpg")} />

        <View>
          <TouchableOpacity onPress={voltar}>
            <Text style={s.backBtn}>◀️</Text>
          </TouchableOpacity>
        </View>
      </View>

      <SafeAreaView style={s.wrapList}>
        <FlatList
          data={dados}
          renderItem={({ item }) => (
            <Item
              name={item.nome}
              mark={item.marca}
              model={item.modelo}
              description={item.descricao}
              image={item.imagem}
            />
          )}
        ></FlatList>
      </SafeAreaView>
    </>
  );
}

const s = StyleSheet.create({
  wrapList: {
    flex: 1,
  },
  backBtn: {
    fontSize: 40,
    position: "absolute",
    top: -190,
  },
});
