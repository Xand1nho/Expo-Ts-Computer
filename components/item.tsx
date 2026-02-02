import { Image } from "expo-image";
import { StyleSheet, Text, View } from "react-native";


export const Item = ({
  name,
  mark,
  model,
  description,
  image,
}: {
  name: string;
  mark: string;
  model: string;
  description: string;
  image: string;
}) => {
  return (
    <View style={s.itemList}>
      <Image style={s.imageStyle} source={image} />
      <Text style={s.txt}> {name}</Text>
      <Text style={s.txt1}> {mark}</Text>
      <Text style={s.txt2}> {model}</Text>
      <Text style={s.txt3}> {description}</Text>
    </View>
  );
};

const s = StyleSheet.create({
  itemList: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 20,
    backgroundColor: "#000000d4",
    margin: 10,
    height: 80,
    paddingHorizontal: 10,
    borderRadius: 5,
    shadowColor: "#000",
    shadowOffset: {
    width: 0,
    height: 7,
    },
    shadowOpacity: 0.43,
    shadowRadius: 9.51,
    elevation: 15,
    
  },
  imageStyle: {
    borderWidth: 2,
    borderRadius: 40,
    width: 70,
    height: 70,
  },
  txt: {
    display: "flex",
    textAlign: "center",
    flexDirection: "row",
    color: '#006eff',
    fontSize: 14,
    fontWeight: 'bold',
    textShadowColor: 'rgba()',
    textDecorationLine: 'underline',
  },
  txt1: {
    display: "flex",
    textAlign: "center",
    flexDirection: "row",
    color: '#ff0000',
    fontSize: 14,
    fontWeight: 'bold',
    textDecorationLine: 'underline',
  
  },
  txt2: {
    display: "flex",
    textAlign: "center",
    flexDirection: "row",
    color: '#ffffff',
    fontSize: 14,
    fontWeight: 'bold',
    textDecorationLine: 'underline',
  
  },
  txt3: {
    padding: 20,
    display: "flex",
    textAlign: "center",
    flexDirection: "row",
    color: '#eeff00',
    fontSize: 14,
    fontWeight: 'bold',
    textDecorationLine: 'underline',
  
  },
});
