import React from "react";

export const PizzaDeliveryAddressForm = () => {
	return (
		<>
			<form>
				<fieldset>
					<legend>Адрес доставки:</legend>
					<label>
						Улица:
						<input type="text" />
					</label>
					<label>
						Подъезд:
						<input type="text" />
					</label>
					<label>
						Этаж:
						<input type="number" />
					</label>
					<label>
						Квартира:
						<input type="text" />
					</label>
				</fieldset>
			</form>
		</>
	);
};
