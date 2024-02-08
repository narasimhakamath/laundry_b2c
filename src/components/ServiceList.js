import React from "react";
import { View, FlatList, StyleSheet, Text } from "react-native";
import ServiceCard from "./ServiceCard";

const SERVICES = [
	{id: 1, name: 'Wash & Fold', image: require("../assets/laundry.png")},
	{id: 2, name: 'Wash & Iron', image: require("../assets/iron-box.png")},
	{id: 3, name: 'Dry Clean', image: require("../assets/dry-clean.png")},
	{id: 4, name: 'Steam Iron', image: require("../assets/steamiron.png")},
	{id: 5, name: 'Shoe Clean', image: require("../assets/shoe-clean.png")},
];

const ServiceList = () => {
	return(
		<View style={styles.container}>
			<Text style={styles.text}>Add items by services!</Text>
			<FlatList
				data={SERVICES}
				numColumns={3}
				showsHorizontalScrollIndicator={false}
				keyExtractor={item => item.id}
				renderItem={({ item }) => <ServiceCard data={item} />}
			/>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		paddingHorizontal: 5,
		marginTop: 15,
	},
	text: {
		fontSize: 14,
		fontWeight: '400',
		textAlign: 'center',
		marginBottom: 10,
		fontWeight: '300'
	}
});

export default ServiceList;