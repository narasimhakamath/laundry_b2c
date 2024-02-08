import React, { useContext } from "react";
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { AntDesign } from '@expo/vector-icons';

import HomeScreen from "../screens/HomeScreen";
import HomeStack from "./HomeStack";
import { AppContext } from "../contexts/AppContext";

const Tab = createMaterialBottomTabNavigator();

const BottomTabNavigator = () => {
	const { totalQuantity } = useContext(AppContext);

	return(
		<Tab.Navigator
			initialRouteName="Home"
			activeColor="#FFFFFF"
			inactiveColor="#95a5a6"
			labeled={false}
			shifting={true}
			backBehavior="history"
			barStyle={{
				backgroundColor: '#000000',
			}}
		>
			<Tab.Screen
				name="Home"
				component={HomeStack}
				options={{
					tabBarIcon: ({ focused }) => <AntDesign name="home" size={24} color={focused ? '#000000' : '#FFFFFF'} />
				}}
			/>
			<Tab.Screen
				name="Cart"
				component={HomeScreen}
				options={{
					tabBarBadge: totalQuantity || null,
					tabBarIcon: ({ focused }) => <AntDesign name="shoppingcart" size={24} color={focused ? '#000000' : '#FFFFFF'} />
				}}
			/>
			<Tab.Screen
				name="Profile"
				component={HomeScreen}
				options={{
					tabBarIcon:({ size, focused }) => <AntDesign name="user" size={24} color={focused ? '#000000' : '#FFFFFF'} />
				}}
			/>
		</Tab.Navigator>
	);
};

export default BottomTabNavigator;