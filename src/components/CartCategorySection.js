import React from "react";
import { FlatList, ScrollView, View } from "react-native";
import { Text } from "react-native-paper";
import styled from "styled-components";
import ClothType from "./ClothType";
import Heading from "./UI/Heading";
import { WASH_AND_FOLD } from "../constants/strings";
import { CATEGORY_TYPE } from "../constants/enums";
import ViewBox from "./UI/ViewBox";

const ITEMS = [];

const CartCategorySection = ({ title, data }) => {
	return(
		<ViewBox>
			<Box>
				<Heading textTransform="uppercase" textAlign="center">{CATEGORY_TYPE[title]}</Heading>
			</Box>

			{ITEMS.map((item) => {
				return(
					<ClothType data={item} />
				);
			})}
		</ViewBox>
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