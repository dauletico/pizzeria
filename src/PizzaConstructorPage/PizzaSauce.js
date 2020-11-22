import React from "react";
import { InputRef } from "./_InputRef";

import { usePizzaContext } from "../shared/PizzaContext";

const availableSauces = [
	{ id: 0, sauce: "tomato", label: "Томатный", price: 0 },
	{ id: 1, sauce: "bechamel", label: "Белый", price: 0 },
	{ id: 2, sauce: "spicy", label: "Острый", price: 0 },
];

export const PizzaSauce = () => {
	const radiosRef = React.useRef([]);

	const { currentPizza, dispatch } = usePizzaContext();

	const handleSauceChange = () => {
		const sauce = availableSauces.find(
			(sauce) => radiosRef.current[sauce.id].checked
		);
		dispatch({ type: "CHANGE_SAUCE", sauce });
	};

	return (
		<>
			<div>
				<div>Выберите соус</div>
				<div>
					{availableSauces.map((sauceObj) => (
						<InputRef
							key={sauceObj.id}
							ref={(el) => (radiosRef.current[sauceObj.id] = el)}
							label={sauceObj.label}
							type="radio"
							name="sauce"
							value={sauceObj.sauce}
							onChange={handleSauceChange}
							defaultChecked={
								currentPizza.ingredients.sauce[0].sauce ===
								sauceObj.sauce
							}
						/>
					))}
				</div>
			</div>
		</>
	);
};
