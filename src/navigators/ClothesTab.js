import React, { useState } from "react";
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { HOUSEHOLD, MEN, PROCEED, SEARCH, WOMEN } from "../constants/strings";
import ClothSelectionScreen from "../screens/ClothSelectionScreen";
import { Text } from "react-native-paper";
import styled from "styled-components";
import theme from "../utils/theme";
import { StyleSheet } from "react-native";
import { SearchBar } from 'react-native-elements';
import { useNavigation } from "@react-navigation/native";
import Button from "../components/UI/Button";

const Tab = createMaterialTopTabNavigator();

import { clothesList } from "../data/clothList";

const ClothesTab = ({ route }) => {
	const serviceKey = route?.params.serviceKey;

	const serviceWiseClothes = clothesList[serviceKey];

	const navigation = useNavigation();
	const [searchQuery, setSearchQuery] = useState("");

	const onProceed = () => {
		navigation.navigate('CartScreen');
	};

	return(
		<>
			<SearchBar
				containerStyle={styles.searchContainer}
				inputContainerStyle={styles.searchInput}
				placeholder={SEARCH}
				value={searchQuery}
				onChangeText={setSearchQuery}
			/>
			<Tab.Navigator>
				{!!serviceWiseClothes.men && (
					<Tab.Screen
						name="MenClothesTab"
						children={() => <ClothSelectionScreen data={serviceWiseClothes.men} service={serviceKey} category="men" searchQuery={searchQuery} />}
						options={{
							title: MEN,
						}}
					/>
				)}

				{!!serviceWiseClothes.women && (
					<Tab.Screen
						name="WomenClothesTab"
						children={() => <ClothSelectionScreen data={serviceWiseClothes.women} service={serviceKey} category="women" searchQuery={searchQuery} />}
						options={{
							title: WOMEN,
						}}
					/>
				)}

				{!!serviceWiseClothes.household && (
					<Tab.Screen
						name="HouseholdClothesTab"
						children={() => <ClothSelectionScreen data={serviceWiseClothes.household} service={serviceKey} category="household" searchQuery={searchQuery} />}
						options={{
							title: HOUSEHOLD,
						}}
					/>
				)}
			</Tab.Navigator>

			<Button textTransform="uppercase" onPress={onProceed}>{PROCEED}</Button>
		</>
	);
};

const styles = StyleSheet.create({
	searchContainer: {
		backgroundColor: theme.colors.backgroundColor.default,
	},
	searchInput: {
		backgroundColor: theme.colors.backgroundColor.light,
	}
});

export default ClothesTab;