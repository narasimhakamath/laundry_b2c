import React from "react";
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import MenScreen from "../screens/MenScreen";
import WomenScreen from "../screens/WomenScreen";
import { MEN, WOMEN } from "../constants/strings";
import ClothSelectionScreen from "../screens/ClothSelectionScreen";

const Tab = createMaterialTopTabNavigator();

const ClothesTab = ({ route }) => {
	const serviceID = route?.params?.serviceID;


	return(
		<Tab.Navigator>
			<Tab.Screen
				name="Men"
				component={ClothSelectionScreen}
				options={{
					title: MEN,
				}}
			/>
			<Tab.Screen
				name="Women"
				component={ClothSelectionScreen}
				options={{
					title: WOMEN,
				}}
			/>
		</Tab.Navigator>
	);
};

export default ClothesTab;