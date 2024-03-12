import React from "react";
import { View } from "react-native";
import { ORDER_ID, ORDER_PLACED_ON, VIEW_MORE } from "../constants/strings";
import { Card, Surface } from 'react-native-paper';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import theme from "../utils/theme";
import OrderTracker from "./OrderTracker";
import styled from "styled-components";
import Title from "./UI/Title";
import Subheading from "./UI/Subheading";
import Button from "./UI/Button";


const OrderStatusCard = ({ statusID}) => {
	const onViewMore = () => {
		// navigate to order details page...
	};

	return(
		<CardContainer elevation={5}>
			<Box>
				<LeftBox>
					<MaterialCommunityIcons name="washing-machine" size={theme.shape.spacing(12)} color={theme.colors.common.dark} />
				</LeftBox>
				<RightBox>
					<Subheading>{ORDER_ID}: 12</Subheading>
					<Title>{ORDER_PLACED_ON} 11/02/2024</Title>
				</RightBox>
			</Box>


			<Card.Content>
				<OrderTrackerBox>
					<OrderTracker statusID={statusID} />
				</OrderTrackerBox>

				<ButtonBox>
					<Button br={2} textTransform="uppercase">{VIEW_MORE}</Button>
				</ButtonBox>
			</Card.Content>
		</CardContainer>
	);
};

const Box = styled(View)`
	flex-direction: row;
	margin-top: ${({ theme }) => theme.shape.spacing(3)}px;
	margin-bottom: ${({ theme }) => theme.shape.spacing(3)}px;
	margin-left: ${({ theme }) => theme.shape.spacing(6)}px;
	margin-right: ${({ theme }) => theme.shape.spacing(6)}px;
	align-items: center;
`;

const LeftBox = styled(View)`
	flex: 1;
`;

const RightBox = styled(View)`
	flex: 5;
`;

const CardContainer = styled(Surface)`
	margin-top: ${({ theme }) => theme.shape.spacing(4)}px;
	margin-bottom: ${({ theme }) => theme.shape.spacing(4)}px;
	background-color: ${({ theme }) => theme.colors.backgroundColor.default};
	border-radius: ${({ theme }) => theme.shape.radius(2)}px;
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