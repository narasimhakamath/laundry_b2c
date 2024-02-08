import React, { useState, createContext } from "react";

const defaultValues = {

};

export const AppContext = createContext(defaultValues);

const AppContextProvider = ({ children }) => {
	const [totalQuantity, setTotalQuantity] = useState(0);
	console.log('totalQuantity', totalQuantity);

	const addQuantity = () => {
		setTotalQuantity(totalQuantity + 1);
	};

	const reduceQuantity = () => {
		setTotalQuantity(totalQuantity - 1);
	};

	const CONTEXT = {
		totalQuantity,
		addQuantity,
		reduceQuantity,
	};

	return(
		<AppContext.Provider value={CONTEXT}>
			{children}
		</AppContext.Provider>
	);
};

export default AppContextProvider;