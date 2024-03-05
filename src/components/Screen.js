import React from "react";
import { SafeAreaView } from "react-native";
import styled from "styled-components";

const Screen = ({ children }) => {
	return(
		<View>{children}</View>
	);
};

const View = styled(SafeAreaView)`
	flex: 1;
	background-color: ${({  theme }) => theme.colors.backgroundColor.default};
`;

export default Screen;