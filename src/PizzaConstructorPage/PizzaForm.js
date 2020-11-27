import React from "react";
import { useForm } from "react-hook-form";

export function PizzaForm({ defaultValues, children, onSubmit }) {
	const methods = useForm({ defaultValues });
	const { handleSubmit } = methods;

	return (
		<form onSubmit={handleSubmit(onSubmit)}>
			{React.Children.map(children, (child) => {
				return React.createElement(child.type, {
					...{
						...child.props,
						register: methods.register,
						watch: methods.watch,
						key: child.props.name,
					},
				});
			})}
		</form>
	);
}
