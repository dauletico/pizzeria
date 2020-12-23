import React from "react";

export const InputRef = React.forwardRef(
	({ label, type, name, onChange, ...props }, ref) => {
		return (
			<label>
				<input
					ref={ref}
					type={type}
					name={name}
					onChange={onChange}
					{...props}
				/>
				{label}
			</label>
		);
	}
);
