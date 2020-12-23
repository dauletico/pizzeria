import React from "react";
import { Link, useHistory } from "react-router-dom";

export const RegistrationPage = () => {
	const history = useHistory();

	const handleRegistration = () => {
		history.push("/login");
	};

	return (
		<>
			<form onSubmit={handleRegistration}>
				<fieldset>
					<legend>Регистрация</legend>
					<label>
						<input type="email" />
						Email:
					</label>
					<label>
						<input type="password" />
						Пароль:
					</label>
				</fieldset>
				<button type="submit">Зарегистрироваться</button>
			</form>
			<Link to="/login">Авторизация</Link>
			<Link to="/">На главную</Link>
		</>
	);
};
