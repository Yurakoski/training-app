import React from "react";
import { View, Text, FlatList, TouchableOpacity } from "react-native";
import { EXERCISES } from "../../constants/data/index";

const Exercises = ({navigation, route})=>{

    const {categoryId} = route.params;
    const keyExtractor = (item) => item.id.toString();
    const filteredProducts = EXERCISES.filter( (exerc) => exerc.categoryId === categoryId) ;
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