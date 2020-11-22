import React from "react";
import { useHistory } from "react-router-dom";

import { usePizzaContext } from "../shared/PizzaContext";

export const OrderButton = () => {
	const { currentPizza, dispatch } = usePizzaContext();
	const history = useHistory();

	const handleButtonClick = () => {
		dispatch({ type: "SHOW_PREVIEW" });
		history.push("/pizza-checkout");
	};

	return (
		<button onClick={handleButtonClick}>
			Заказать за {currentPizza.orderSum} руб.
		</button>
	);
};
