import React from "react";
import { Image, View, TouchableOpacity } from "react-native";
import { useNavigation } from '@react-navigation/native';
import { Surface } from 'react-native-paper';

import styled from "styled-components";
import Title from "./UI/Title";
import { Skeleton } from "@rneui/themed";
import Loader from "./Loader";
import ViewBox from "./UI/ViewBox";

const ServiceCard = ({ data }) => {
	const navigation = useNavigation();

	const onPress = () => {
		navigation.navigate('ClothesTab', {serviceID: data?.id});
	};

	return(
		<ViewBox m={4} p={4} justifyContent="center" br={2} color="primary" shadow={true}>
			{/* <Container elevation={5}> */}
				<Touchable onPress={onPress}>
					<ImageBox>
						<CategoryImage source={data.image} />
					</ImageBox>
					<Title color="grey" textTransform="uppercase">{data.name}</Title>
				</Touchable>
			{/* </Container> */}
		</ViewBox>
	);
};

const Touchable = styled(TouchableOpacity)`
	align-items: center;
	justify-content: center;
	padding-left: ${({ theme }) => theme.shape.spacing(3)}px;
	padding-right: ${({ theme }) => theme.shape.spacing(3)}px;
`;

const ImageBox = styled(View)`
	width: ${({ theme }) => theme.shape.spacing(25)}px;
	aspect-ratio: 1;
	align-self: center;
	border-radius: ${({ theme }) => theme.shape.spacing(25)}px;
	justify-content: center;
	align-items: center;
`;

const CategoryImage = styled(Image)`
	width: 80%;
	height: 80%;
`;

export default ServiceCard;