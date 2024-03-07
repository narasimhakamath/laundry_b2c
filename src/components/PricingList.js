import React from "react";
import { ScrollView, StyleSheet, View } from "react-native";
import styled from "styled-components";

import { PricingCard, lightColors } from '@rneui/themed';
import Heading from "./Heading";
import { ANNUAL_PLAN, BUY, DELIVERY_IN_24_HOURS, EXPLORE_PLANS, HALF_YEARLY_PLAN, MONTHLY_PLAN, PICK_UPS_A_WEEK, QUARTERLY_PLAN } from "../constants/strings";
import theme from "../utils/theme";


const PricingList = () => {
	return(
		<Container>
			<Heading textTransform="uppercase" textAlign="center">{EXPLORE_PLANS}</Heading>
			<ScrollView horizontal>
				<PricingCard
					color={theme.colors.common.dark}
					title={MONTHLY_PLAN}
					price="₹149"
					info={[
						`1 ${PICK_UPS_A_WEEK.toUpperCase()}`,
						DELIVERY_IN_24_HOURS,
					]}
					titleStyle={styles.pricingTitle}
					pricingStyle={styles.pricing}
					infoStyle={styles.pricingInfo}
					button={{title: BUY.toUpperCase()}}
					wrapperStyle={{width: theme.shape.spacing(60)}}
				/>
				<PricingCard
					color={theme.colors.common.dark}
					title={MONTHLY_PLAN}
					price="₹299"
					info={[
						`3 ${PICK_UPS_A_WEEK.toUpperCase()}`,
						DELIVERY_IN_24_HOURS,
					]}
					titleStyle={styles.pricingTitle}
					pricingStyle={styles.pricing}
					infoStyle={styles.pricingInfo}
					button={{title: BUY.toUpperCase()}}
					wrapperStyle={{width: theme.shape.spacing(60)}}
				/>
				<PricingCard
					color={theme.colors.common.dark}
					title={QUARTERLY_PLAN}
					price="₹899"
					info={[
						`3 ${PICK_UPS_A_WEEK.toUpperCase()}`,
						DELIVERY_IN_24_HOURS,
					]}
					titleStyle={styles.pricingTitle}
					pricingStyle={styles.pricing}
					infoStyle={styles.pricingInfo}
					button={{title: BUY.toUpperCase()}}
					wrapperStyle={{width: theme.shape.spacing(60)}}
					
				/>
				<PricingCard
					color={theme.colors.common.dark}
					title={QUARTERLY_PLAN}
					price="₹1399"
					info={[
						`5 ${PICK_UPS_A_WEEK.toUpperCase()}`,
						DELIVERY_IN_24_HOURS,
					]}
					titleStyle={styles.pricingTitle}
					pricingStyle={styles.pricing}
					infoStyle={styles.pricingInfo}
					button={{title: BUY.toUpperCase()}}
					wrapperStyle={{width: theme.shape.spacing(60)}}
					
				/>
				<PricingCard
					color={theme.colors.common.dark}
					title={HALF_YEARLY_PLAN}
					price="₹1699"
					info={[
						`3 ${PICK_UPS_A_WEEK.toUpperCase()}`,
						DELIVERY_IN_24_HOURS,
					]}
					titleStyle={styles.pricingTitle}
					pricingStyle={styles.pricing}
					infoStyle={styles.pricingInfo}
					button={{title: BUY.toUpperCase()}}
					wrapperStyle={{width: theme.shape.spacing(60)}}
					
				/>
				<PricingCard
					color={theme.colors.common.dark}
					title={HALF_YEARLY_PLAN}
					price="₹2299"
					info={[
						`5 ${PICK_UPS_A_WEEK.toUpperCase()}`,
						DELIVERY_IN_24_HOURS,
					]}
					titleStyle={styles.pricingTitle}
					pricingStyle={styles.pricing}
					infoStyle={styles.pricingInfo}
					button={{title: BUY.toUpperCase()}}
					wrapperStyle={{width: theme.shape.spacing(60)}}
					
				/>
				<PricingCard
					color={theme.colors.common.dark}
					title={ANNUAL_PLAN}
					price="₹2999"
					info={[
						`3 ${PICK_UPS_A_WEEK.toUpperCase()}`,
						DELIVERY_IN_24_HOURS,
					]}
					titleStyle={styles.pricingTitle}
					pricingStyle={styles.pricing}
					infoStyle={styles.pricingInfo}
					button={{title: BUY.toUpperCase()}}
					wrapperStyle={{width: theme.shape.spacing(60)}}
					
				/>
				<PricingCard
					color={theme.colors.common.dark}
					title={ANNUAL_PLAN}
					price="₹3999"
					info={[
						`5 ${PICK_UPS_A_WEEK.toUpperCase()}`,
						DELIVERY_IN_24_HOURS,
					]}
					titleStyle={styles.pricingTitle}
					pricingStyle={styles.pricing}
					infoStyle={styles.pricingInfo}
					button={{title: BUY.toUpperCase()}}
					wrapperStyle={{width: theme.shape.spacing(60)}}
					
				/>
				<PricingCard
					color={theme.colors.common.dark}
					title={ANNUAL_PLAN}
					price="₹4999"
					info={[
						`7 ${PICK_UPS_A_WEEK.toUpperCase()}`,
						DELIVERY_IN_24_HOURS,
					]}
					titleStyle={styles.pricingTitle}
					pricingStyle={styles.pricing}
					infoStyle={styles.pricingInfo}
					button={{title: BUY.toUpperCase()}}
					wrapperStyle={{width: theme.shape.spacing(60)}}
					
				/>
			</ScrollView>
		</Container>
	);
};

const Container = styled(View)`
`;

const PricingContainer = styled(View)`
	flex-direction: row;
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