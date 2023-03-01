import React from "react";
import { View, Text, Button } from "react-native";
import { styles } from "./styles";
import { useState } from "react";
import { ImageSelector } from "../../components/index";

const Home = ({ navigation })=> {

    const [image, setImage] = useState(null);

    const onImage = (uri) => { 
        setImage(uri);
    }

    return(
        <View style={styles.container}>
            <Text style={styles.title}>¡Bienvenido a training app!</Text>
            <Button title="Iniciar" onPress={()=> navigation.navigate('Level')}/>
            <ImageSelector 
                onImage={onImage}
            />
        </View>
    )
}
export default Home;
