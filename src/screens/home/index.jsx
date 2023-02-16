import React from "react";
import { View, Text, Button } from "react-native";

const Home = ({ navigation })=> {
    return(
        <View>
            <Text>Home</Text>
            <Button title="Iniciar" onPress={()=> navigation.navigate('Level')}/>
        </View>
    )
}
export default Home;
