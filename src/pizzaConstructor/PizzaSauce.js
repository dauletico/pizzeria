import React from "react";

import { usePizzaContext } from "./PizzaContext";

const availableSauces = [
	{ id: 0, sauce: "tomato", label: "Томатный", price: 0 },
	{ id: 1, sauce: "bechamel", label: "Белый", price: 0 },
	{ id: 2, sauce: "spicy", label: "Острый", price: 0 },
];

const Radio = React.forwardRef(({ label, name, onChange, ...props }, ref) => {
	return (
		<label>
			<input
				ref={ref}
				type="radio"
				name={name}
				onChange={onChange}
				{...props}
			/>
			{label}
		</label>
	);
});

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
						<Radio
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
