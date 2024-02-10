import React, { useState, useContext } from "react";
import { StyleSheet, TextInput, TouchableOpacity, View } from "react-native";
import { AntDesign } from '@expo/vector-icons';

import { AppContext } from "../contexts/AppContext";
import theme from "../utils/theme";

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
		<View style={styles.container}>
			<TouchableOpacity style={styles.button} onPress={onReduceQuantity}>
				<AntDesign name="minussquare" size={30} color={theme.primary.main} />
			</TouchableOpacity>

			<TextInput
				style={styles.inputField}
				value={quantity.toString()}
				keyboardType="numeric"
				inputMode="numeric"
				textAlign="center"
				onChangeText={onChangeText}
				caretHidden={true}
			/>

			<TouchableOpacity style={styles.button} onPress={onAddQuantity}>
				<AntDesign name="plussquare" size={30} color={theme.primary.main} />
			</TouchableOpacity>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		flexDirection: 'row',
	},
	button: {
		alignSelf: 'center',
		borderRadius: 40,
	},
	inputField: {
		width: 40,
		fontSize: 18,
		fontWeight: '300',
	}
});

export default QuantityInput;