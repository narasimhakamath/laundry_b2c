import React from "react";
import { AntDesign } from '@expo/vector-icons';

import theme from "../utils/theme";
import { StyleSheet, TouchableOpacity, View } from "react-native";

const CartIcon = () => {
	return(
		<TouchableOpacity style={styles.icon}>
			<AntDesign
				name="shoppingcart"
				size={24}
				color={theme.common.light}
			/>
		</TouchableOpacity>
	);
};

const styles = StyleSheet.create({
	icon: {
		paddingHorizontal: 20,
	},
});

export default CartIcon;