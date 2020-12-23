import React from "react";
import { Link } from "react-router-dom";

import { PizzaPreview } from "../shared/PizzaPreview";

export const PizzaReceiptPage = () => {
	return (
		<>
			<h3>Заказ совершен</h3>
			<PizzaPreview />
			<Link to="/">На главную</Link>
		</>
	);
};
