import { Header } from "@/components/header";
import { router } from "expo-router";
import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function HomePage() {
  const visit = () => {
    router.push("/list");
  };

  return (
    <SafeAreaView style={s.wrap}>
      <Header image={require('@/assets/images/Banner.webp')}/>
      <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
        <View style={s.body}>
          <Text style={s.title}>Tech Now Lógia</Text>
          <Text style={s.paragraph}>Bem Vindo!(a)</Text>
        </View>
        <View>
          <Image
            style={s.ImageBackground}
            source={require("../assets/images/Xandao.webp")}
          />
        </View>
        <View style={s.body2}>
          <TouchableOpacity style={s.btn} onPress={visit}>
            <Text style={s.btnText}>Entrar</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
// Dentro do const stylesheet fazemos o css
const s = StyleSheet.create({
  wrap: {
    flex: 1,
  },
  body: {
    backgroundColor: "#090909",
  },
  body2: {
    alignItems: "center",
  },

  ImageBackground: {
    width: 350,
    height: 350,
    alignSelf: "center",
    paddingTop: 70,
    borderRadius: 999,
    marginTop: 20,
  },
  title: {
    color: "#ffffff",
    textAlign: "center",
    fontSize: 30,
    padding: 20,
    paddingBottom: 20,
    border: "1px solid #ffffff",
    borderRadius: 9,
    marginTop: 20,
    marginLeft: 50,
    marginRight: 50,
    fontFamily: "",
  },
  paragraph: {
    color: "gray",
    paddingHorizontal: 30,
    textAlign: "center",
    fontSize: 25,
    paddingBottom: 15,
  },
  btn: {
    shadowColor: "#000000ff",
    shadowOffset: {
      width: 2,
      height: 2,
      
    },
    shadowOpacity: 0.95,
    shadowRadius: 3.84,
    elevation: 5,
    backgroundColor: "#00ff22ff",
    width: 200,
    height: 70,
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 3,
    borderColor: "#090909",
    borderRadius: 999,
    marginTop: 20,
  },
  btnText: {
    color: "ffffff",
    fontSize: 32,
    fontFamily: "Times New Roman",
  },
});
