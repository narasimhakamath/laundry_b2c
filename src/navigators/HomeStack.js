import React from "react";
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from "../screens/HomeScreen";
import ClothesTab from "./ClothesTab";
import theme from "../utils/theme";
import { ADD_CLOTHES, CART, HOME } from "../constants/strings";
import IntroductionScreen from "../screens/IntroductionScreen";
import CartScreen from "../screens/CartScreen";

const Stack = createStackNavigator();

const HomeStack = () => {
	return(
		<Stack.Navigator screenOptions={{
			headerStyle: {
				backgroundColor: theme.colors.common.white,
			},
			headerTintColor: theme.colors.common.dark
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
			<Stack.Screen
				name="CartScreen"
				component={CartScreen}
				options={{
					title: CART,
				}}
			/>
		</Stack.Navigator>
	);
};

export default HomeStack;