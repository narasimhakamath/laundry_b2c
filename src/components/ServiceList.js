import React from "react";
import { View, FlatList } from "react-native";
import ServiceCard from "./ServiceCard";
import { ALL_CATEGORIES, DRY_CLEAN, SHOE_CLEAN, STEAM_IRON, WASH_AND_FOLD, WASH_AND_IRON } from "../constants/strings";
import Heading from "./UI/Heading";
import styled from "styled-components";

const SERVICES = [
	{id: 1, name: WASH_AND_FOLD, image: require("../assets/laundry.png")},
	{id: 2, name: WASH_AND_IRON, image: require("../assets/iron-box.png")},
	{id: 3, name: DRY_CLEAN, image: require("../assets/dry-clean.png")},
	{id: 4, name: STEAM_IRON, image: require("../assets/steamiron.png")},
	{id: 5, name: SHOE_CLEAN, image: require("../assets/shoe-clean.png")},
];

const ServiceList = () => {
	return(
		<Container>
			<TitleContainer>
				<Heading textTransform="uppercase" textAlign="center">{ALL_CATEGORIES}</Heading>
			</TitleContainer>
			<FlatList
				data={SERVICES}
				horizontal={true}
				showsHorizontalScrollIndicator={false}
				keyExtractor={item => item.id}
				renderItem={({ item }) => <ServiceCard data={item} />}
			/>
		</Container>
	);
};

const Container = styled(View)`
	padding-left: ${({ theme }) => theme.shape.spacing(5)}px;
	padding-right: ${({ theme }) => theme.shape.spacing(5)}px;
	padding-top: ${({ theme }) => theme.shape.spacing(4)}px;
`;

const TitleContainer = styled(View)`
	padding-top: ${({ theme }) => theme.shape.spacing(3)}px;
	padding-bottom: ${({ theme }) => theme.shape.spacing(3)}px;
`;

export default ServiceList;