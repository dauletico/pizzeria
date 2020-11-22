import React from "react";
import { PizzaConstructor } from "./pizzaConstructor/PizzaConstructor";

import { PizzaProvider } from "./pizzaConstructor/PizzaContext";

const App = () => {
	return (
		<div>
			<PizzaProvider>
				<PizzaConstructor />
			</PizzaProvider>
		</div>
	);
};

export default App;
