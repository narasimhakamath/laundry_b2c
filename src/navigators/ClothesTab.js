import React from "react";
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import MenScreen from "../screens/MenScreen";
import WomenScreen from "../screens/WomenScreen";
import { HOUSEHOLD, MEN, WOMEN } from "../constants/strings";
import ClothSelectionScreen from "../screens/ClothSelectionScreen";

const Tab = createMaterialTopTabNavigator();

const ClothesTab = () => {
	return(
		<Tab.Navigator>
			<Tab.Screen
				name="MenClothesTab"
				component={ClothSelectionScreen}
				initialParams={{categoryID: 1}}
				options={{
					title: MEN,
				}}
			/>
			<Tab.Screen
				name="WomenClothesTab"
				component={ClothSelectionScreen}
				initialParams={{categoryID: 2}}
				options={{
					title: WOMEN,
				}}
			/>
			<Tab.Screen
				name="HouseholdClothesTab"
				component={ClothSelectionScreen}
				initialParams={{categoryID: 3}}
				options={{
					title: HOUSEHOLD,
				}}
			/>
		</Tab.Navigator>
	);
};

export default ClothesTab;