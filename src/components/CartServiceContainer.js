import React from "react";
import ViewBox from "./UI/ViewBox";
import Heading from "./UI/Heading";
import { SERVICE_TYPE } from "../constants/enums";
import CartCategorySection from "./CartCategorySection";

const CartServiceContainer = ({ title, data }) => {
	console.log('data?', data);
	return(
		<ViewBox my={4} mx={5}>
			<ViewBox color="primary" py={2} borderWidth={0.1}>
				<Heading textAlign="center" textTransform="uppercase">{SERVICE_TYPE[title]}</Heading>
			</ViewBox>

			{Object.keys(data).map(category => {
				return(
					<CartCategorySection title={category} data={data[category]} />
				);
			})}
		</ViewBox>
	);
};

export default CartServiceContainer;