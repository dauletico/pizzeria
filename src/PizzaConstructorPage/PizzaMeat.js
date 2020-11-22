import React from "react";
import { InputRef } from "./_InputRef";

import { usePizzaContext } from "../shared/PizzaContext";

const availableMeat = [
	{ id: 0, meat: "bacon", label: "Бекон", price: 29 },
	{ id: 1, meat: "pepperoni", label: "Пепперони", price: 29 },
	{ id: 2, meat: "ham", label: "Ветчина", price: 29 },
];

export const PizzaMeat = () => {
	const checkboxesRef = React.useRef([]);

	const { currentPizza, dispatch } = usePizzaContext();

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
						<InputRef
							key={meatObj.id}
							ref={(el) => (checkboxesRef.current[meatObj.id] = el)}
							type="checkbox"
							label={meatObj.label}
							value={meatObj.meat}
							onChange={handleMeatChange}
							defaultChecked={currentPizza.ingredients.meat.some(
								(currMeatObj) => currMeatObj.meat === meatObj.meat
							)}
						/>
					))}
				</div>
			</div>
		</>
	);
};
