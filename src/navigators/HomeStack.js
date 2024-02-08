import React from "react";
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from "../screens/HomeScreen";
import ClothesScreen from "../screens/ClothesScreen";
import ClothesTab from "./ClothesTab";

const Stack = createStackNavigator();

const HomeStack = () => {
	return(
		<Stack.Navigator>
			<Stack.Screen
				name="HomeScreen"
				component={HomeScreen}
			/>
			<Stack.Screen
				name="ClothesTab"
				component={ClothesTab}
			/>
		</Stack.Navigator>
	);
};

export default HomeStack;