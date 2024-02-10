import React from "react";
import { View, FlatList, StyleSheet } from "react-native";
import ClothType from "./ClothType";


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
	{
		id: 9,
		title: "Man Thong",
		image: "thong.png",
		categoryID: 1,
		image: require("../assets/thong.png")
	},
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
		title: "Ipsita's Lingerie",
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
	}
]

const ClothListContainer = ({ categoryID }) => {
	const categoryClothes = clothes.filter(cloth => cloth.categoryID === categoryID);

	return(
		<View style={styles.container}>
			<FlatList
				data={categoryClothes}
				keyExtractor={item => item?.id}
				renderItem={({ item }) => <ClothType data={item} />}
			/>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		marginTop: 10,
	},
});

export default ClothListContainer;