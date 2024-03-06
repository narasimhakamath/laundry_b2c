import React, { useState, useContext } from "react";
import { TextInput, TouchableOpacity, View } from "react-native";
import { AntDesign } from '@expo/vector-icons';

import { AppContext } from "../contexts/AppContext";
import theme from "../utils/theme";
import styled from "styled-components";

const QuantityInput = () => {
	const { addQuantity, reduceQuantity } = useContext(AppContext);

	const [quantity, setQuantity] = useState('0');

	const onAddQuantity = () => {
		setQuantity((Number(quantity) + 1).toString());
		addQuantity(prevQuantity => prevQuantity + 1);
	};

	const onReduceQuantity = () => {
		const updatedQuantity = Number(quantity) - 1;
		if(updatedQuantity < 0)
			return setQuantity('0');
		setQuantity((Number(quantity) - 1).toString());
		reduceQuantity(prevQuantity => prevQuantity - 1);
	};

	const onChangeText = (text) => {
		if(!isNaN(text) && !isNaN(parseInt(text))) {
			setQuantity(parseInt(text))
		} else if (text  === "") {
			setQuantity('0')
		}
	};

	return(
		<Container>
			<Touchable onPress={onReduceQuantity}>
				<AntDesign name="minuscircle" size={24} color={theme.colors.common.dark} />
			</Touchable>

			<Input
				value={quantity.toString()}
				keyboardType="numeric"
				inputMode="numeric"
				textAlign="center"
				onChangeText={onChangeText}
				caretHidden={true}
			/>

			<Touchable onPress={onAddQuantity}>
				<AntDesign name="pluscircle" size={24} color={theme.colors.common.dark} />
			</Touchable>
		</Container>
	);
};

const Container = styled(View)`
	flex-direction: row;
`;

const Touchable = styled(TouchableOpacity)`
	align-self: center;
	border-radius: ${({ theme }) => theme.shape.radius(10)}px;
`;

const Input = styled(TextInput)`
	width: ${({ theme }) => theme.shape.spacing(10)}px;
	font-size: 18px;
	font-weight: 300;

`;

export default QuantityInput;