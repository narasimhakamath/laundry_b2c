import React from "react";
import { FlatList, View } from "react-native";
import { Text } from "react-native-paper";
import styled from "styled-components";
import ClothType from "./ClothType";
import Heading from "./Heading";
import { WASH_AND_FOLD } from "../constants/strings";

const ITEMS = [
	{
		id: 1,
		title: "T-Shirt",
		categoryID: 1,
		quantity: 6,
		image: require("../assets/t-shirt.png")
	},
	{
		id: 8,
		title: "Denim Pants",
		categoryID: 1,
		quantity: 3,
		image: require("../assets/denim-pants.png")
	},
	{
		id: 2,
		title: "Full-sleeve shirt",
		categoryID: 1,
		quantity: 5,
		image: require("../assets/full-sleeve-shirt.png")
	},
];

const CartCategorySection = () => {
	return(
		<Container>
			<Heading textTransform="uppercase" textAlign="center">{WASH_AND_FOLD}</Heading>
			<FlatList
				data={ITEMS}
				keyExtractor={item => item?.id}
				renderItem={({ item }) => <ClothType data={item} />}
			/>
		</Container>
	);
};

const Container = styled(View)`
	flex: 1;
	margin-top: ${({ theme }) => theme.shape.spacing(10)}px;
`;

export default CartCategorySection;