import React from "react";
import { Text } from "react-native";
import styled from "styled-components";

const getColor = (theme, color) => {
	if(color === "primary") {
		return theme.colors.primary.main;
	} else if(color === "grey") {
		return theme.colors.grey.main;
	} else if(color === "warning") {
		return theme.colors.warning.main;
	} else if(color === "error") {
		return theme.colors.error.main;
	} else if(color === "info") {
		return theme.colors.info.main;
	} else if(color === "success") {
		return theme.colors.success.main;
	}

	return theme.colors.common.dark;
};

const Subheading = ({ children, ...props }) => {
	return(
		<TextField {...props}>{children}</TextField>
	);
};

const TextField = styled(Text)`
	font-size: ${({ theme }) => theme.shape.spacing(4)}px;
	font-family: ${({ theme }) => theme.fontFamily};
	color: ${({ theme, color }) => getColor(theme, color)};
	text-transform: ${({ theme, textTransform}) => textTransform || 'none'};
	text-align: ${({ textAlign }) => textAlign ? textAlign : 'left'};
`;

export default Subheading;