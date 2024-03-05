import React from "react";
import ClothListContainer from "../components/ClothListContainer";
import Screen from "../components/Screen";

const ClothSelectionScreen = ({ route }) => {
	const categoryID = route.params.categoryID;

	return (
		<Screen>
			<ClothListContainer categoryID={categoryID} />
		</Screen>
	);
};

export default ClothSelectionScreen;