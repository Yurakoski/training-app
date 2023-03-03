import React from "react";
import TrainingNavigator from "./training";
import TabsNavigator from "./tabs";
import { NavigationContainer } from '@react-navigation/native';

const AppNavigator = ()=>{
    return(
        <NavigationContainer>
            <TabsNavigator />
        </NavigationContainer>
    )
}

export default AppNavigator;