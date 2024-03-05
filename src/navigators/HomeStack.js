import React from "react";
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from "../screens/HomeScreen";
import ClothesTab from "./ClothesTab";
import theme from "../utils/theme";
import { ADD_CLOTHES, HOME } from "../constants/strings";

const Stack = createStackNavigator();

const HomeStack = () => {
	return(
		<Stack.Navigator screenOptions={{
			headerStyle: {
				backgroundColor: theme.colors.primary.dark,
			},
			headerTintColor: theme.colors.common.light
		}}>
			<Stack.Screen
				name="HomeScreen"
				component={HomeScreen}
				options={{
					title: HOME,
				}}
			/>
			<Stack.Screen
				name="ClothesTab"
				component={ClothesTab}
				options={{
					title: ADD_CLOTHES,
				}}
				
			/>
		</Stack.Navigator>
	);
};

export default HomeStack;