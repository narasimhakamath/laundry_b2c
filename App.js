import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import React, { useState, useRef, useEffect } from 'react';
import { Platform } from "react-native";
import Toast from 'react-native-toast-message';
import BottomTabNavigator from './src/navigators/BottomTabNavigator';
import { NavigationContainer } from '@react-navigation/native';
import AppContextProvider from './src/contexts/AppContext';
import * as Device from 'expo-device';
import * as Notifications from 'expo-notifications';
import Constants from 'expo-constants';
import { ThemeProvider } from 'styled-components';
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';

import theme from './src/utils/theme';
import AuthenticationStack from './src/navigators/AuthenticationStack';

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

SplashScreen.preventAutoHideAsync();

export default function App() {
	// const [isAppReady, setIsAppReady] = useState(false);
	const [fontsLoaded] = useFonts({
		'Dealerplate': require('./src/assets/fonts/Dealerplate.otf'),
		'Instruction': require('./src/assets/fonts/Instruction.otf'),
		'InstructionBold': require('./src/assets/fonts/InstructionBold.otf'),
		'Huli': require('./src/assets/fonts/Huli.ttf'),
		'LTSaeada': require('./src/assets/fonts/LTSaeada.otf'),
		'LTSaeadaBold': require('./src/assets/fonts/LTSaeadaBold.otf'),
		'LTSaeadaExtraBold': require('./src/assets/fonts/LTSaeadaExtraBold.otf'),
		'LTSaeadaExtraLight': require('./src/assets/fonts/LTSaeadaExtraLight.otf'),
		'LTSaeadaHairline': require('./src/assets/fonts/LTSaeadaHairline.otf'),
		'LTSaeadaLight': require('./src/assets/fonts/LTSaeadaLight.otf'),
		'LTSaeadaMedium': require('./src/assets/fonts/LTSaeadaMedium.otf'),
		'LTSaeadaRegular': require('./src/assets/fonts/LTSaeadaRegular.otf'),
		'LTSaeadaSemiBold': require('./src/assets/fonts/LTSaeadaSemiBold.otf'),
		'LTSaeadaThin': require('./src/assets/fonts/LTSaeadaThin.otf'),
	});

	const isAppReady = () => {
		if(fontsLoaded)
			return true;
	};

	const [expoPushToken, setExpoPushToken] = useState('');
	const [notification, setNotification] = useState(false);
	const notificationListener = useRef();
	const responseListener = useRef();

	if(isAppReady()) {
		SplashScreen.hideAsync();
	}

	useEffect(() => {
		prepareApplication();

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
			await new Promise(resolve => setTimeout(resolve, 1000));
		} catch(error) {
			console.error(`[App Load Error]: ${error}`);
		}
	};

	return (
		<>
			<StatusBar style='auto' />
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