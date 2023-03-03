import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Level } from "../screens";
import TrainingNavigator from "./training";

const Stack = createNativeStackNavigator();

const LevelNavigator = () => {
    return(
        <TrainingNavigator>
            <Stack.Navigator
                initialRouteName="Level"
                screenOptions={{}}
            >
                <Stack.Screen
                    name="Level"
                    component={Level} />
            </Stack.Navigator>
        </TrainingNavigator>
    )
}

export default LevelNavigator;