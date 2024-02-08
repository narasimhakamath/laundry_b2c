import React from "react";
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from "../screens/HomeScreen";
import ClothesScreen from "../screens/ClothesScreen";
import ClothesTab from "./ClothesTab";
import theme from "../utils/theme";
import { HOME } from "../constants/strings";

const Stack = createStackNavigator();

const HomeStack = () => {
	return(
		<Stack.Navigator screenOptions={{
			headerStyle: {
				backgroundColor: theme.primary.dark,
			},
			headerTintColor: theme.common.light
		}}>
			<Stack.Screen
				name="HomeScreen"
				component={HomeScreen}
				options={{
					title: HOME
				}}
			/>
			<Stack.Screen
				name="ClothesTab"
				component={ClothesTab}
				options={{
					title: HOME
				}}
				
			/>
		</Stack.Navigator>
	);
};

export default HomeStack;