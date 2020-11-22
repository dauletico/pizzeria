import React from "react";
import { InputRef } from "./_InputRef";

import { usePizzaContext } from "../shared/PizzaContext";

const availableCheese = [
	{ id: 0, cheese: "mozarella", label: "Моцарелла", price: 29 },
	{ id: 1, cheese: "cheddar", label: "Чеддер", price: 29 },
	{ id: 2, cheese: "dorblu", label: "Дор Блю", price: 29 },
];

export const PizzaCheese = () => {
	const checkboxesRef = React.useRef([]);

	const { currentPizza, dispatch } = usePizzaContext();

	const handleCheeseChange = () => {
		const cheese = availableCheese.filter(
			(cheese) => checkboxesRef.current[cheese.id].checked
		);
		dispatch({ type: "CHANGE_CHEESE", cheese });
	};

	return (
		<>
			<div>
				<div>Добавьте сыр</div>
				<div>
					{availableCheese.map((cheeseObj) => (
						<InputRef
							key={cheeseObj.id}
							ref={(el) => (checkboxesRef.current[cheeseObj.id] = el)}
							type="checkbox"
							label={cheeseObj.label}
							value={cheeseObj.cheese}
							onChange={handleCheeseChange}
							defaultChecked={currentPizza.ingredients.cheese.some(
								(currCheeseObj) =>
									currCheeseObj.cheese === cheeseObj.cheese
							)}
						/>
					))}
				</div>
			</div>
		</>
	);
};
