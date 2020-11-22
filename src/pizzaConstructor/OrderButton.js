import React from "react";

import { usePizzaContext } from "./PizzaContext";

export const OrderButton = () => {
	const { currentPizza, dispatch } = usePizzaContext();

	const handleButtonClick = () => {
		dispatch({ type: "SHOW_ORDER_DETAILS" });
	};

	return (
		<button onClick={handleButtonClick}>
			Заказать за {currentPizza.orderSum} руб.
		</button>
	);
};
