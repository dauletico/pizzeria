import React from "react";
import { Redirect } from "react-router-dom";

import { usePizzaContext } from "./PizzaContext";

export const PizzaPreview = () => {
	const { currentPizza } = usePizzaContext();

	if (!currentPizza.showPreview) {
		return <Redirect to="/" />;
	}

	return (
		<div>
			<h3>Детали заказа:</h3>
			<p>Размер: {showItemLabel(currentPizza.ingredients.size)}</p>
			<p>Тесто: {showItemLabel(currentPizza.ingredients.pastry)}</p>
			<p>Соус: {showItemLabel(currentPizza.ingredients.sauce)}</p>
			<p>Сыр: {showItemLabel(currentPizza.ingredients.cheese)}</p>
			<p>Овощи: {showItemLabel(currentPizza.ingredients.vegetables)}</p>
			<p>Мясо: {showItemLabel(currentPizza.ingredients.meat)}</p>
			<p>Общая стоимость: {currentPizza.orderSum}</p>
		</div>
	);
};

function showItemLabel(ingredients) {
	return ingredients.map((item) => item.label).join(", ");
}
