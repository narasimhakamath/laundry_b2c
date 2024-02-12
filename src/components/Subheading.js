import React from "react";
import { StyleSheet, Text } from "react-native";

const Subheading = ({ children }) => {
	return(
		<Text style={styles.title}>{children.toUpperCase()}</Text>
	);
};

const styles = StyleSheet.create({
	title: {
		fontSize: 14,
		fontWeight: '500'
	}
});

export default Subheading;