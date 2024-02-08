import React from "react";
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import MenScreen from "../screens/MenScreen";
import WomenScreen from "../screens/WomenScreen";

const Tab = createMaterialTopTabNavigator();

const ClothesTab = ({ route }) => {
	const serviceID = route?.params?.serviceID;


	return(
		<Tab.Navigator>
			<Tab.Screen
				name="Men"
				component={MenScreen}
			/>
			<Tab.Screen
				name="Women"
				component={WomenScreen}
			/>
		</Tab.Navigator>
	);
};

export default ClothesTab;