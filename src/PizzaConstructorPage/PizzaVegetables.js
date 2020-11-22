import React from "react";
import { InputRef } from "./_InputRef";

import { usePizzaContext } from "../shared/PizzaContext";

const availableVegetables = [
	{ id: 0, vegetable: "tomato", label: "Помидор", price: 29 },
	{ id: 1, vegetable: "mushroom", label: "Грибы", price: 29 },
	{ id: 2, vegetable: "pepper", label: "Перец", price: 29 },
];

export const PizzaVegetables = () => {
	const checkboxesRef = React.useRef([]);

	const { currentPizza, dispatch } = usePizzaContext();

	const handleVegetablesChange = () => {
		const vegetables = availableVegetables.filter(
			(vegetable) => checkboxesRef.current[vegetable.id].checked
		);
		dispatch({ type: "CHANGE_VEGETABLES", vegetables });
	};

	return (
		<>
			<div>
				<div>Добавьте овощи</div>
				<div>
					{availableVegetables.map((vegetableObj) => (
						<InputRef
							key={vegetableObj.id}
							ref={(el) => (checkboxesRef.current[vegetableObj.id] = el)}
							type="checkbox"
							label={vegetableObj.label}
							value={vegetableObj.vegetable}
							onChange={handleVegetablesChange}
							defaultChecked={currentPizza.ingredients.vegetables.some(
								(currVegetableObj) =>
									currVegetableObj.vegetable === vegetableObj.vegetable
							)}
						/>
					))}
				</div>
			</div>
		</>
	);
};
