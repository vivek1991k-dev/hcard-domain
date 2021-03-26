import Button from 'antd/lib/button';
import React from 'react';
import { ButtonType } from './variables';

interface IButton {
	ariaLabel: string;
	className?: string;
	label?: string;
	onClick?: any;
	type: ButtonType;
}

export const ButtonBase = (props: IButton) => {
	return (
		<Button
			aria-label={props.ariaLabel}
			className={props.className}
			onClick={props.onClick}
			size={'large'}
		>
			{props.label}
		</Button>
	);
};
