import React from "react";
import { View, FlatList } from "react-native";
import ClothType from "./ClothType";
import styled from "styled-components";


const clothes = [
	{
		id: 1,
		title: "T-Shirt",
		image: "t-shirt.png",
		categoryID: 1,
		image: require("../assets/t-shirt.png")
	},
	{
		id: 2,
		title: "Full-sleeve shirt",
		image: "full-sleeve-shirt.png",
		categoryID: 1,
		image: require("../assets/full-sleeve-shirt.png")
	},
	{
		id: 3,
		title: "Half-sleeve shirt",
		image: "half-sleeve-shirt.png",
		categoryID: 1,
		image: require("../assets/half-sleeve-shirt.png")
	},
	{
		id: 4,
		title: "Sweatshirt",
		image: "sweat-shirt.png",
		categoryID: 1,
		image: require("../assets/sweat-shirt.png")
	},
	{
		id: 5,
		title: "Sweater",
		image: "sweater.png",
		categoryID: 1,
		image: require("../assets/sweater.png")
	},
	{
		id: 6,
		title: "Shorts",
		image: "shorts.png",
		categoryID: 1,
		image: require("../assets/shorts.png")
	},
	{
		id: 7,
		title: "Pants",
		image: "black-pant.png",
		categoryID: 1,
		image: require("../assets/black-black.png")
	},
	{
		id: 8,
		title: "Denim Pants",
		image: "denim-pant.png",
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
		image: "hoodie.png",
		categoryID: 1,
		image: require("../assets/hoodie.png")
	},
	{
		id: 11,
		title: "Jacket",
		image: "jacket.png",
		categoryID: 1,
		image: require("../assets/jacket.png")
	},
	{
		id: 12,
		title: "Kurta",
		image: "kurta.png",
		categoryID: 1,
		image: require("../assets/kurta.png")
	},
	{
		id: 13,
		title: "Muffler/Scarf",
		image: "scarf.png",
		categoryID: 1,
		image: require("../assets/scarf.png")
	},
	{
		id: 14,
		title: "Dhoti",
		image: "dhoti.png",
		categoryID: 1,
		image: require("../assets/dhoti.png")
	},
	{
		id: 15,
		title: "Dress",
		image: "blo.png",
		categoryID: 2,
		image: require("../assets/dress.png")
	},
	{
		id: 16,
		title: "Blouse",
		image: "blo.png",
		categoryID: 2,
		image: require("../assets/blouse.png")
	},
	{
		id: 17,
		title: "Full-sleeve Shirt",
		image: "blo.png",
		categoryID: 2,
		image: require("../assets/full-sleeve-shirt.png")
	},
	{
		id: 18,
		title: "Half-sleeve Shirt",
		image: "blo.png",
		categoryID: 2,
		image: require("../assets/half-sleeve-shirt.png")
	},
	{
		id: 19,
		title: "Lingerie",
		image: "blo.png",
		categoryID: 2,
		image: require("../assets/lingerie.png")
	},
	{
		id: 20,
		title: "Pants",
		image: "blo.png",
		categoryID: 2,
		image: require("../assets/black-black.png")
	},
	{
		id: 21,
		title: "Denim Pants",
		image: "blo.png",
		categoryID: 2,
		image: require("../assets/denim-pants.png")
	},
	{
		id: 22,
		title: "Hoodie",
		image: "blo.png",
		categoryID: 2,
		image: require("../assets/hoodie.png")
	},
	{
		id: 23,
		title: "Jacket",
		image: "blo.png",
		categoryID: 2,
		image: require("../assets/jacket.png")
	},
	{
		id: 24,
		title: "Jumpsuit",
		image: "blo.png",
		categoryID: 2,
		image: require("../assets/jumpsuit.png")
	},
	{
		id: 25,
		title: "Leggings",
		image: "blo.png",
		categoryID: 2,
		image: require("../assets/leggings.png")
	},
	{
		id: 26,
		title: "Saree",
		image: "blo.png",
		categoryID: 2,
		image: require("../assets/saree.png")
	},
	{
		id: 27,
		title: "Muffler/Scart",
		image: "blo.png",
		categoryID: 2,
		image: require("../assets/scarf.png")
	},
	{
		id: 28,
		title: "Shorts",
		image: "blo.png",
		categoryID: 2,
		image: require("../assets/shorts.png")
	},
	{
		id: 29,
		title: "Silk Saree",
		image: "blo.png",
		categoryID: 2,
		image: require("../assets/silk-saree.png")
	},
	{
		id: 30,
		title: "Sweatshirt",
		image: "blo.png",
		categoryID: 2,
		image: require("../assets/sweat-shirt.png")
	},
	{
		id: 31,
		title: "Sweater",
		image: "blo.png",
		categoryID: 2,
		image: require("../assets/sweater.png")
	},
	{
		id: 32,
		title: "S-Shirt",
		image: "blo.png",
		categoryID: 2,
		image: require("../assets/t-shirt.png")
	},
	{
		id: 33,
		title: "Trousers",
		image: "blo.png",
		categoryID: 2,
		image: require("../assets/trousers.png")
	},
	{
		id: 34,
		title: "Apron",
		image: "blo.png",
		categoryID: 3,
		image: require("../assets/apron.png")
	},
	{
		id: 35,
		title: "Bath Towel",
		image: "blo.png",
		categoryID: 3,
		image: require("../assets/bath-towel.png")
	},
	{
		id: 36,
		title: "Bedsheet",
		image: "blo.png",
		categoryID: 3,
		image: require("../assets/bed-sheet.png")
	},
	{
		id: 37,
		title: "Blanket",
		image: "blo.png",
		categoryID: 3,
		image: require("../assets/blanket.png")
	},
	{
		id: 38,
		title: "Pillow Cover",
		image: "blo.png",
		categoryID: 3,
		image: require("../assets/pillow-cover.png")
	},
	{
		id: 39,
		title: "Bath Mat",
		image: "blo.png",
		categoryID: 3,
		image: require("../assets/bath-mat.png")
	},
	{
		id: 40,
		title: "Carpet",
		image: "blo.png",
		categoryID: 3,
		image: require("../assets/carpet.png")
	}
]

const ClothListContainer = ({ categoryID }) => {
	const categoryClothes = clothes.filter(cloth => cloth.categoryID === categoryID);

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
	margin-top: ${({ theme }) => theme.shape.spacing(2)}px;
`;

export default ClothListContainer;