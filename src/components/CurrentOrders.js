import React from "react";
import OrderStatusCard from "./OrderStatusCard";
import { StyleSheet, View } from "react-native";
import { YOUR_ONGOING_ORDERS } from "../constants/strings";
import Heading from "./Heading";

const CurrentOrders = () => {
	return(
		<View style={styles.container}>
			<Heading>{YOUR_ONGOING_ORDERS}</Heading>
			<OrderStatusCard statusID={2} />
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		paddingHorizontal: 5,
		marginTop: 5,
		paddingHorizontal: 20,
	}
});

export default CurrentOrders;