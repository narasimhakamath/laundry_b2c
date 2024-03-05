import React from "react";
import { Text } from "react-native";
import styled from "styled-components";

const Heading = ({ children }) => {
	return(
		<TextField>{children.toUpperCase()}</TextField>
	);
};

const TextField = styled(Text)`
	font-size: 16px;
	font-weight: 600;
`;

export default Heading;