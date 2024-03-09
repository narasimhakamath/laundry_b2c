import React, { useRef } from "react";
import Screen from "../components/Screen";
import styled from "styled-components";
import { Image, View } from "react-native";
import PhoneInput from "react-native-phone-number-input";
import { StyleSheet } from "react-native";
import theme from "../utils/theme";
import Heading from "../components/Heading";
import { ENTER_OTP, LOGIN, RESEND, SUBMIT, VERIFY, VERIFY_OTP } from "../constants/strings";
import { TextInput } from "react-native-paper";
import Button from "../components/UI/Button";


const APP_LOGO = require("../assets/logo/16x9.png");

const LoginVerificationScreen = () => {

	const onSubmit = () => {
	};

	const resendOTP = () => {

	};

	return(
		<Screen>
			<LogoBox elevation={4}>
				<Logo source={APP_LOGO} />
			</LogoBox>

			<Container>
				<Box>
					<Heading textTransform="uppercase" textAlign="center">{VERIFY_OTP}</Heading>
				</Box>
				<TextInput
					mode="outlined"
					placeholder={ENTER_OTP}
					style={styles.inputOTP}
					keyboardType="phone-pad"
					maxLength={6}
				/>
				
				<Button textTransform="uppercase" onPress={onSubmit}>{VERIFY}</Button>
				<Button type="secondary" textTransform="uppercase" onPress={resendOTP}>{RESEND}</Button>

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

const styles = StyleSheet.create({
	inputOTP: {
		backgroundColor: theme.colors.backgroundColor.light,
		width: theme.shape.spacing(60)
	}
});

export default LoginVerificationScreen;