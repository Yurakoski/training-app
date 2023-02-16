import React from "react";
import TrainingNavigator from "./training";
import { NavigationContainer } from '@react-navigation/native';

const AppNavigator = ()=>{
    return(
        <NavigationContainer>
            <TrainingNavigator/>
        </NavigationContainer>
    )
}

export default AppNavigator;