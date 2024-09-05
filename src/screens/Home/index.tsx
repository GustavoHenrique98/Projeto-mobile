import { Text, TextInput, View } from "react-native";
import { styles } from "./styles";



export function Home(){
    return(
        <View style={styles.container}>
            <Text style={styles.headerText}> O que você quer assistir hoje?</Text>

            <View>
                <TextInput style={styles.containerInput} placeholder="Buscar"></TextInput>
            </View>
        
        </View>

    )
}

