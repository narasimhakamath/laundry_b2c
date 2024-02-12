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
		stepStrokeCurrentColor: theme.success.main,
		stepStrokeWidth: 3,
		stepStrokeFinishedColor: theme.success.main,
		stepStrokeUnFinishedColor: theme.error.main,
		separatorFinishedColor: theme.success.main,
		separatorUnFinishedColor: theme.error.main,
		stepIndicatorFinishedColor: theme.success.main,
		stepIndicatorUnFinishedColor: theme.error.main,
		stepIndicatorCurrentColor: theme.common.light,
		stepIndicatorLabelFontSize: 12,
		currentStepIndicatorLabelFontSize: 12,
		stepIndicatorLabelCurrentColor: theme.common.light,
		stepIndicatorLabelFinishedColor: theme.success.main,
		stepIndicatorLabelUnFinishedColor: theme.error.main,
		labelColor: theme.grey.light,
		labelSize: 12,
		currentStepLabelColor: theme.success.main
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