import React, { useState } from "react";
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { HOUSEHOLD, MEN, PROCEED, SEARCH, WOMEN } from "../constants/strings";
import ClothSelectionScreen from "../screens/ClothSelectionScreen";
import { Button, Text } from "react-native-paper";
import styled from "styled-components";
import theme from "../utils/theme";
import { StyleSheet } from "react-native";
import { SearchBar } from 'react-native-elements';
import { useNavigation } from "@react-navigation/native";

const Tab = createMaterialTopTabNavigator();

const ClothesTab = () => {
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
				<Tab.Screen
					name="MenClothesTab"
					// component={ClothSelectionScreen}
					// initialParams={{categoryID: 1}}
					children={() => <ClothSelectionScreen categoryID={1} searchQuery={searchQuery} />}
					options={{
						title: MEN,
					}}
				/>
				<Tab.Screen
					name="WomenClothesTab"
					// component={ClothSelectionScreen}
					// initialParams={{categoryID: 2}}
					children={() => <ClothSelectionScreen categoryID={2} searchQuery={searchQuery} />}
					options={{
						title: WOMEN,
					}}
				/>
				<Tab.Screen
					name="HouseholdClothesTab"
					// component={ClothSelectionScreen}
					// initialParams={{categoryID: 3}}
					children={() => <ClothSelectionScreen categoryID={3} searchQuery={searchQuery} />}
					options={{
						title: HOUSEHOLD,
					}}
				/>
			</Tab.Navigator>

			<ProceedButton
				mode="contained"
				buttonColor={theme.colors.common.dark}
				uppercase={true}
				onPress={onProceed}
				labelStyle={styles.button}
			>
				{PROCEED}
			</ProceedButton>
		</>
	);
};

const ProceedButton = styled(Button)`
	padding-top: ${({ theme }) => theme.shape.spacing(2)}px;
	padding-bottom: ${({ theme }) => theme.shape.spacing(2)}px;
	border-radius: ${({ theme }) => theme.shape.radius(0)}px;
`;

const styles = StyleSheet.create({
	button: {
		fontFamily: theme.fontFamily,
		fontSize: theme.shape.spacing(4),
	},
	searchContainer: {
		backgroundColor: theme.colors.backgroundColor.default,
	},
	searchInput: {
		backgroundColor: theme.colors.backgroundColor.light,
	}
});

export default ClothesTab;