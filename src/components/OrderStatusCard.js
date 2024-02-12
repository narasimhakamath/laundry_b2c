import React from "react";
import { StyleSheet, View } from "react-native";
import { ORDER_ID, ORDER_PLACED_ON, VIEW_MORE } from "../constants/strings";
import { Button, Avatar, Card, Text, ProgressBar } from 'react-native-paper';
import { MaterialCommunityIcons, MaterialIcons } from '@expo/vector-icons';
import theme from "../utils/theme";
import OrderTracker from "./OrderTracker";



const OrderStatusCard = ({ statusID}) => {
	const onViewMore = () => {
		// navigate to order details page...
	};

	return(
		<Card style={styles.card}>
			<Card.Title
				title={`${ORDER_ID}: 12`}
				subtitle={`${ORDER_PLACED_ON} 11/02/2024`}
				left={(props) => <MaterialCommunityIcons name="washing-machine" size={40} color={theme.primary.dark} />}
			/>
			<Card.Content>
				<OrderTracker statusID={statusID} />
				<View style={styles.buttonContainer}>
					<Button
						mode="contained-tonal"
						textColor={theme.grey.main}
						onPress={onViewMore}
					>
						{VIEW_MORE}
					</Button>
				</View>
			</Card.Content>
		</Card>
	);
};

const styles = StyleSheet.create({
	card: {
		marginVertical: 10
	},
	buttonContainer: {
		marginTop: 20
	}
});

export default OrderStatusCard;