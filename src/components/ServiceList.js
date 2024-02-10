import React from "react";
import { View, FlatList, StyleSheet, Text } from "react-native";
import ServiceCard from "./ServiceCard";
import { ADD_ITEMS_BY_SERVICE, ALL_CATEGORIES, DRY_CLEAN, SHOE_CLEAN, STEAM_IRON, WASH_AND_FOLD, WASH_AND_IRON } from "../constants/strings";
import Heading from "./Heading";

const SERVICES = [
	{id: 1, name: WASH_AND_FOLD, image: require("../assets/laundry.png")},
	{id: 2, name: WASH_AND_IRON, image: require("../assets/iron-box.png")},
	{id: 3, name: DRY_CLEAN, image: require("../assets/dry-clean.png")},
	{id: 4, name: STEAM_IRON, image: require("../assets/steamiron.png")},
	{id: 5, name: SHOE_CLEAN, image: require("../assets/shoe-clean.png")},
];

const ServiceList = () => {
	return(
		<View style={styles.container}>
			<View style={styles.headingContainer}>
				<Heading>{ALL_CATEGORIES}</Heading>
			</View>
			<FlatList
				data={SERVICES}
				// numColumns={3}
				horizontal={true}
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
		paddingHorizontal: 20,
	},
	headingContainer: {
		marginVertical: 10,
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