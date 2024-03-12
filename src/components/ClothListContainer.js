import React from "react";
import { View, FlatList } from "react-native";
import ClothType from "./ClothType";
import styled from "styled-components";

const ClothListContainer = ({ data, service, category, searchQuery }) => {
	const categoryClothes = data.filter(cloth => {
		if(!!searchQuery)
			return cloth.title.includes(searchQuery);
		return cloth;
	});

	return(
		<Container>
			<FlatList
				data={categoryClothes}
				keyExtractor={item => item?.id}
				renderItem={({ item }) => <ClothType data={item} service={service} category={category} />}
			/>
		</Container>
	);
};

const Container = styled(View)`
	margin-top: ${({ theme }) => theme.shape.spacing(3)}px;
`;

export default ClothListContainer;