import React, { useState, createContext } from "react";

const defaultValues = {

};

export const AppContext = createContext(defaultValues);

const AppContextProvider = ({ children }) => {
	const [totalQuantity, setTotalQuantity] = useState(0);

	const [cartItems, setCartItems] = useState({});

	const addCartItem = (service, category, clothID) => {
		setCartItems(prevState => {
			const updatedState = {...prevState};
			if(!updatedState[service])
				updatedState[service] = {};
			if(!updatedState[service][category])
				updatedState[service][category] = {};
			updatedState[service][category][clothID] = (updatedState[service][category][clothID] || 0) + 1;
			return updatedState;
		});
	};

	const reduceCartItem = (service, category, clothID) => {
		setCartItems(prevState => {
			const updatedState = {...prevState};
			if(!updatedState[service])
				updatedState[service] = {};
			if(!updatedState[service][category])
				updatedState[service][category] = {};
			updatedState[service][category][clothID] = (updatedState[service][category][clothID] || 0) - 1;
			if(updatedState[service][category][clothID] === 0)
				delete updatedState[service][category][clothID];
			return updatedState;
		});
	};

	const getTotalItemsInCart = () => {
		let totalQuantity = 0;

		for(let service in cartItems) {
			for(let category in cartItems[service]) {
				for(let clothID in cartItems[service][category]) {
					totalQuantity += cartItems[service][category][clothID];
				}
			}
		}

		return totalQuantity;
	};

	const CONTEXT = {
		addCartItem,
		reduceCartItem,
		getTotalItemsInCart,
		cartItems,
	};

	return(
		<AppContext.Provider value={CONTEXT}>
			{children}
		</AppContext.Provider>
	);
};

export default AppContextProvider;