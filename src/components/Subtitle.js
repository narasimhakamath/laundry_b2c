import React from "react";
import { StyleSheet, Text } from "react-native";

const Subtitle = ({ children }) => {
	return(
		<Text style={styles.subtitle}>{children.toUpperCase()}</Text>
	);
};

const styles = StyleSheet.create({
	subtitle: {
		fontSize: 12,
		fontWeight: '400',
	}
});

export default Subtitle;