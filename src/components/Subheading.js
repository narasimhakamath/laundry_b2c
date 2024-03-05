import React from "react";
import { Text } from "react-native";

const Subheading = ({ children }) => {
	return(
		<TextField>{children.toUpperCase()}</TextField>
	);
};

const TextField = styled(Text)`
	font-size: 14px;
	font-weight: 500;
`;

export default Subheading;