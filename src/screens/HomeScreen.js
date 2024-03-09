import React from "react";
import { ScrollView } from "react-native";

import ServiceList from "../components/ServiceList";
import CurrentOrders from "../components/CurrentOrders";
import Screen from "../components/Screen";
import PricingList from "../components/PricingList";
import Button from "../components/Button";

const HomeScreen = () => {
	return(
		<ScrollView showsVerticalScrollIndicator={false}>
			<Screen>
				<ServiceList />
				<CurrentOrders />

				<PricingList />
			</Screen>
		</ScrollView>
	);
};

export default HomeScreen;