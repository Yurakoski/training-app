import React from "react";
import { View, Text, TouchableOpacity, FlatList } from "react-native";
//import { LEVELS } from "../../constants/data/index";  //En lugar de acceder directamente de los LEVELS, accedemos por medio del store
import { useSelector, useDispatch } from 'react-redux';
import { selectLevel } from '../../store/actions/';

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
    <View >
        <TouchableOpacity onPress={ ()=>{ onSelected(item) }}>   
            <View>
                <Text>{ item.id }</Text>
                <Text>{ item.title }</Text>
            </View>
        </TouchableOpacity>
    </View>

    const keyExtractor = ( item ) => item.id.toString();
    return(
        <View>
            <FlatList
                data={levelsReducers}
                renderItem={renderItem}    
                keyExtractor={keyExtractor}
            />
        </View>
    )
};

export default Level;