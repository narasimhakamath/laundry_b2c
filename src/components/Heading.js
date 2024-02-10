import React from "react";
import { StyleSheet, Text } from "react-native";

const Heading = ({ children }) => {
	return(
		<Text style={styles.title}>{children.toUpperCase()}</Text>
	);
};

const styles = StyleSheet.create({
	title: {
		fontSize: 16,
		fontWeight: '600'
	}
});

export default Heading;