import React from "react";
import { StyleSheet, Text } from "react-native";
import { Dropdown as RNEDropdown } from 'react-native-element-dropdown';
import styled from "styled-components";
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

const styles = StyleSheet.create({
	container: {
		backgroundColor: theme.colors.backgroundColor.default
	}
});


export default Dropdown;