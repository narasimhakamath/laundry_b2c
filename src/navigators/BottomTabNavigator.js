import React, { useContext } from "react";
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { AntDesign } from '@expo/vector-icons';

import HomeScreen from "../screens/HomeScreen";
import HomeStack from "./HomeStack";
import { AppContext } from "../contexts/AppContext";

import theme from "../utils/theme";
import { CART, HOME, PROFILE } from "../constants/strings";
import { Text } from "react-native-paper";

const Tab = createMaterialBottomTabNavigator();

const BottomTabNavigator = () => {
	const { totalQuantity } = useContext(AppContext);

	return(
		<Tab.Navigator
			initialRouteName="Home"
			activeColor="#FFFFFF"
			inactiveColor="#95a5a6"
			// labeled={false}
			shifting={true}
			backBehavior="history"
			barStyle={{
				backgroundColor: theme.colors.primary.dark,
			}}
		>
			<Tab.Screen
				name="Home"
				component={HomeStack}
				options={{
					title: HOME,
					tabBarIcon: ({ focused }) => <AntDesign name="home" size={24} color={focused ? theme.colors.common.dark : theme.colors.common.light} />,
					headerRight: () => <Text>Hello world</Text>
				}}
			/>
			<Tab.Screen
				name="Cart"
				component={HomeScreen}
				options={{
					title: CART,
					tabBarBadge: totalQuantity || null,
					tabBarIcon: ({ focused }) => <AntDesign name="shoppingcart" size={24} color={focused ? theme.colors.common.dark : theme.colors.common.light} />
				}}
			/>
			<Tab.Screen
				name="Profile"
				component={HomeScreen}
				options={{
					title: PROFILE,
					tabBarIcon:({ size, focused }) => <AntDesign name="user" size={24} color={focused ? theme.colors.common.dark : theme.colors.common.light} />
				}}
			/>
		</Tab.Navigator>
	);
};

export default BottomTabNavigator;