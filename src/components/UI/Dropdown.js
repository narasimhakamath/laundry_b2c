import React from "react";
import { Dropdown as RNEDropdown } from 'react-native-element-dropdown';
import theme from "../../utils/theme";

const Dropdown = ({ data, onChange, placeholder, value }) => {
	return(
		<RNEDropdown
			data={data}
			labelField="label"
			valueField="value"
			onChange={onChange}
			numberOfLines={1}
			fontFamily={theme.fontFamily}
			autoScroll={true}
			showsVerticalScrollIndicator={false}
			placeholder={placeholder}
			value={value}
		/>
	);
};

export default Dropdown;