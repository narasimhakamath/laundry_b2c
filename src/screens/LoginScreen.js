import React, { useRef } from "react";
import Screen from "../components/Screen";
import styled from "styled-components";
import { Image, View } from "react-native";
import PhoneInput from "react-native-phone-number-input";
import { StyleSheet } from "react-native";
import theme from "../utils/theme";
import Heading from "../components/Heading";
import { LOGIN, SEND_OTP, SUBMIT } from "../constants/strings";
import { Button } from "react-native-paper";
import { useNavigation } from "@react-navigation/native";


const APP_LOGO = require("../assets/logo/16x9.png");

const LoginScreen = () => {
	const navigation = useNavigation();

	const onSubmit = () => {
		navigation.navigate('LoginVerificationScreen');
	};

	return(
		<Screen>
			<LogoBox elevation={4}>
				<Logo source={APP_LOGO} />
			</LogoBox>

			<Container>
				<Box>
					<Heading textTransform="uppercase" textAlign="center">{LOGIN}</Heading>
				</Box>
				<PhoneInput
					defaultValue=""
					defaultCode="IN"
					layout="first"
					withDarkTheme
					withShadow
					autoFocus
					containerStyle={styles.phoneContainer}
					textContainerStyle={styles.phoneTextContainer}
				/>
				<LoginButton
					mode="contained"
					buttonColor={theme.colors.common.dark}
					uppercase={true}
					labelStyle={styles.button}
					onPress={onSubmit}
				>
					{SEND_OTP}
				</LoginButton>
			</Container>
		</Screen>
	);
};

const Box = styled(View)`
	margin-top: ${({ theme }) => theme.shape.spacing(4)}px;
	margin-bottom: ${({ theme }) => theme.shape.spacing(4)}px;
`;

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

const Container = styled(View)`
	align-self: center;
	margin-top: ${({ theme }) => theme.shape.spacing(10)}px;
	margin-bottom: ${({ theme }) => theme.shape.spacing(3)}px;
`;

const LoginButton = styled(Button)`
	margin-top: ${({ theme }) => theme.shape.spacing(5)}px;
	padding-top: ${({ theme }) => theme.shape.spacing(1)}px;
	padding-bottom: ${({ theme }) => theme.shape.spacing(1)}px;
	border-radius: ${({ theme }) => theme.shape.radius(2)}px;
`;

const styles = StyleSheet.create({
	phoneContainer: {
		borderRadius: theme.shape.radius(2),
	},
	phoneTextContainer: {
		borderTopRightRadius: theme.shape.radius(2),
		borderBottomRightRadius: theme.shape.radius(2),
	},
	button: {
		fontFamily: theme.fontFamily,
		fontSize: theme.shape.spacing(4),
	},
});

export default LoginScreen;