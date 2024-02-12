import React, { useState } from "react";
import { SafeAreaView, ScrollView, StyleSheet, Text, View } from "react-native";

import ServiceList from "../components/ServiceList";
import OrderStatusCard from "../components/OrderStatusCard";
import CurrentOrders from "../components/CurrentOrders";

const HomeScreen = () => {
	const [openSpeedDial, setOpenSpeedDial] = useState(false);


	return(
		<ScrollView showsVerticalScrollIndicator={false}>
			<SafeAreaView style={styles.screen}>
				<ServiceList />

				<CurrentOrders />
			</SafeAreaView>
		</ScrollView>
	);
};

const styles = StyleSheet.create({
	screen: {
		flex: 1,
		backgroundColor: '#ECF0F1',
	}
});

export default HomeScreen;