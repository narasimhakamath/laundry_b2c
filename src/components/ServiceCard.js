import React from "react";
import { Image, View, TouchableOpacity } from "react-native";
import { useNavigation } from '@react-navigation/native';
import { Surface } from 'react-native-paper';

import Subtitle from "./Subtitle";
import styled from "styled-components";

const ServiceCard = ({ data }) => {
	const navigation = useNavigation();

	const onPress = () => {
		navigation.navigate('ClothesTab', {serviceID: data?.id});
	};

	return(
		<Container mode="elevated" elevation={2}>
			<Touchable onPress={onPress}>
				<ImageBox>
					<CategoryImage source={data.image} />
				</ImageBox>
				<Subtitle>{data.name}</Subtitle>
			</Touchable>
		</Container>
	);
};

const Container = styled(Surface)`
	margin: ${({ theme }) => theme.shape.spacing(3)}px;
	border-radius: ${({ theme }) => theme.shape.radius(2)}px;
	padding: ${({ theme }) => theme.shape.spacing(3)}px;
`;

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