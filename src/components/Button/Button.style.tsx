import styled from 'styled-components';
import { ButtonBase } from './Button';
import { ButtonStyles, ButtonType } from './variables';

const getButtonStyling = (type: ButtonType) => {
    return ButtonStyles[type];
};

export const Button = styled(ButtonBase)`
	${(props) => props.type && getButtonStyling(props.type)};
`;
