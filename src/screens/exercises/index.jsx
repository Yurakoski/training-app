import React from "react";
import { View, Text, FlatList, TouchableOpacity } from "react-native";
import { EXERCISES } from "../../constants/data/index";
import { useSelector } from "react-redux";

const Exercises = ({navigation})=>{

    const keyExtractor = (item) => item.id.toString();
    const level = useSelector((state) => state.levels.selected)
    const filteredProducts = EXERCISES.filter( (exerc) => exerc.categoryId === level.id); //Filtra los ejercicios que coinciden su id con el id de las categorías que recibe por el route.params
    
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