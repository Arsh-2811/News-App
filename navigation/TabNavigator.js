import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import HomeScreen from "../screens/Home2";
import Breaking from '../screens/Breaking'

import Ionicons from 'react-native-vector-icons/Ionicons';
import Feather from 'react-native-vector-icons/Feather';

const Tab = createBottomTabNavigator();

const HomeStack = () => {
    return(
        <Tab.Navigator screenOptions={{
            headerShown : false,
            tabBarShowLabel : false,
            tabBarStyle : {backgroundColor : '#AD40AF'},
            tabBarInactiveTintColor : '#fff',
            tabBarActiveTintColor : 'yellow'
        }}>
            <Tab.Screen name = "Home2" component={HomeScreen} options={{
                tabBarIcon : ({color, size}) => (
                    <Ionicons name="home-outline" color={color} size={size} />
                )
            }}/>
            <Tab.Screen name = "Breaking" component={Breaking} options={{
                tabBarBadge : "New",
                tabBarBadgeStyle : {backgroundColor : 'yellow'},
                tabBarIcon : ({color, size}) => (
                    <Ionicons name="mail-outline" color={color} size={size} />
                )
            }}/>
        </Tab.Navigator>
    )
}

export default HomeStack;