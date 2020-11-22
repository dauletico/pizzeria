import React from "react";
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";

export const LoginPage = () => {
	const history = useHistory();

	const handleLogin = () => {
		history.push("/pizza-order-history");
	};

	return (
		<>
			<form onSubmit={handleLogin}>
				<fieldset>
					<legend>Авторизация</legend>
					<label>
						<input type="email" />
						Email:
					</label>
					<label>
						<input type="password" />
						Пароль:
					</label>
				</fieldset>
				<button type="submit">Авторизоваться</button>
			</form>
			<Link to="/registration">Регистрация</Link>
			<Link to="/">На главную</Link>
		</>
	);
};
