import React from "react";
import { View, Text, TouchableOpacity, FlatList } from "react-native";
//import { LEVELS } from "../../constants/data/index";  //En lugar de acceder directamente de los LEVELS, accedemos por medio del store
import { useSelector, useDispatch } from 'react-redux';
import { selectLevel } from '../../store/actions/';
import { styles } from './styles';

const Level = ({ navigation })=>{

    const levelsReducers = useSelector((state) => state.levels.levels) // accedo al levels del RootReducer, y luego al levels del levels.reducers
    const dispatch = useDispatch();

    const onSelected = ( item ) => {
        dispatch(selectLevel(item.id));

        navigation.navigate(
            'Exercises',{
                title: item.title
            })
    }
    const renderItem = ({ item }) => 
    <View style={styles.container} >
        <TouchableOpacity onPress={ ()=>{ onSelected(item) }}>   
            <View style={styles.touchableContainer}>
                <Text style={styles.touchableText}>{ item.title }</Text>
            </View>
        </TouchableOpacity>
    </View>

    const keyExtractor = ( item ) => item.id.toString();
    return(
        <View style={styles.containerList}>
            <FlatList
                data={levelsReducers}
                renderItem={renderItem}    
                keyExtractor={keyExtractor}
            />
        </View>
    )
};

export default Level;