import React from "react";
import { View, FlatList, StyleSheet } from "react-native";
import ClothType from "./ClothType";

const list = [
	{id: 1, title: 'Shirt'},
	{id: 2, title: 'T-Shirt'},
	{id: 3, title: 'Pants'},
	{id: 4, title: 'Jeans'},
	{id: 5, title: 'Denim Jacket'},
	{id: 6, title: 'Hoodie'},
];

const ClothListContainer = () => {
	return(
		<View style={styles.container}>
			<FlatList
				data={list}
				keyExtractor={item => item?.id}
				renderItem={({ item }) => <ClothType data={item} />}
			/>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		marginTop: 10,
	},
});

export default ClothListContainer;