import React from "react";
import { Image, View, TouchableOpacity, StyleSheet } from "react-native";
import { useNavigation } from '@react-navigation/native';
import { Surface, Text } from 'react-native-paper';

import Subtitle from "./Subtitle";
import theme from "../utils/theme";

const ServiceCard = ({ data }) => {
	const navigation = useNavigation();

	const onPress = () => {
		navigation.navigate('ClothesTab', {serviceID: data?.id});
	};

	return(
		<Surface elevation={3} style={styles.surface}>
			<TouchableOpacity style={styles.container} onPress={onPress}>
				<View style={styles.imageContainer}>
					<Image
						source={data.image}
						style={styles.image}
					/>
				</View>
				<View style={styles.titleContainer}>
					<Subtitle>{data.name}</Subtitle>
				</View>
			</TouchableOpacity>
		</Surface>
	);
};

const styles = StyleSheet.create({
	surface: {
		margin: 10,
		borderRadius: 20,
		padding: 5,
	},
	container: {
		alignItems: 'center',
		justifyContent: 'center',
		paddingHorizontal: 5,
	},
	imageContainer: {
		width: 100,
		aspectRatio: 1,
		alignSelf: 'center',
		// backgroundColor: theme?.grey.ultralight,
		borderRadius: 100,
		justifyContent: 'center',
		alignItems: 'center'
	},
	image: {
		width: '80%',
		height: '80%',
		// width: 80,
		// height: 80,
	},
	titleContainer: {

	},
	text: {
		fontSize: 12,
		width: 80,
		fontWeight: '300',
		textAlign: 'center',
		marginTop: 10,
	}
});

export default ServiceCard;