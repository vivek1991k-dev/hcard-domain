import styled from 'styled-components';
import { getColor } from '../../shared/colors';
import { TextBase } from './Text';
import { FontWeight } from './variables';

const TEXT_TRUNCATE = `
    white-space: pre;
    overflow: hidden;
    text-overflow: ellipsis;
`

export const Text = styled(TextBase)`
    color: ${props => getColor(props.color)};
    font-size: ${props => props.fontSize};
    font-weight: ${props => props.isBold ? FontWeight.BOLD : FontWeight.REGULAR};
    ${props => props.shouldTruncate && TEXT_TRUNCATE};
`;