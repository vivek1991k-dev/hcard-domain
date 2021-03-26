import styled from 'styled-components';
import { ColorType, getColor } from '../../../shared/colors';
import { CardContentBase } from './CardContent';

export const CardContent = styled(CardContentBase)`
    background-color: ${getColor(ColorType.WHITE)};
    padding: 20px;

    && .multivalue-row {
        display: flex;
        flex-direction: row;
    }

    .divider {
        margin: 0;
    }
`;