import React from "react";
import { View } from "react-native";
import styled from "styled-components";
import Subheading from "./Subheading";
import { ORDER_SUMMARY } from "../constants/strings";
import Heading from "./Heading";
import Title from "./Title";
import { Divider } from "react-native-paper";

const OrderPricingSummary = () => {
	return(
		<Container>
			<Heading textTransform="uppercase" textAlign="center">{ORDER_SUMMARY}</Heading>
			<Pricing>
				<Subheading>Subtotal</Subheading>
				<Subheading>₹300.00</Subheading>
			</Pricing>
			<Pricing>
				<Subheading>Tax</Subheading>
				<Subheading>+ ₹17.00</Subheading>
			</Pricing>
			<Divider />
			<Pricing>
				<Subheading>Coupons/Discount</Subheading>
				<Subheading>- ₹0.00</Subheading>
			</Pricing>
			<Divider />
			<Pricing>
				<Subheading fontWeight="bold">Total</Subheading>
				<Subheading fontWeight="bold">₹317.00</Subheading>
			</Pricing>
		</Container>
	);
};

const Container = styled(View)`
	margin-top: ${({ theme }) => theme.shape.spacing(3)}px;
	margin-left: ${({ theme }) => theme.shape.spacing(10)}px;
	margin-right: ${({ theme }) => theme.shape.spacing(10)}px;
	padding-right: ${({ theme }) => theme.shape.spacing(5)}px;
	padding-left: ${({ theme }) => theme.shape.spacing(5)}px;
	padding-top: ${({ theme }) => theme.shape.spacing(3)}px;
	padding-bottom: ${({ theme }) => theme.shape.spacing(3)}px;
`;

const Pricing = styled(View)`
	flex-direction: row;
	justify-content: space-between;
	padding-top: ${({ theme }) => theme.shape.spacing(1)}px;
	padding-bottom: ${({ theme }) => theme.shape.spacing(1)}px;
`;


export default OrderPricingSummary;