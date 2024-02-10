import React from "react";
import { StyleSheet, View } from "react-native";
import ClothListContainer from "../components/ClothListContainer";

const ClothSelectionScreen = ({ route }) => {
	const categoryID = route.params.categoryID;

	return (
		<View style={styles.screen}>
			<ClothListContainer categoryID={categoryID} />
		</View>
	);
};

const styles = StyleSheet.create({
	screen: {
		marginTop: 10,
		flex: 1,
	},
});

export default ClothSelectionScreen;