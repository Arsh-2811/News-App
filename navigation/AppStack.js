import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";

import Ionicons from 'react-native-vector-icons/Ionicons'
import CustomDrawer from "../compenents/CustomDrawer";

import HomeStack from "./TabNavigator";
import ProfileScreen from '../screens/Profile'
import SettingsScreen from '../screens/Settings'
import { SafeAreaView } from "react-native-safe-area-context";

const Drawer = createDrawerNavigator();

const AppStack = () => {
    return(
        <Drawer.Navigator initialRouteName="Home"
            drawerContent={props => <CustomDrawer {...props} />}
            screenOptions={{
                drawerType : "slide",
                drawerActiveBackgroundColor: '#aa18ea',
                drawerActiveTintColor: '#fff',
                drawerInactiveTintColor: '#333',
                drawerLabelStyle: {
                  marginLeft: -25,
                  fontSize: 15,
                },
              }}
        >
            <Drawer.Screen name = "Home" component={HomeStack} 
                options={{
                    drawerIcon: ({color}) => (
                      <Ionicons name="home-outline" size={22} color={color} />
                    ),
                }} 
            />
            <Drawer.Screen name = "Profile" component={ProfileScreen} 
                options={{
                    drawerIcon: ({color}) => (
                      <Ionicons name="person-outline" size={22} color={color} />
                    ),
                }}
            />
            <Drawer.Screen name = "Settings" component={SettingsScreen} 
                options={{
                    drawerIcon: ({color}) => (
                      <Ionicons name="settings-outline" size={22} color={color} />
                    ),
                }}
            />
        </Drawer.Navigator>
    );
};

export default AppStack;