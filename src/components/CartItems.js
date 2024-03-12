import React, { useContext } from "react";
import ViewBox from "./UI/ViewBox";
import { Text } from "react-native-paper";
import { AppContext } from "../contexts/AppContext";
import CartCategorySection from "./CartCategorySection";
import CartServiceContainer from "./CartServiceContainer";

const CartItems = () => {
	const { cartItems } = useContext(AppContext);

	console.log('cartItems?', cartItems);

	if(!(Object.keys(cartItems).length))
		return null;

	return(
		<ViewBox>
			{Object.keys(cartItems).map(cartItem => {
				console.log('cartItem?', cartItem);
				return(
					<CartServiceContainer title={cartItem} data={cartItems[cartItem]} />
				);
			})}
		</ViewBox>
	);
};

export default CartItems;