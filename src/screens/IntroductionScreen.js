import React from "react";
import Screen from "../components/Screen";
import { Image, StyleSheet, View } from "react-native";
import styled from "styled-components";
import IntroductionSlider from "../components/IntroductionSlider";

const APP_LOGO = require("../assets/logo/16x9.png");

const IntroductionScreen = () => {

	return(
		<Screen>
			<LogoBox elevation={4}>
				<Logo source={APP_LOGO} />
			</LogoBox>
			<IntroductionSlider />
		</Screen>
	);
};

const LogoBox = styled(View)`
	align-self: center;
	margin-top: ${({ theme }) => theme.shape.spacing(10)}px;
`;

const Logo = styled(Image)`
	width: ${({ theme }) => theme.shape.spacing(64)}px;
	height: ${({ theme }) => theme.shape.spacing(36)}px;
	elevation: 5;
	shadow-color: ${({ theme }) => theme.colors.primary.main};
	shadow-offset: {width: 0px; height: 2px};
	shadow-opacity: 0.9;
	shadow-radius: 10px;
`;

export default IntroductionScreen;