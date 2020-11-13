import React from "react";

import { usePizzaContext } from "./PizzaContext";

export const OrderButton = () => {
	const { currentPizza } = usePizzaContext();
	return <button>Заказать {currentPizza.orderSum}</button>;
};
