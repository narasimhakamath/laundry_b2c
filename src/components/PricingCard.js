import React from "react";
import { View } from "react-native";
import styled from "styled-components";
import Subtitle from "./UI/Subtitle";
import Subheading from "./UI/Subheading";
import Heading from "./UI/Heading";
import { BUY } from "../constants/strings";
import Button from "./UI/Button";
import ViewBox from "./UI/ViewBox";
import { Text } from "react-native-paper";

const PricingCard = ({ title, currency, price, subtitle1, subtitle2 }) => {
	return(
		<Container>
			<Subheading textTransform="uppercase" textAlign="center">{title}</Subheading>
			<PriceText>{currency}{price}</PriceText>

			<SubtitleBox>
				<SubtitleText>{subtitle1}</SubtitleText>
				<SubtitleText>{subtitle2}</SubtitleText>
			</SubtitleBox>

			<ViewBox mx={7} my={2}>
				<Button br={2} flex={1} textTransform="uppercase">{BUY}</Button>
			</ViewBox>
		</Container>
	);
};

const Container = styled(View)`
	min-width: ${({ theme }) => theme.shape.spacing(65)}px;
	padding-top: ${({ theme }) => theme.shape.spacing(5)}px;
	padding-bottom: ${({ theme }) => theme.shape.spacing(5)}px;
	margin-top: ${({ theme }) => theme.shape.spacing(5)}px;
	margin-bottom: ${({ theme }) => theme.shape.spacing(5)}px;
	margin-left: ${({ theme }) => theme.shape.spacing(3)}px;
	margin-right: ${({ theme }) => theme.shape.spacing(3)}px;
	background-color: ${({ theme }) => theme.colors.backgroundColor.default};
	border-radius: ${({ theme }) => theme.shape.radius(2)}px;
	elevation: 5;
	shadow-color: ${({ theme }) => theme.colors.primary.main};
	shadow-offset: {width: 0px; height: ${({ theme }) => theme.shape.spacing(2)}px};
	shadow-opacity: 0.9;
	shadow-radius: ${({ theme }) => theme.colors.common.dark};
	flex: ${({ flex }) => flex ?? 0};
`;

const PriceText = styled(Heading)`
	font-size: ${({ theme }) => theme.shape.spacing(7)}px;
	font-weight: bold;
	margin-top: ${({ theme }) => theme.shape.spacing(2)}px;
	margin-bottom: ${({ theme }) => theme.shape.spacing(2)}px;
	text-align: center;
`;

const SubtitleBox = styled(View)`
	margin-top: ${({ theme }) => theme.shape.spacing(2)}px;
	margin-bottom: ${({ theme }) => theme.shape.spacing(4)}px;
`;

const SubtitleText = styled(Subtitle)`
	text-transform: uppercase;
	text-align: center;
	color: ${({ theme }) => theme.colors.grey.main};
	margin-top: ${({ theme }) => theme.shape.spacing(1)}px;
	margin-bottom: ${({ theme }) => theme.shape.spacing(1)}px;
`;

export default PricingCard;