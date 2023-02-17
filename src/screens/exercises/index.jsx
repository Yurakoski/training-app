import React from "react";
import { View, Text, FlatList, TouchableOpacity } from "react-native";
import { EXERCISES } from "../../constants/data/index";

const Exercises = ({navigation, route})=>{

    const {categoryId} = route.params; //obtiene la categoryId que se le pasa desde Levels
    const keyExtractor = (item) => item.id.toString();
    const filteredProducts = EXERCISES.filter( (exerc) => exerc.categoryId === categoryId); //Filtra los ejercicios que coinciden su id con el id de las categorías que recibe por el route.params
    const renderItem = ({ item }) =>   
        <View>
             <Text>{item.description}</Text>
        </View>

    return(
        <View>
            <FlatList 
                data={filteredProducts}
                renderItem={renderItem}
                keyExtractor={keyExtractor}
            />
        </View>
    )
}

export default Exercises;