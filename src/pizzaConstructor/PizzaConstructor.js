import React from "react";
import { PizzaSize } from "./PizzaSize";
import { PizzaPastry } from "./PizzaPastry";
import { PizzaSauce } from "./PizzaSauce";
import { PizzaCheese } from "./PizzaCheese";
import { PizzaVegetables } from "./PizzaVegetables";
import { PizzaMeat } from "./PizzaMeat";
import { OrderButton } from "./OrderButton";

import { PizzaProvider } from "./PizzaContext";

export const PizzaConstructor = () => {
	return (
		<PizzaProvider>
			<div>
				<PizzaSize />
				<PizzaPastry />
			</div>
			<PizzaSauce />
			<PizzaCheese />
			<PizzaVegetables />
			<PizzaMeat />
			<div>
				<OrderButton />
			</div>
		</PizzaProvider>
	);
};
