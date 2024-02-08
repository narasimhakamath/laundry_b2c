import React, { useState } from "react";
import { SafeAreaView, StyleSheet, Text, View } from "react-native";

import ServiceList from "../components/ServiceList";

const HomeScreen = () => {
	const [openSpeedDial, setOpenSpeedDial] = useState(false);


	return(
		<SafeAreaView style={styles.screen}>
			<ServiceList />
		</SafeAreaView>
	);
};

const styles = StyleSheet.create({
	screen: {
		flex: 1,
		backgroundColor: '#ECF0F1',
	}
});

export default HomeScreen;