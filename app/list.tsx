import { Header } from "@/components/header";
import { View , Text} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function List(){
    return(
        <SafeAreaView>
        <View>
        <Header image={require('@/assets/images/Papa_Gaio.jpg')}/>
                <Text>Teste</Text>
        </View>
        </SafeAreaView>
    )

}