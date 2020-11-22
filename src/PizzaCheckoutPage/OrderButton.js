import React from "react";
import { useHistory } from "react-router-dom";

import { usePizzaContext } from "../shared/PizzaContext";

export const OrderButton = () => {
	const { currentPizza } = usePizzaContext();
	const history = useHistory();

	const handleButtonClick = () => {
		history.push("/pizza-receipt");
	};

	return (
		<button onClick={handleButtonClick}>
			Оплатить {currentPizza.orderSum} руб.
		</button>
	);
};
