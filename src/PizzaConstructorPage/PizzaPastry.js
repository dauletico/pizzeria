import React from "react";
import { InputRef } from "./_InputRef";

import { usePizzaContext } from "../shared/PizzaContext";

const availablePastries = [
	{ id: 0, pastry: "thin", label: "Тонкое", price: 0 },
	{ id: 1, pastry: "thick", label: "Пышное", price: 0 },
];

export const PizzaPastry = () => {
	const radiosRef = React.useRef([]);

	const { currentPizza, dispatch } = usePizzaContext();

	const handlePastryChange = () => {
		const pastry = availablePastries.find(
			(pastry) => radiosRef.current[pastry.id].checked
		);
		dispatch({ type: "CHANGE_PASTRY", pastry });
	};

	return (
		<>
			<div>
				<div>Тесто</div>
				<div>
					{availablePastries.map((pastryObj) => (
						<InputRef
							key={pastryObj.id}
							ref={(el) => (radiosRef.current[pastryObj.id] = el)}
							label={pastryObj.label}
							type="radio"
							name="pastry"
							value={pastryObj.size}
							onChange={handlePastryChange}
							defaultChecked={
								currentPizza.ingredients.pastry[0].pastry ===
								pastryObj.pastry
							}
						/>
					))}
				</div>
			</div>
		</>
	);
};
