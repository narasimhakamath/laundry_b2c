import React from "react";
import { createStackNavigator } from '@react-navigation/stack';

import theme from "../utils/theme";
import IntroductionScreen from "../screens/IntroductionScreen";
import LoginScreen from "../screens/LoginScreen";
import LoginVerificationScreen from "../screens/LoginVeritifcationScreen";
import ProfileScreen from "../screens/ProfileScreen";

const Stack = createStackNavigator();

const AuthenticationStack = () => {
	return(
		<Stack.Navigator screenOptions={{
			headerStyle: {
				backgroundColor: theme.colors.common.white,
			},
			headerTintColor: theme.colors.common.dark
		}}>
			{/* <Stack.Screen
				name="IntroductionScreen"
				component={IntroductionScreen}
				options={{
					headerShown: false,
				}}
			/>
			<Stack.Screen
				name="LoginScreen"
				component={LoginScreen}
				options={{
					headerShown: false,
				}}
			/>
			<Stack.Screen
				name="LoginVerificationScreen"
				component={LoginVerificationScreen}
				options={{
					headerShown: false,
				}}
			/> */}
			<Stack.Screen
				name="ProfileScreen"
				component={ProfileScreen}
				options={{
					headerShown: false,
				}}
			/>
		</Stack.Navigator>
	);
};

export default AuthenticationStack;