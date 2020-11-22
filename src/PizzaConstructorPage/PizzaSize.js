import React from "react";
import { InputRef } from "./_InputRef";

import { usePizzaContext } from "../shared/PizzaContext";

const availableSizes = [
	{ id: 0, size: 30, label: "30 cm", price: 200 },
	{ id: 1, size: 35, label: "35 cm", price: 250 },
];

export const PizzaSize = () => {
	const radiosRef = React.useRef([]);

	const { currentPizza, dispatch } = usePizzaContext();

	const handleSizeChange = () => {
		const size = availableSizes.find(
			(size) => radiosRef.current[size.id].checked
		);
		dispatch({ type: "CHANGE_SIZE", size });
	};

	return (
		<>
			<div>
				<div>Размер</div>
				<div>
					{availableSizes.map((sizeObj) => (
						<InputRef
							key={sizeObj.id}
							ref={(el) => (radiosRef.current[sizeObj.id] = el)}
							label={sizeObj.label}
							type="radio"
							name="size"
							value={sizeObj.size}
							onChange={handleSizeChange}
							defaultChecked={
								currentPizza.ingredients.size[0].size === sizeObj.size
							}
						/>
					))}
				</div>
			</div>
		</>
	);
};
