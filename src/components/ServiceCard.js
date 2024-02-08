import React from "react";
import { Image, Text, View, TouchableOpacity, StyleSheet } from "react-native";
import { useNavigation } from '@react-navigation/native';

const ServiceCard = ({ data }) => {
	const navigation = useNavigation();

	const onPress = () => {
		navigation.navigate('ClothesTab', {serviceID: data?.id});
	};

	return(
		<TouchableOpacity style={styles.container} onPress={onPress}>
			<View style={styles.imageContainer}>
				<Image
					source={data.image}
					style={styles.image}
				/>
			</View>
			<Text style={styles.text}>{data.name}</Text>
		</TouchableOpacity>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1/3,
		// paddingVertical: 40,
		// marginHorizontal: 5,
		// paddingHorizontal: 5,
		// marginVertical: 5,
		alignItems: 'center',
		borderRadius: 10,
		backgroundColor: 'white',
		aspectRatio: 1,
		margin: 5,
		justifyContent: 'center'
		// paddingHorizontal: 10,
		// marginHorizontal: 5,
		// paddingVertical: 20,
		// marginVertical: 5,

	},
	imageContainer: {
		width: 80,
		aspectRatio: 1,
		alignSelf: 'center',
	},
	image: {
		width: '100%',
		height: '100%'
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