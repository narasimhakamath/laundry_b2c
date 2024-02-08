import React from "react";
import { StyleSheet, View } from "react-native";
import ClothListContainer from "../components/ClothListContainer";
import { Text } from "react-native";

const MenScreen = () => {
	return (
		<View style={styles.screen}>
			<ClothListContainer />
		</View>
	);
};

const styles = StyleSheet.create({
	screen: {
		marginTop: 10,
		flex: 1,
	},
});

export default MenScreen;