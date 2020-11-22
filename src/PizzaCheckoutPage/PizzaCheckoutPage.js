import React from "react";

import { PizzaPreview } from "../shared/PizzaPreview";
import { PizzaDeliveryAddressForm } from "./PizzaDeliveryAddressForm";
import { PizzaPaymentForm } from "./PizzaPaymentForm";
import { OrderButton } from "./OrderButton";

export const PizzaCheckoutPage = () => {
	return (
		<>
			<PizzaPreview />
			<PizzaDeliveryAddressForm />
			<PizzaPaymentForm />
			<OrderButton />
		</>
	);
};
