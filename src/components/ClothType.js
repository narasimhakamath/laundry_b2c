import React, { useContext} from "react";
import { Image, Text, View, TouchableOpacity, StyleSheet } from "react-native";
import Toast from 'react-native-toast-message';
import QuantityInput from "./QuantityInput";
import { Ionicons, AntDesign } from '@expo/vector-icons';
import { AppContext } from "../contexts/AppContext";


const ClothType = ({ data }) => {

	const { onAddQuantity, onReduceQuantity } = useContext(AppContext);

	const showToast = () => {
		Toast.show({
			type: 'success',
			text1: 'Hello',
			text2: 'This is some something 👋',
		});
	};

	const onAdd = () => {
		showToast();
	};

	return(
		<View style={styles.container}>
			<View style={styles.details}>
				<View style={styles.icon}>
					<Ionicons name="shirt-outline" size={24} color="black" />
				</View>
				<View style={styles.titleContainer}>
					<Text style={styles.title}>{data.title}</Text>
				</View>
			</View>
			<View style={styles.quantityContainer}>
				<QuantityInput onAdd={onAddQuantity} onReduce={onReduceQuantity} />
			</View>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		flexDirection: 'row',
		marginHorizontal: 10,
		marginVertical: 5,
		paddingVertical: 15,
		paddingHorizontal: 10,
		borderWidth: 0.5,
		borderColor: 'gray',
		borderRadius: 5,
	},
	details: {
		flex: 1,
		alignSelf: 'center',
		flexDirection: 'row'
	},
	titleContainer: {
		alignSelf: 'center',
		paddingHorizontal: 10,
		flexDirection: 'row'
	},
	title: {
		fontSize: 16,
		fontWeight: '400',
	},
	icon: {
		borderWidth: 0.5,
		padding: 15,
		borderRadius: 5,
	},
	quantityContainer: {
		alignSelf: 'center',
		marginHorizontal: 15,
	}
});

export default ClothType;