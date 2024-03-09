import React from "react";
import { FlatList, ScrollView, View } from "react-native";
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
	// {
	// 	id: 9,
	// 	title: "Man Thong",
	// 	image: "thong.png",
	// 	categoryID: 1,
	// 	quantity: 12,
	// 	image: require("../assets/thong.png")
	// },
	// {
	// 	id: 25,
	// 	title: "Leggings",
	// 	categoryID: 2,
	// 	quantity: 3,
	// 	image: require("../assets/leggings.png")
	// },
	// {
	// 	id: 26,
	// 	title: "Saree",
	// 	categoryID: 2,
	// 	quantity: 2,
	// 	image: require("../assets/saree.png")
	// },
];

const CartCategorySection = () => {
	return(
		<Container>
			<Box>
				<Heading textTransform="uppercase" textAlign="center">{WASH_AND_FOLD}</Heading>
			</Box>


			{ITEMS.map((item) => {
				return(
					<ClothType data={item} />
				);
			})}

			{/* <FlatList
				data={ITEMS}
				keyExtractor={item => item?.id}
				renderItem={({ item }) => <ClothType data={item} />}
			/> */}
		</Container>
	);
};

const Container = styled(View)`
	flex: 1;
	margin-top: ${({ theme }) => theme.shape.spacing(10)}px;
`;

const Box = styled(View)`
	margin-bottom: ${({ theme }) => theme.shape.spacing(5)}px;
`;

export default CartCategorySection;