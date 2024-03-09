import React from "react";
import { View } from "react-native";
import styled from "styled-components";

const ViewBox = ({ children, ...props }) => {
	return(
		<Container {...props}>
			{children}
		</Container>
	);
};

const Container = styled(View)`
	flex-wrap: ${({ flexWrap }) => flexWrap};
	align-items: ${({ alignItems }) => alignItems};
	flex-direction: ${({ flexDirection }) => flexDirection};
	justify-content: ${({ justifyContent }) => justifyContent};
	padding: ${({ p }) => p || 0}px;
	padding-top: ${({ pt, py, p }) => pt || py || p || 0}px;
	padding-bottom: ${({ pb, py, p }) => pb || py || p || 0}px;
	padding-left: ${({ pl, px, p }) => pl || px || p || 0}px;
	padding-right: ${({ pr, px, p }) => pr || px || p || 0}px;
	margin: ${({ m }) => m || 0}px;
	margin-top: ${({ mt, my, m }) => mt || my || m || 0}px;
	margin-bottom: ${({ mb, my, m }) => mb || my || m || 0}px;
	margin-left: ${({ ml, mx, m }) => ml || mx || m || 0}px;
	margin-right: ${({ mr, mx, m }) => mr || mx || m || 0}px;
	background-color: ${({ color }) => color || 'transparent'};
`;

export default ViewBox;
