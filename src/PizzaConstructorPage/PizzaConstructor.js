import React from "react";
import { PizzaSize } from "./PizzaSize";
import { PizzaPastry } from "./PizzaPastry";
import { PizzaSauce } from "./PizzaSauce";
import { PizzaCheese } from "./PizzaCheese";
import { PizzaVegetables } from "./PizzaVegetables";
import { PizzaMeat } from "./PizzaMeat";
import { OrderButton } from "./OrderButton";
import { PizzaForm } from "./PizzaForm";

export const PizzaConstructor = () => {
	const onSubmit = () => {};
	return (
		<>
			<PizzaForm onSubmit={onSubmit}>
				<PizzaSize />
				<PizzaPastry />
				<PizzaSauce />
				<PizzaCheese />
				<PizzaVegetables />
				<PizzaMeat />
			</PizzaForm>
		</>
	);
};
