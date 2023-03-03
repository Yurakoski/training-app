import { BottomTabBarHeightContext, createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeNavigator from "./home";
import LevelNavigator from "./levels";
import Ionicons from "@expo/vector-icons/Ionicons";
import { AntDesign } from '@expo/vector-icons'; 

const BottomTab = createBottomTabNavigator();

const Tabs = ()=>{
    return(
        <BottomTab.Navigator
            initialRouteName="HomeTab"
            screenOptions={{
                headerShown: false,
                tabBarLabelStyle: {
                    fontSize: 14,
                },
            }}
            >
            <BottomTab.Screen
                name="HomeTab"
                component={HomeNavigator}
                options={{
                    title: "Home",
                    tabBarIcon: ({ focused }) => (
                        <Ionicons 
                            name={focused ? 'home' : 'home-outline'}
                            size= {26}
                            />
                    )
                }}
            />
            <BottomTab.Screen
                name="LevelTab"
                component={LevelNavigator}
                options={{
                    title: "Levels",
                    tabBarIcon: ({ focused }) => (
                        <AntDesign 
                            name={focused ? 'star' : 'staro'}
                            size= {26}
                            />
                    )
                }}
            />
        </BottomTab.Navigator>

    )
}

export default Tabs;