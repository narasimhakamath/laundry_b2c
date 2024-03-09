import React from "react";
import Screen from "../components/UI/Screen";
import { Text } from "react-native-paper";
import CartCategorySection from "../components/CartCategorySection";
import { ScrollView, StyleSheet, TouchableOpacity, View } from "react-native";
import { ITEMS_IN_YOUR_CART, PROCEED, REMOVE_ALL } from "../constants/strings";
import styled from "styled-components";
import theme from "../utils/theme";
import Title from "../components/UI/Title";
import Subheading from "../components/UI/Subheading";
import { MaterialIcons } from '@expo/vector-icons';
import Subtitle from "../components/UI/Subtitle";
import OrderPricingSummary from "../components/OrderPricingSummary";
import Button from "../components/UI/Button";


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

			<Button textTransform="uppercase" onPress={onProceed}>{PROCEED}</Button>
		</Screen>
	);
};

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

export default CartScreen;