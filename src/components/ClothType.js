import React, { useContext} from "react";
import { Image, Text, View } from "react-native";
import QuantityInput from "./QuantityInput";
import { AppContext } from "../contexts/AppContext";
import styled from "styled-components";

const ClothType = ({ data }) => {
	const { onAddQuantity, onReduceQuantity } = useContext(AppContext);

	return(
		<Container>
			<Details>
				<View>
					<ClothImage source={data.image} />
				</View>
				<TitleBox>
					<ClothTitle>{data.title}</ClothTitle>
				</TitleBox>
			</Details>
			<QuantityBox>
				<QuantityInput onAdd={onAddQuantity} onReduce={onReduceQuantity} />
			</QuantityBox>
		</Container>
	);
};

const Container = styled(View)`
	flex-direction: row;
	margin-left: ${({ theme }) => theme.shape.spacing(2)}px;
	margin-right: ${({ theme }) => theme.shape.spacing(2)}px;
	margin-top: ${({ theme }) => theme.shape.spacing(4)}px;
	margin-bottom: ${({ theme }) => theme.shape.spacing(4)}px;
	padding-top: ${({ theme }) => theme.shape.spacing(6)}px;
	padding-bottom: ${({ theme }) => theme.shape.spacing(6)}px;
	padding-left: ${({ theme }) => theme.shape.spacing(4)}px;
	padding-right: ${({ theme }) => theme.shape.spacing(4)}px;
	border: 0.5px;
	border-color: ${({ theme }) => theme.colors.grey.main};
	border-radius: ${({ theme }) => theme.shape.radius(4)}px;
`;

const Details = styled(View)`
	flex: 1;
	align-self: center;
	flex-direction: row;
`;

const TitleBox = styled(View)`
	align-self: center;
	padding-left: ${({ theme }) => theme.shape.spacing(4)}px;
	padding-right: ${({ theme }) => theme.shape.spacing(4)}px;
	flex-direction: row;
`;

const ClothTitle = styled(Text)`
	font-size: 16px;
	font-weight: 400;
`;

const QuantityBox = styled(View)`
	align-self: center;
	margin-left: ${({ theme }) => theme.shape.spacing(3)}px;
	margin-right: ${({ theme }) => theme.shape.spacing(3)}px;
`;

const ClothImage = styled(Image)`
	width: ${({ theme }) => theme.shape.spacing(10)}px;
	height: ${({ theme }) => theme.shape.spacing(10)}px;
`;

export default ClothType;