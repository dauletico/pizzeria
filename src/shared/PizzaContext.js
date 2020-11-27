import { createContext, useContext, useReducer } from "react";
import { pizzaData } from "./pizzaData.js";

const PizzaContext = createContext();

const initialOrder = {
	ingredients: {
		size: ["30"],
		pastry: ["thin"],
		sauce: ["tomato"],
		cheese: [],
		vegetables: [],
		meat: [],
	},
	showPreview: false,
	orderSum: 200,
};

function pizzaReducer(state, action) {
	switch (action.type) {
		case "CHANGE_SIZE": {
			const newState = { ...state };
			newState.ingredients.size = [action.size];
			newState.orderSum = getTotalSum(newState.ingredients);
			return newState;
		}
		case "CHANGE_PASTRY": {
			const newState = { ...state };
			newState.ingredients.pastry = [action.pastry];
			newState.orderSum = getTotalSum(newState.ingredients);
			return newState;
		}
		case "CHANGE_SAUCE": {
			const newState = { ...state };
			newState.ingredients.sauce = [action.sauce];
			newState.orderSum = getTotalSum(newState.ingredients);
			return newState;
		}
		case "CHANGE_CHEESE": {
			const newState = { ...state };
			newState.ingredients.cheese = action.cheese;
			newState.orderSum = getTotalSum(newState.ingredients);
			return newState;
		}
		case "CHANGE_VEGETABLES": {
			const newState = { ...state };
			newState.ingredients.vegetables = action.vegetables;
			newState.orderSum = getTotalSum(newState.ingredients);
			return newState;
		}
		case "CHANGE_MEAT": {
			const newState = { ...state };
			newState.ingredients.meat = action.meat;
			newState.orderSum = getTotalSum(newState.ingredients);
			return newState;
		}
		case "SHOW_PREVIEW": {
			const newState = { ...state };
			newState.showPreview = !state.showPreview;
			return newState;
		}
		default:
			return state;
	}
}

function getTotalSum(ingredients) {
	let totalSum = 0;
	const pizzaDataObjects = {};
	for (const ingredient in ingredients) {
		ingredients[ingredient].forEach((stateItem) => {
			pizzaData[ingredient].forEach((dataItem) => {
				if (stateItem === dataItem[ingredient]) {
					pizzaDataObjects[ingredient] = dataItem;
				}
			});
		});
	}
	console.log(pizzaDataObjects);
	/* for (const ingredientObj in pizzaDataObjects) {
		pizzaDataObjects[ingredientObj].forEach(
			(item) => (totalSum += item.price)
		);
	} */
	return totalSum;
}

const PizzaProvider = (props) => {
	const [currentPizza, dispatch] = useReducer(pizzaReducer, initialOrder);

	const pizzaData = { currentPizza, dispatch };

	return <PizzaContext.Provider value={pizzaData} {...props} />;
};

function usePizzaContext() {
	return useContext(PizzaContext);
}

export { usePizzaContext, PizzaProvider };
