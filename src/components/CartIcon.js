import React from "react";
import { TouchableOpacity } from "react-native";
import { AntDesign } from '@expo/vector-icons';

import theme from "../utils/theme";

const CartIcon = () => {
	return(
		<Icon>
			<AntDesign
				name="shoppingcart"
				size={24}
				color={theme.colors.common.light}
			/>
		</Icon>
	);
};

const Icon = styled(TouchableOpacity)`
	padding-left: ${({ theme }) => theme.shape.spacing(5)}px;
	padding-right: ${({ theme }) => theme.shape.spacing(5)}px;
`;

export default CartIcon;