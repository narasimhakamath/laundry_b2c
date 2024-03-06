import React from "react";
import AppIntroSlider from 'react-native-app-intro-slider';
import { DONE, INTRODUCTION_SLIDER_TEXT1, INTRODUCTION_SLIDER_TEXT2, NEXT, PREVIOUS, SKIP } from "../constants/strings";
import styled from "styled-components";
import { StyleSheet, View } from "react-native";
import LottieView from "lottie-react-native";
import { Button } from "react-native-paper";
import Subheading from "./Subheading";
import theme from "../utils/theme";
import { useNavigation } from "@react-navigation/native";

const IntroductionSlider = () => {
	const navigation = useNavigation();

	const slides = [
		{
			key: 1,
			text: INTRODUCTION_SLIDER_TEXT1,
			animation: require('../assets/lotties/Ironing.json'),
		},
		{
			key: 2,
			text: INTRODUCTION_SLIDER_TEXT2,
			animation: require('../assets/lotties/LaundryDelivery.json'),
		},
	];

	const _renderItem = ({ item }) => {
		return(
			<Container>
				<AnimationView
					autoPlay={true}
					source={item.animation}
				/>
				<TextContainer>
					<Subheading textAlign="center">{item.text}</Subheading>
				</TextContainer>
			</Container>
		);
	};

	const _onDone = () => {
		navigation.navigate('LoginScreen');
	};

	const _renderDoneButton = () => {
		return(
			<ContainedButton
				mode="contained"
				buttonColor={theme.colors.common.dark}
				uppercase={true}
				labelStyle={styles.containedButton}
			>
				{DONE}
			</ContainedButton>
		);
	};

	const _renderNextButton = () => {
		return(
			<ContainedButton
				mode="contained"
				buttonColor={theme.colors.common.dark}
				uppercase={true}
				labelStyle={styles.containedButton}
			>
				{NEXT}
			</ContainedButton>
		);
	};

	const _renderPreviousButton = () => {
		return(
			<TextButton
				mode="text"
				uppercase={true}
				labelStyle={styles.buttonLabel}
			>
				{PREVIOUS}
			</TextButton>
		);
	};

	const _renderSkipButton = () => {
		return(
			<TextButton
				mode="text"
				uppercase={true}
				labelStyle={styles.buttonLabel}
			>
				{SKIP}
			</TextButton>
		);
	};

	return(
		<AppIntroSlider
			data={slides}
			renderItem={_renderItem}
			onDone={_onDone}
			bottomButton={true}
			dotStyle={styles.sliderInactiveDot}
			activeDotStyle={styles.sliderActiveDot}
			renderDoneButton={_renderDoneButton}
			renderNextButton={_renderNextButton}
		/>
	);
};

const ContainedButton = styled(Button)`
	padding-top: ${({ theme }) => theme.shape.spacing(1)}px;
	padding-bottom: ${({ theme }) => theme.shape.spacing(1)}px;
	border-radius: ${({ theme }) => theme.shape.radius(2)}px;
`;

const TextButton = styled(Button)`

`;

const Container = styled(View)`
	flex: 1;
`;

const TextContainer = styled(View)`
	flex: 1;
`;

const AnimationView = styled(LottieView)`
	flex: 2;
	width: ${({ theme }) => theme.shape.spacing(70)}px;
	height: ${({ theme }) => theme.shape.spacing(70)}px;
	align-self: center;
`;

const styles = StyleSheet.create({
	buttonLabel: {
		fontFamily: theme.fontFamily,
		fontSize: theme.shape.spacing(4),
		color: theme.colors.grey.main
	},
	containedButton: {
		fontFamily: theme.fontFamily,
		fontSize: theme.shape.spacing(4),
	},
	sliderInactiveDot: {
		backgroundColor: theme.colors.grey.ultralight,
	},
	sliderActiveDot: {
		backgroundColor: theme.colors.common.dark
	}
});

export default IntroductionSlider;