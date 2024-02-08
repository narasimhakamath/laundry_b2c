import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import React, { useState, useRef, useEffect } from 'react';
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
import { Button } from 'react-native-elements';

Notifications.setNotificationHandler({
	handleNotification: async () => ({
		shouldShowAlert: true,
		shouldPlaySound: false,
		shouldSetBadge: false,
	}),
});

const sendPushNotification = async (expoPushToken) => {
	const message = {
		to: expoPushToken,
		sound: 'default',
		title: 'Original Title',
		body: 'And here is the body!',
		data: { someData: 'goes here' },
	};

	await fetch('https://exp.host/--/api/v2/push/send', {
		method: 'POST',
		headers: {
			'Accept': 'application/json',
			'Accept-encoding': 'gzip, deflate',
			'Content-Type': 'application/json',
		},
		body: JSON.stringify(message),
	});
};

const registerForPushNotificationsAsync = async () => {
	let token;

	try {

		if (Platform.OS === 'android') {
			console.log("Android platform!!");
			Notifications.setNotificationChannelAsync('default', {
				name: 'default',
				importance: Notifications.AndroidImportance.MAX,
				vibrationPattern: [0, 250, 250, 250],
				lightColor: '#FF231F7C',
			});
		}
	
		if (Device.isDevice) {
			console.log("Device.isDevice", Device.isDevice);

			const { status: existingStatus } = await Notifications.getPermissionsAsync();
			let finalStatus = existingStatus;

			console.log('finalStatus', finalStatus);
	
			if (existingStatus !== 'granted') {
				const { status } = await Notifications.requestPermissionsAsync();
				finalStatus = status;
			}
	
			if (finalStatus !== 'granted') {
				alert('Failed to get push token for push notification!');
				return;
			}
	
			token = await Notifications.getExpoPushTokenAsync({
				projectId: Constants.expoConfig.extra.eas.projectId,
			});
			console.log('token', token);
		} else {
			alert('Must use physical device for Push Notifications');
		}
	} catch(error) {
		console.log("error?", error);
	}

	return token.data;
}


export default function App() {
	const [expoPushToken, setExpoPushToken] = useState('');
	const [notification, setNotification] = useState(false);
	const notificationListener = useRef();
	const responseListener = useRef();

	useEffect(() => {
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

	return (
		<>
			<StatusBar style='light' />
			<AppContextProvider>
				<NavigationContainer>
					<BottomTabNavigator />
				</NavigationContainer>
			</AppContextProvider>
			<Toast />
		</>
	);
}