import React from "react";

export const PizzaPaymentForm = () => {
	return (
		<>
			<form>
				<fieldset>
					<legend>Оплата картой:</legend>
					<label>
						Номер карты:
						<input type="number" />
					</label>
					<label>
						Срок:
						<input type="text" />
					</label>
					<label>
						CVC:
						<input type="number" />
					</label>
				</fieldset>
			</form>
		</>
	);
};
