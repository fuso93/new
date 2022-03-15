import React from 'react';
import {NavigationContainer} from "@react-navigation/native";
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import HomeStack from "./navigations/HomeStack";
import ChatStack from "./navigations/ChatStack";
const Tab = createBottomTabNavigator();

const App = () => {
    return (
        <NavigationContainer>
            <Tab.Navigator>
                <Tab.Screen
                    name='Home'
                    component={HomeStack}
                    options={{headerShown:false}}
                />
                <Tab.Screen
                    name='Chat'
                    component={ChatStack}
                    options={{headerShown:false}}
                />
            </Tab.Navigator>
        </NavigationContainer>
    );
};

export default App;