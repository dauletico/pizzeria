import React from "react";

import { usePizzaContext } from "./PizzaContext";

const availableMeat = [
	{ id: 0, meat: "bacon", label: "Бекон", price: 29 },
	{ id: 1, meat: "pepperoni", label: "Пепперони", price: 29 },
	{ id: 2, meat: "ham", label: "Ветчина", price: 29 },
];

const Checkbox = React.forwardRef(({ label, onChange, ...props }, ref) => {
	return (
		<label>
			<input ref={ref} type="checkbox" onChange={onChange} {...props} />
			{label}
		</label>
	);
});

export const PizzaMeat = () => {
	const checkboxesRef = React.useRef([]);

	const { dispatch } = usePizzaContext();

	const handleMeatChange = () => {
		const meat = availableMeat.filter(
			(meat) => checkboxesRef.current[meat.id].checked
		);
		dispatch({ type: "CHANGE_MEAT", meat });
	};

	return (
		<>
			<div>
				<div>Добавьте мясо</div>
				<div>
					{availableMeat.map((meatObj) => (
						<Checkbox
							key={meatObj.id}
							ref={(el) => (checkboxesRef.current[meatObj.id] = el)}
							label={meatObj.label}
							value={meatObj.meat}
							onChange={handleMeatChange}
						/>
					))}
				</div>
			</div>
		</>
	);
};
