import React from "react";
import { View, Text, TouchableOpacity, FlatList } from "react-native";
import { LEVELS } from "../../constants/data/index";

const Level = ({ navigation })=>{

      const onSelected = ( item ) => {
        navigation.navigate(
            'Exercises',{
                categoryId: item.id,
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
                data={LEVELS}
                renderItem={renderItem}    
                keyExtractor={keyExtractor}
            />
        </View>
    )
};

export default Level;