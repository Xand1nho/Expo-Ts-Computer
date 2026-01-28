import { ImageSourcePropType, View, Image, StyleSheet} from "react-native";



export const Header = ({ image }: { image: ImageSourcePropType }) => {
  return (
    <View style={s.wrap}>
      <Image style={s.img} source={image}/>
    </View>
    
);}


const s = StyleSheet.create({
wrap:{
    alignItems: "center",
    justifyContent: "center",
},
img:{
    width: '100%',
    height: 195,
    marginBottom: 10,
    border: "2px solid rgba(0, 0, 0, 1)",
    transition: 3,
}
})