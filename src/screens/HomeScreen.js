import React, { useState } from "react";
import { ScrollView } from "react-native";

import ServiceList from "../components/ServiceList";
import CurrentOrders from "../components/CurrentOrders";
import Screen from "../components/Screen";

const HomeScreen = () => {
	const [openSpeedDial, setOpenSpeedDial] = useState(false);


	return(
		<ScrollView showsVerticalScrollIndicator={false}>
			<Screen>
				<ServiceList />

				<CurrentOrders />
			</Screen>
		</ScrollView>
	);
};

export default HomeScreen;