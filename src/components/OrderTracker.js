import React from "react";
import StepIndicator from 'react-native-step-indicator';
import theme from "../utils/theme";

import { PICK_UP, RECEIVED, IN_PROGRESS, DISPATCHED, ON_THE_WAY } from "../constants/strings";

const OrderTracker = ({ statusID }) => {
	const labels = [PICK_UP, RECEIVED, IN_PROGRESS, DISPATCHED, ON_THE_WAY];
	const customStyles = {
		stepIndicatorSize: 25,
		currentStepIndicatorSize: 30,
		separatorStrokeWidth: 2,
		currentStepStrokeWidth: 2,
		stepStrokeCurrentColor: theme.colors.success.main,
		stepStrokeWidth: 3,
		stepStrokeFinishedColor: theme.colors.success.main,
		stepStrokeUnFinishedColor: theme.colors.error.main,
		separatorFinishedColor: theme.colors.success.main,
		separatorUnFinishedColor: theme.colors.error.main,
		stepIndicatorFinishedColor: theme.colors.success.main,
		stepIndicatorUnFinishedColor: theme.colors.error.main,
		stepIndicatorCurrentColor: theme.colors.common.light,
		stepIndicatorLabelFontSize: 12,
		currentStepIndicatorLabelFontSize: 12,
		stepIndicatorLabelCurrentColor: theme.colors.common.light,
		stepIndicatorLabelFinishedColor: theme.colors.success.main,
		stepIndicatorLabelUnFinishedColor: theme.colors.error.main,
		labelColor: theme.colors.grey.light,
		labelSize: 12,
		currentStepLabelColor: theme.colors.success.main
	}

	return(
		<StepIndicator
			customStyles={customStyles}
			currentPosition={statusID}
			labels={labels}
			stepCount={5}
		/>
	);
};

export default OrderTracker;