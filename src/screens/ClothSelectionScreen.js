import React from "react";
import ClothListContainer from "../components/ClothListContainer";
import Screen from "../components/UI/Screen";

const ClothSelectionScreen = ({ data, service, category, searchQuery }) => {

	return (
		<Screen>
			<ClothListContainer data={data} service={service} category={category} searchQuery={searchQuery} />
		</Screen>
	);
};

export default ClothSelectionScreen;