import React from "react";
import OrderStatusCard from "./OrderStatusCard";
import { View } from "react-native";
import { YOUR_ONGOING_ORDERS } from "../constants/strings";
import styled from "styled-components";
import Heading from "./UI/Heading";
 
const CurrentOrders = () => {
	return(
		<Container>
			<Heading textTransform="uppercase" textAlign="center">{YOUR_ONGOING_ORDERS}</Heading>
			<OrderStatusCard statusID={2} />
		</Container>
	);
};

const Container = styled(View)`
	padding-top: 5px;
	padding-bottom: 5px;
	margin-top: 5px;
	margin-left: ${({ theme }) => theme.shape.spacing(5)}px;
	margin-right: ${({ theme }) => theme.shape.spacing(5)}px;
	padding-top: 20px;
	padding-bottom: 20px;
`;

export default CurrentOrders;