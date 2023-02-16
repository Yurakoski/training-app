import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Home, Level, Exercises } from '../screens/index';

const Stack = createNativeStackNavigator();

const TrainingNavigator = () => {
    return(
        <Stack.Navigator initialRouteName='Home'>
            <Stack.Screen name="Home" component={ Home }/>
            <Stack.Screen name="Level" component={ Level }/>
            <Stack.Screen name="Exercises" component={ Exercises }/>
        </Stack.Navigator>
    );
}

export default TrainingNavigator;
