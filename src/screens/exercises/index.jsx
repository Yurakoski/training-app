import React from "react";
import { View, Text, FlatList, Button, TouchableOpacity } from "react-native";
import { EXERCISES } from "../../constants/data/index";
import { useSelector, useDispatch } from "react-redux"; 
import { styles } from "./styles";
import { registerDay } from "../../store/actions/exercises.actions";

const Exercises = ()=>{
    const dispatch = useDispatch();
    const keyExtractor = (item) => item.id.toString();
    const level = useSelector((state) => state.levels.selected)
    const filteredProducts = EXERCISES.filter( (exerc) => exerc.categoryId === level.id); //Filtra los ejercicios que coinciden su id con el id de las categorías que recibe por el route.params
    
    const renderItem = ({ item }) =>   
        <View style={styles.containerItem}>
             <Text style={styles.containerItems}>{item.description}</Text>
        </View>

    const registerDB = ()=>{
        dispatch(registerDay);
    }

    return(
        <View style={styles.containerList}>
            <FlatList 
                data={filteredProducts}
                renderItem={renderItem}
                keyExtractor={keyExtractor}
            />
        <TouchableOpacity onPress={registerDB}>   
            <View style={styles.registerDayContainer}>
                <Text style={styles.registerDayText}>Registrar día de entrenamiento</Text>
            </View>
        </TouchableOpacity>
        </View>

    )
}

export default Exercises;