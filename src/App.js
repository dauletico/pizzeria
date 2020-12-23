import React from "react";
import { Route, Link, Switch } from "react-router-dom";

import { RegistrationPage } from "./PizzaRegistrationPage";
import { LoginPage } from "./PizzaLoginPage";
import { PizzaConstructorPage } from "./PizzaConstructorPage";
import { PizzaCheckoutPage } from "./PizzaCheckoutPage";
import { PizzaOrderHistoryPage } from "./PizzaOrderHistoryPage";
import { PizzaReceiptPage } from "./PizzaReceiptPage";

import { PizzaProvider } from "./shared/PizzaContext";
import { AuthProvider } from "./AuthContext";

const App = () => {
	return (
		<>
			<nav>
				<Link to="/login">Иконка профиля</Link>
			</nav>
			<AuthProvider>
				<PizzaProvider>
					<Switch>
						<Route exact path="/">
							<PizzaConstructorPage />
						</Route>
						<Route path="/registration">
							<RegistrationPage />
						</Route>
						<Route path="/login">
							<LoginPage />
						</Route>
						<Route path="/pizza-checkout">
							<PizzaCheckoutPage />
						</Route>
						<Route path="/pizza-receipt">
							<PizzaReceiptPage />
						</Route>
						<Route path="/pizza-order-history">
							<PizzaOrderHistoryPage />
						</Route>
					</Switch>
				</PizzaProvider>
			</AuthProvider>
		</>
	);
};

export default App;
