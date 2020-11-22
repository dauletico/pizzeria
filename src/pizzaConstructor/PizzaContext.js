import { createContext, useContext, useReducer } from "react";

const PizzaContext = createContext();

const initialOrder = {
	ingredients: {
		size: [{ id: 0, size: 30, label: "30 cm", price: 200 }],
		pastry: [{ id: 0, pastry: "thin", label: "Тонкое", price: 0 }],
		sauce: [{ id: 0, sauce: "tomato", label: "Томатный", price: 0 }],
		cheese: [],
		vegetables: [],
		meat: [],
	},
	showOrderDetailsPage: false,
	orderSum: 200,
};

const CHANGE_SIZE = "CHANGE_SIZE";
const CHANGE_PASTRY = "CHANGE_PASTRY";
const CHANGE_SAUCE = "CHANGE_SAUCE";
const CHANGE_CHEESE = "CHANGE_CHEESE";
const CHANGE_VEGETABLES = "CHANGE_VEGETABLES";
const CHANGE_MEAT = "CHANGE_MEAT";
const SHOW_ORDER_DETAILS = "SHOW_ORDER_DETAILS";

function pizzaReducer(state, action) {
	switch (action.type) {
		case CHANGE_SIZE: {
			const newState = { ...state };
			newState.ingredients.size = [action.size];
			newState.orderSum = getTotalSum(newState.ingredients);
			return newState;
		}
		case CHANGE_PASTRY: {
			const newState = { ...state };
			newState.ingredients.pastry = [action.pastry];
			newState.orderSum = getTotalSum(newState.ingredients);
			return newState;
		}
		case CHANGE_SAUCE: {
			const newState = { ...state };
			newState.ingredients.sauce = [action.sauce];
			newState.orderSum = getTotalSum(newState.ingredients);
			return newState;
		}
		case CHANGE_CHEESE: {
			const newState = { ...state };
			newState.ingredients.cheese = action.cheese;
			newState.orderSum = getTotalSum(newState.ingredients);
			return newState;
		}
		case CHANGE_VEGETABLES: {
			const newState = { ...state };
			newState.ingredients.vegetables = action.vegetables;
			newState.orderSum = getTotalSum(newState.ingredients);
			return newState;
		}
		case CHANGE_MEAT: {
			const newState = { ...state };
			newState.ingredients.meat = action.meat;
			newState.orderSum = getTotalSum(newState.ingredients);
			return newState;
		}
		case SHOW_ORDER_DETAILS: {
			const newState = { ...state };
			newState.showOrderDetailsPage = !state.showOrderDetailsPage;
			return newState;
		}
		default:
			return state;
	}
}

function getTotalSum(ingredients) {
	let totalSum = 0;
	for (const ingredient in ingredients) {
		ingredients[ingredient].forEach((item) => (totalSum += item.price));
	}
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
