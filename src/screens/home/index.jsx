import React from "react";
import { View, Text, Button } from "react-native";
import { styles } from "./styles";

const Home = ({ navigation })=> {
    return(
        <View style={styles.container}>
            <Text style={styles.title}>¡Bienvenido a training app!</Text>
            <Button title="Iniciar" onPress={()=> navigation.navigate('Level')}/>
        </View>
    )
}
export default Home;
