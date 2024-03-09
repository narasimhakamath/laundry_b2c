import React from "react";
import AppIntroSlider from 'react-native-app-intro-slider';
import { DONE, INTRODUCTION_SLIDER_TEXT1, INTRODUCTION_SLIDER_TEXT2, NEXT, PREVIOUS, SKIP } from "../constants/strings";
import styled from "styled-components";
import { StyleSheet, View } from "react-native";
import LottieView from "lottie-react-native";
import Subheading from "./UI/Subheading";
import theme from "../utils/theme";
import { useNavigation } from "@react-navigation/native";
import Button from "./UI/Button";

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
			<Button textTransform="uppercase">
				{DONE}
			</Button>
		);
	};

	const _renderNextButton = () => {
		return(
			<Button textTransform="uppercase">
				{NEXT}
			</Button>
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
	sliderInactiveDot: {
		backgroundColor: theme.colors.grey.ultralight,
	},
	sliderActiveDot: {
		backgroundColor: theme.colors.common.dark
	}
});

export default IntroductionSlider;