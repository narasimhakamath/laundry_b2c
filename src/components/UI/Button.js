import React from "react";
import { Text, TouchableOpacity } from "react-native";
import styled from "styled-components";

const Button = ({ children, type, onPress, textTransform }) => {
	return(
		<TouchableComponent onPress={onPress} type={type} activeOpacity={0.7}>
			<Title textTransform={textTransform} type={type}>{children}</Title>
		</TouchableComponent>
	);
};

const getBackgroundColor = (theme, type) => {
	const color = {
		primary: theme.colors.common.dark,
		secondary: 'transparent',
	};

	return color[type] || color.primary;
};

const getTextColor = (theme, type) => {
	const color = {
		primary: theme.colors.common.light,
		secondary: theme.colors.error.main
	};

	return color[type] || color.primary;
};

const TouchableComponent = styled(TouchableOpacity)`
	background-color: ${({ theme, type }) =>  getBackgroundColor(theme, type)};
	padding-top: ${({ theme }) => theme.shape.spacing(4)}px;
	padding-bottom: ${({ theme }) => theme.shape.spacing(4)}px;
	border-radius: ${({ theme }) => theme.shape.radius(2)}px;
	width: 100%;
`;

const Title = styled(Text)`
	color: ${({ theme, type }) => getTextColor(theme, type)};
	text-align: center;
	font-family: ${({ theme }) => theme.fontFamily};
	text-transform: ${({ textTransform }) => textTransform || 'none'};
	font-size: ${({ theme }) => theme.shape.spacing(4)}px;
`;

export default Button;