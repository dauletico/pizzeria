import React, { useEffect } from "react";

import { usePizzaContext } from "../shared/PizzaContext";
import { pizzaData } from "../shared/pizzaData";

const availableSizes = pizzaData.size;

export const PizzaSize = ({ register, watch, ...rest }) => {
	const { currentPizza, dispatch } = usePizzaContext();

	const size = watch("size", "30");

	useEffect(() => {
		if (size) {
			dispatch({ type: "CHANGE_SIZE", size });
		}
	}, [size]);

	return (
		<>
			<div>
				<div>Размер</div>
				<div>
					{availableSizes.map((sizeObj) => (
						<label key={sizeObj.id}>
							<input
								key={sizeObj.id}
								ref={register}
								label={sizeObj.label}
								type="radio"
								name="size"
								value={sizeObj.size}
							/>
							{sizeObj.label}
						</label>
					))}
				</div>
			</div>
		</>
	);
};
