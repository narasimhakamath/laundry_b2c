import React from "react";
import { View } from "react-native";
import { ORDER_ID, ORDER_PLACED_ON, VIEW_MORE } from "../constants/strings";
import { Button, Card } from 'react-native-paper';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import theme from "../utils/theme";
import OrderTracker from "./OrderTracker";
import styled from "styled-components";



const OrderStatusCard = ({ statusID}) => {
	const onViewMore = () => {
		// navigate to order details page...
	};

	return(
		<CardContainer>
			<Card.Title
				title={`${ORDER_ID}: 12`}
				subtitle={`${ORDER_PLACED_ON} 11/02/2024`}
				left={(props) => <MaterialCommunityIcons name="washing-machine" size={40} color={theme.colors.primary.dark} />}
			/>
			<Card.Content>
				<OrderTrackerBox>
					<OrderTracker statusID={statusID} />
				</OrderTrackerBox>
				<ButtonBox>
					<Button
						mode="contained-tonal"
						textColor={theme.colors.grey.main}
						onPress={onViewMore}
					>
						{VIEW_MORE}
					</Button>
				</ButtonBox>
			</Card.Content>
		</CardContainer>
	);
};

const CardContainer = styled(Card)`
	margin-top: ${({ theme }) => theme.shape.spacing(4)}px;
	margin-bottom: ${({ theme }) => theme.shape.spacing(4)}px;
`;

const ButtonBox = styled(View)`
	margin-top: ${({ theme }) => theme.shape.spacing(4)}px;
	margin-bottom: ${({ theme }) => theme.shape.spacing(4)}px;
`;

const OrderTrackerBox = styled(View)`
	margin-top: ${({ theme }) => theme.shape.spacing(4)}px;
	margin-bottom: ${({ theme }) => theme.shape.spacing(4)}px;
`;

export default OrderStatusCard;