import React from "react";
import { ScrollView } from "react-native";

import ServiceList from "../components/ServiceList";
import CurrentOrders from "../components/CurrentOrders";
import Screen from "../components/UI/Screen";
import PricingList from "../components/PricingList";
import AddressSelector from "../components/AddressSelector";

const HomeScreen = () => {
	return(
		<ScrollView showsVerticalScrollIndicator={false}>
			<Screen>
				<AddressSelector />
				<ServiceList />
				<CurrentOrders />

				<PricingList />
			</Screen>
		</ScrollView>
	);
};

export default HomeScreen;