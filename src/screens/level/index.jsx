import React from "react";
import { View, Text, Button } from "react-native";

const Level = ({ navigation })=>{
    return(
        <View>
            <Text>Pantalla Level</Text>
            <Button title="Principiantes" onPress={()=> navigation.navigate('Exercises')}/>
        </View>
    )
}

export default Level;