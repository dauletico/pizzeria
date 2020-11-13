import React from "react";

import { usePizzaContext } from "./PizzaContext";

const availableVegetables = [
	{ id: 0, vegetable: "tomato", label: "Помидор", price: 29 },
	{ id: 1, vegetable: "mushroom", label: "Грибы", price: 29 },
	{ id: 2, vegetable: "pepper", label: "Перец", price: 29 },
];

const Checkbox = React.forwardRef(({ label, onChange, ...props }, ref) => {
	return (
		<label>
			<input ref={ref} type="checkbox" onChange={onChange} {...props} />
			{label}
		</label>
	);
});

export const PizzaVegetables = () => {
	const checkboxesRef = React.useRef([]);

	const { dispatch } = usePizzaContext();

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
						<Checkbox
							key={vegetableObj.id}
							ref={(el) => (checkboxesRef.current[vegetableObj.id] = el)}
							label={vegetableObj.label}
							value={vegetableObj.vegetable}
							onChange={handleVegetablesChange}
						/>
					))}
				</div>
			</div>
		</>
	);
};
