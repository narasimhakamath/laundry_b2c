import React from "react";
import Screen from "../components/Screen";
import { Image, View } from "react-native";
import { Button, TextInput } from "react-native-paper";
import styled from "styled-components";
import { ADDRESS, COMPLETE_YOUR_PROFILE, NAME, SUBMIT } from "../constants/strings";
import Subheading from "../components/Subheading";
import Subtitle from "../components/Subtitle";
import theme from "../utils/theme";
import { StyleSheet } from "react-native";

const APP_LOGO = require("../assets/logo/16x9.png");

const ProfileScreen = () => {

	const onSubmit = () => {

	};

	return(
		<Screen>
			<Container>
				<LogoBox elevation={4}>
					<Logo source={APP_LOGO} />
				</LogoBox>

				<Box>
					<Subheading textTransform="uppercase" textAlign="center">{COMPLETE_YOUR_PROFILE}</Subheading>
				</Box>

				<Subtitle textTransform="uppercase">{NAME}</Subtitle>
				<Input
					placeholder={NAME}
					mode="outlined"
				/>

				<Subtitle textTransform="uppercase">{ADDRESS}</Subtitle>
				<Input
					placeholder={ADDRESS}
					multiline={true}
					mode="outlined"
				/>

				<SubmitButton
					mode="contained"
					buttonColor={theme.colors.common.dark}
					uppercase={true}
					onPress={onSubmit}
					labelStyle={styles.button}
				>
					{SUBMIT}
				</SubmitButton>
			</Container>
		</Screen>
	);
};

const SubmitButton = styled(Button)`
	margin-top: ${({ theme }) => theme.shape.spacing(5)}px;
	padding-top: ${({ theme }) => theme.shape.spacing(1)}px;
	padding-bottom: ${({ theme }) => theme.shape.spacing(1)}px;
	border-radius: ${({ theme }) => theme.shape.radius(2)}px;
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

const Box = styled(View)`
	margin-top: ${({ theme }) => theme.shape.spacing(5)}px;
	margin-bottom: ${({ theme }) => theme.shape.spacing(5)}px;
`;

const Input = styled(TextInput)`
	margin-top: ${({ theme }) => theme.shape.spacing(3)}px;
	margin-bottom: ${({ theme }) => theme.shape.spacing(6)}px;
`;

const Container = styled(View)`
	margin-top: ${({ theme }) => theme.shape.spacing(5)}px;
	margin-left: ${({ theme }) => theme.shape.spacing(5)}px;
	margin-right: ${({ theme }) => theme.shape.spacing(5)}px;
`;

const styles = StyleSheet.create({
	button: {
		fontFamily: theme.fontFamily,
		fontSize: theme.shape.spacing(4),
	}
})

export default ProfileScreen;