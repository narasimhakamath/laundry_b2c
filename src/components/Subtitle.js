import React from "react";
import { Text } from "react-native";
import styled from "styled-components";

const Subtitle = ({ children }) => {
	return(
		<TextField>{children.toUpperCase()}</TextField>
	);
};

const TextField = styled(Text)`
	font-size: 12px;
	font-weight: 400;
`;

export default Subtitle;