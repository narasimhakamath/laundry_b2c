import React from "react";
import Screen from "../components/Screen";
import { Button, Text } from "react-native-paper";
import CartCategorySection from "../components/CartCategorySection";
import { StyleSheet } from "react-native";
import { PROCEED } from "../constants/strings";
import styled from "styled-components";
import theme from "../utils/theme";

const CartScreen = () => {

	const onProceed = () => {

	};

	return(
		<Screen>
			<CartCategorySection />

			<ProceedButton
				mode="contained"
				buttonColor={theme.colors.common.dark}
				uppercase={true}
				onPress={onProceed}
				labelStyle={styles.button}
			>
				{PROCEED}
			</ProceedButton>
		</Screen>
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
});

export default CartScreen;