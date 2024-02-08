import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import Toast from 'react-native-toast-message';
import HomeScreen from './src/screens/HomeScreen';
import { SafeAreaView } from 'react-native';
import BottomTabNavigator from './src/navigators/BottomTabNavigator';
import { NavigationContainer } from '@react-navigation/native';
import AppContextProvider from './src/contexts/AppContext';

export default function App() {
	return (
		<>
			<AppContextProvider>
				<NavigationContainer>
					<BottomTabNavigator />
				</NavigationContainer>
			</AppContextProvider>
			<Toast />
		</>
	);
}