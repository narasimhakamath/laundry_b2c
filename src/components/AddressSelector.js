import React, { useState } from "react";
import ViewBox from "./UI/ViewBox";
import styled from "styled-components";
import { Text } from "react-native";
import Dropdown from "./UI/Dropdown";
import Subheading from "./UI/Subheading";
import { ADDRESS, DELIVERY_ADDRESS, SELECTED_ADDRESS, SELECT_ADDRESS } from "../constants/strings";
import Muted from "./UI/Muted";

const DUMMY_ADDRESSES = [
	{label: 'Tejus', value: 1},
	{label: 'B102, Srinivasa Classic', value: 2},
];

const AddressSelector = () => {
	const [selectedAddress, setSelectedAddress] = useState(null);

	const onSelectAddress = (selected) => {
		setSelectedAddress(selected?.value);
	}

	return(
		<ViewBox color="primary" mx={4} mt={3} p={2} px={4} br={2} borderWidth={0.1}>
			<Muted textTransform="uppercase">{ADDRESS}</Muted>
			<Dropdown
				data={DUMMY_ADDRESSES}
				onChange={onSelectAddress}
				placeholder={SELECT_ADDRESS}
				value={selectedAddress}
			/>
		</ViewBox>
	);
};

export default AddressSelector;