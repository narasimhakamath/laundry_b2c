import React from "react";
import Screen from "../components/Screen";
import { Button, Text } from "react-native-paper";
import CartCategorySection from "../components/CartCategorySection";
import { ScrollView, StyleSheet, TouchableOpacity, View } from "react-native";
import { ITEMS_IN_YOUR_CART, PROCEED, REMOVE_ALL } from "../constants/strings";
import styled from "styled-components";
import theme from "../utils/theme";
import Title from "../components/Title";
import Subheading from "../components/Subheading";
import { MaterialIcons } from '@expo/vector-icons';
import Subtitle from "../components/Subtitle";
import OrderPricingSummary from "../components/OrderPricingSummary";


const CartScreen = () => {

	const onProceed = () => {

	};

	return(
		<Screen>
			<ScrollView>

				<TitleBox>
					<Subheading textAlign="center">17 {ITEMS_IN_YOUR_CART}</Subheading>
					<Touchable>
						<Title>{REMOVE_ALL}</Title>
						<MaterialIcons name="delete" size={24} color="black" />
					</Touchable>
				</TitleBox>

				<CartCategorySection />
				<CartCategorySection />
			</ScrollView>
			<OrderPricingSummary />
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

const TitleBox = styled(View)`
	margin-top: ${({ theme }) => theme.shape.spacing(5)}px;
	justify-content: center;
	align-items: center;
`;

const Touchable = styled(TouchableOpacity)`
	flex-direction: row;
	justify-content: center;
	align-self: center;
	align-items: center;
	margin-top: ${({ theme }) => theme.shape.spacing(1)}px;
`;


const styles = StyleSheet.create({
	button: {
		fontFamily: theme.fontFamily,
		fontSize: theme.shape.spacing(4),
	},
});

export default CartScreen;