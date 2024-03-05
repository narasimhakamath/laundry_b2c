import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import React, { useState, useRef, useEffect, useCallback } from 'react';
import { Text } from 'react-native';
import Toast from 'react-native-toast-message';
import HomeScreen from './src/screens/HomeScreen';
import { SafeAreaView } from 'react-native';
import BottomTabNavigator from './src/navigators/BottomTabNavigator';
import { NavigationContainer } from '@react-navigation/native';
import AppContextProvider from './src/contexts/AppContext';
import * as Device from 'expo-device';
import * as Notifications from 'expo-notifications';
import Constants from 'expo-constants';
import { ThemeProvider } from 'styled-components';

import * as SplashScreen from 'expo-splash-screen';

import theme from './src/utils/theme';

Notifications.setNotificationHandler({
	handleNotification: async () => ({
		shouldShowAlert: true,
		shouldPlaySound: false,
		shouldSetBadge: false,
	}),
});

const registerForPushNotificationsAsync = async () => {
	let token;

	try {
		if (Platform.OS === 'android') {
			Notifications.setNotificationChannelAsync('default', {
				name: 'default',
				importance: Notifications.AndroidImportance.MAX,
				vibrationPattern: [0, 250, 250, 250],
				lightColor: '#FF231F7C',
			});
		}
	
		if (Device.isDevice) {
			const { status: existingStatus } = await Notifications.getPermissionsAsync();
			let finalStatus = existingStatus;

			if (existingStatus !== 'granted') {
				const { status } = await Notifications.requestPermissionsAsync();
				finalStatus = status;
			}
	
			if (finalStatus !== 'granted') {
				console.error(`[Notification Error]: Access Denied`);
				return;
			}
	
			token = await Notifications.getExpoPushTokenAsync({
				projectId: Constants.expoConfig.extra.eas.projectId,
			});
		} else {
			console.error('[Notification Error]: Not a real device');
		}
	} catch(error) {
		console.error(`[Notification Error]: ${error}`);
	}

	return token.data;
}

// SplashScreen.preventAutoHideAsync();

export default function App() {
	const [isAppReady, setIsAppReady] = useState(false);
	const [expoPushToken, setExpoPushToken] = useState('');
	const [notification, setNotification] = useState(false);
	const notificationListener = useRef();
	const responseListener = useRef();

	if(isAppReady) {
		SplashScreen.hideAsync();
	}

	useEffect(() => {
		// prepareApplication();

		registerForPushNotificationsAsync().then(token => setExpoPushToken(token));
	
		notificationListener.current = Notifications.addNotificationReceivedListener(notification => {
			setNotification(notification);
		});
	
		responseListener.current = Notifications.addNotificationResponseReceivedListener(response => {
			console.log(response);
		});
	
		return () => {
			Notifications.removeNotificationSubscription(notificationListener.current);
			Notifications.removeNotificationSubscription(responseListener.current);
		};
	}, []);

	const prepareApplication = async () => {
		try {
			await new Promise(resolve => setTimeout(resolve, 5000));
		} catch(error) {
			console.error(`[App Load Error]: ${error}`);
		} finally {
			setIsAppReady(true);
		}
	};

	return (
		<>
			<StatusBar style='light' />
			<ThemeProvider theme={theme}>
				<AppContextProvider>
					<NavigationContainer>
						<BottomTabNavigator />
					</NavigationContainer>
				</AppContextProvider>
			</ThemeProvider>
			<Toast />
		</>
	);
}