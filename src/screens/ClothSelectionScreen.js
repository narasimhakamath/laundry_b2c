import React from "react";
import ClothListContainer from "../components/ClothListContainer";
import Screen from "../components/Screen";

const ClothSelectionScreen = ({ categoryID, searchQuery }) => {

	return (
		<Screen>
			<ClothListContainer categoryID={categoryID} searchQuery={searchQuery} />
		</Screen>
	);
};

export default ClothSelectionScreen;