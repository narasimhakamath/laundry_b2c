import React from "react";
import { View, FlatList } from "react-native";
import ClothType from "./ClothType";
import styled from "styled-components";


const clothes = [
	{
		id: 1,
		title: "T-Shirt",
		categoryID: 1,
		image: require("../assets/t-shirt.png")
	},
	{
		id: 2,
		title: "Full-sleeve shirt",
		categoryID: 1,
		image: require("../assets/full-sleeve-shirt.png")
	},
	{
		id: 3,
		title: "Half-sleeve shirt",
		categoryID: 1,
		image: require("../assets/half-sleeve-shirt.png")
	},
	{
		id: 4,
		title: "Sweatshirt",
		categoryID: 1,
		image: require("../assets/sweat-shirt.png")
	},
	{
		id: 5,
		title: "Sweater",
		categoryID: 1,
		image: require("../assets/sweater.png")
	},
	{
		id: 6,
		title: "Shorts",
		categoryID: 1,
		image: require("../assets/shorts.png")
	},
	{
		id: 7,
		title: "Pants",
		categoryID: 1,
		image: require("../assets/black-black.png")
	},
	{
		id: 8,
		title: "Denim Pants",
		categoryID: 1,
		image: require("../assets/denim-pants.png")
	},
	// {
	// 	id: 9,
	// 	title: "Man Thong",
	// 	image: "thong.png",
	// 	categoryID: 1,
	// 	image: require("../assets/thong.png")
	// },
	{
		id: 10,
		title: "Hoodie",
		categoryID: 1,
		image: require("../assets/hoodie.png")
	},
	{
		id: 11,
		title: "Jacket",
		categoryID: 1,
		image: require("../assets/jacket.png")
	},
	{
		id: 12,
		title: "Kurta",
		categoryID: 1,
		image: require("../assets/kurta.png")
	},
	{
		id: 13,
		title: "Muffler/Scarf",
		categoryID: 1,
		image: require("../assets/scarf.png")
	},
	{
		id: 14,
		title: "Dhoti",
		categoryID: 1,
		image: require("../assets/dhoti.png")
	},
	{
		id: 15,
		title: "Dress",
		categoryID: 2,
		image: require("../assets/dress.png")
	},
	{
		id: 16,
		title: "Blouse",
		categoryID: 2,
		image: require("../assets/blouse.png")
	},
	{
		id: 17,
		title: "Full-sleeve Shirt",
		categoryID: 2,
		image: require("../assets/full-sleeve-shirt.png")
	},
	{
		id: 18,
		title: "Half-sleeve Shirt",
		categoryID: 2,
		image: require("../assets/half-sleeve-shirt.png")
	},
	{
		id: 19,
		title: "Lingerie",
		categoryID: 2,
		image: require("../assets/lingerie.png")
	},
	{
		id: 20,
		title: "Pants",
		categoryID: 2,
		image: require("../assets/black-black.png")
	},
	{
		id: 21,
		title: "Denim Pants",
		categoryID: 2,
		image: require("../assets/denim-pants.png")
	},
	{
		id: 22,
		title: "Hoodie",
		categoryID: 2,
		image: require("../assets/hoodie.png")
	},
	{
		id: 23,
		title: "Jacket",
		categoryID: 2,
		image: require("../assets/jacket.png")
	},
	{
		id: 24,
		title: "Jumpsuit",
		categoryID: 2,
		image: require("../assets/jumpsuit.png")
	},
	{
		id: 25,
		title: "Leggings",
		categoryID: 2,
		image: require("../assets/leggings.png")
	},
	{
		id: 26,
		title: "Saree",
		categoryID: 2,
		image: require("../assets/saree.png")
	},
	{
		id: 27,
		title: "Muffler/Scart",
		categoryID: 2,
		image: require("../assets/scarf.png")
	},
	{
		id: 28,
		title: "Shorts",
		categoryID: 2,
		image: require("../assets/shorts.png")
	},
	{
		id: 29,
		title: "Silk Saree",
		categoryID: 2,
		image: require("../assets/silk-saree.png")
	},
	{
		id: 30,
		title: "Sweatshirt",
		categoryID: 2,
		image: require("../assets/sweat-shirt.png")
	},
	{
		id: 31,
		title: "Sweater",
		categoryID: 2,
		image: require("../assets/sweater.png")
	},
	{
		id: 32,
		title: "S-Shirt",
		categoryID: 2,
		image: require("../assets/t-shirt.png")
	},
	{
		id: 33,
		title: "Trousers",
		categoryID: 2,
		image: require("../assets/trousers.png")
	},
	{
		id: 34,
		title: "Apron",
		categoryID: 3,
		image: require("../assets/apron.png")
	},
	{
		id: 35,
		title: "Bath Towel",
		categoryID: 3,
		image: require("../assets/bath-towel.png")
	},
	{
		id: 36,
		title: "Bedsheet",
		categoryID: 3,
		image: require("../assets/bed-sheet.png")
	},
	{
		id: 37,
		title: "Blanket",
		categoryID: 3,
		image: require("../assets/blanket.png")
	},
	{
		id: 38,
		title: "Pillow Cover",
		categoryID: 3,
		image: require("../assets/pillow-cover.png")
	},
	{
		id: 39,
		title: "Bath Mat",
		categoryID: 3,
		image: require("../assets/bath-mat.png")
	},
	{
		id: 40,
		title: "Carpet",
		categoryID: 3,
		image: require("../assets/carpet.png")
	}
]

const ClothListContainer = ({ categoryID, searchQuery }) => {
	const categoryClothes = clothes.filter(cloth => {
		if(!!searchQuery)
			return cloth.categoryID === categoryID && cloth.title.includes(searchQuery);
		return cloth.categoryID === categoryID
	});

	return(
		<Container>
			<FlatList
				data={categoryClothes}
				keyExtractor={item => item?.id}
				renderItem={({ item }) => <ClothType data={item} />}
			/>
		</Container>
	);
};

const Container = styled(View)`
	margin-top: ${({ theme }) => theme.shape.spacing(3)}px;
`;

export default ClothListContainer;