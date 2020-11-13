import React from "react";

import { usePizzaContext } from "./PizzaContext";

const availableCheese = [
	{ id: 0, sauce: "mozarella", label: "Моцарелла", price: 29 },
	{ id: 1, sauce: "cheddar", label: "Чеддер", price: 29 },
	{ id: 2, sauce: "dorblu", label: "Дор Блю", price: 29 },
];

const Checkbox = React.forwardRef(({ label, onChange, ...props }, ref) => {
	return (
		<label>
			<input ref={ref} type="checkbox" onChange={onChange} {...props} />
			{label}
		</label>
	);
});

export const PizzaCheese = () => {
	const checkboxesRef = React.useRef([]);

	const { dispatch } = usePizzaContext();

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
						<Checkbox
							key={cheeseObj.id}
							ref={(el) => (checkboxesRef.current[cheeseObj.id] = el)}
							label={cheeseObj.label}
							value={cheeseObj.cheese}
							onChange={handleCheeseChange}
						/>
					))}
				</div>
			</div>
		</>
	);
};
