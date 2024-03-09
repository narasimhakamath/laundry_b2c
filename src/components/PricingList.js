import React from "react";
import { ScrollView, StyleSheet, View } from "react-native";
import styled from "styled-components";

import { PricingCard as PricingListElement, lightColors } from '@rneui/themed';
import Heading from "./UI/Heading";
import { ANNUAL_PLAN, BUY, DELIVERY_IN_24_HOURS, EXPLORE_PLANS, HALF_YEARLY_PLAN, MONTHLY_PLAN, PICK_UPS_A_WEEK, QUARTERLY_PLAN } from "../constants/strings";
import theme from "../utils/theme";
import PricingCard from "./PricingCard";


const PricingList = () => {
	return(
		<Container>
			<Heading textTransform="uppercase" textAlign="center">{EXPLORE_PLANS}</Heading>
			<PricingContainer horizontal showsVerticalScrollIndicator={false} showsHorizontalScrollIndicator={false}>
				<PricingCard
					title={MONTHLY_PLAN}
					currency="₹"
					price={149}
					subtitle1={`1 ${PICK_UPS_A_WEEK}`}
					subtitle2={DELIVERY_IN_24_HOURS}
				/>

				<PricingCard
					title={MONTHLY_PLAN}
					currency="₹"
					price={299}
					subtitle1={`3 ${PICK_UPS_A_WEEK}`}
					subtitle2={DELIVERY_IN_24_HOURS}
				/>

				<PricingCard
					title={QUARTERLY_PLAN}
					currency="₹"
					price={899}
					subtitle1={`3 ${PICK_UPS_A_WEEK}`}
					subtitle2={DELIVERY_IN_24_HOURS}
				/>

				<PricingCard
					title={QUARTERLY_PLAN}
					currency="₹"
					price={1399}
					subtitle1={`5 ${PICK_UPS_A_WEEK}`}
					subtitle2={DELIVERY_IN_24_HOURS}
				/>

				<PricingCard
					title={HALF_YEARLY_PLAN}
					currency="₹"
					price={1699}
					subtitle1={`3 ${PICK_UPS_A_WEEK}`}
					subtitle2={DELIVERY_IN_24_HOURS}
				/>

				<PricingCard
					title={HALF_YEARLY_PLAN}
					currency="₹"
					price={2299}
					subtitle1={`5 ${PICK_UPS_A_WEEK}`}
					subtitle2={DELIVERY_IN_24_HOURS}
				/>

				<PricingCard
					title={ANNUAL_PLAN}
					currency="₹"
					price={2999}
					subtitle1={`3 ${PICK_UPS_A_WEEK}`}
					subtitle2={DELIVERY_IN_24_HOURS}
				/>

				<PricingCard
					title={ANNUAL_PLAN}
					currency="₹"
					price={3999}
					subtitle1={`4 ${PICK_UPS_A_WEEK}`}
					subtitle2={DELIVERY_IN_24_HOURS}
				/>

				<PricingCard
					title={ANNUAL_PLAN}
					currency="₹"
					price={4999}
					subtitle1={`7 ${PICK_UPS_A_WEEK}`}
					subtitle2={DELIVERY_IN_24_HOURS}
				/>
			</PricingContainer>
		</Container>
	);
};

const Container = styled(View)`
`;

const PricingContainer = styled(ScrollView)`
	flex-direction: row;
	margin-left: ${({ theme }) => theme.shape.spacing(4)}px;
	margin-right: ${({ theme }) => theme.shape.spacing(4)}px;
`;

const styles = StyleSheet.create({
	pricingTitle: {
		fontSize: theme.shape.spacing(4),
		fontFamily: theme.fontFamily,
		textTransform: "uppercase"
	},
	pricing: {
		fontSize: theme.shape.spacing(6),
		fontFamily: theme.fontFamily
	},
	pricingInfo: {
		fontSize: theme.shape.spacing(3),
		fontFamily: theme.fontFamily,
		textTransform: "uppercase"
	}
});

export default PricingList;