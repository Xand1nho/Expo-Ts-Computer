 /*{ Header }: Importa um componente (ou função/variável) específico chamado "Header". As chaves {} indicam que se trata de uma exportação nomeada (named export), o que significa que o arquivo original deve ter export const Header... ou export { Header }. */
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
    const visit2 = () => {
    router.push("/list2");
  };

  return (
    <SafeAreaView style={s.wrap}>

      {/* Esse é o banner da página principal*/}
      <Header image={require("@/assets/images/Banner.webp")} />
      <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
        <View style={s.body}>

          {/* Título e subitutlo*/}
          <Text style={s.title}>Tech Now Lógia</Text>
          <Text style={s.paragraph}>Bem Vindo!(a)</Text>
        </View>
        <View>

          {/* Imagem do perfil*/}
          <Image
            style={s.ImageBackground}
            source={require("../assets/images/👍.png")}
          />
        </View>
        <View style={s.body2}>

          {/* 1º botão */}
          <TouchableOpacity style={s.btn} onPress={visit}>
            <Text style={s.btnText}>Entrar</Text>
          </TouchableOpacity>


          {/*Aqui é o 2 botão da página principal*/}   
          <TouchableOpacity style={s.btn2} onPress={visit2}>
            <Text style={s.btnText2}>Entrar no segundo</Text>
          </TouchableOpacity>

        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
// Dentro do const stylesheet fazemos o css
{/* Criamos a variável 'const' depois falamos que o s será igual ao StyleSheet, com o stylesheet importado, criamos e usamos ele*/}
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
    borderRadius: 9,
    marginTop: 20,
    marginLeft: 50,
    marginRight: 50,
    fontFamily: 'Cinzel',
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
    backgroundColor: "#2F6364",
    width: 200,
    height: 70,
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 3,
    borderColor: "#090909",
    borderRadius: 999,
    marginTop: 20,
  },
  btn2: {
    shadowColor: "#000000ff",
    shadowOffset: {
      width: 2,
      height: 2,
    },
    shadowOpacity: 0.95,
    shadowRadius: 3.84,
    elevation: 5,
    backgroundColor: "#DFFF00",
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
  btnText2:{
    display: "flex",
    textAlign: "center",
    fontSize: 25,
    overflow: 'hidden',
    fontFamily: "Times New Roman",
  }
});
