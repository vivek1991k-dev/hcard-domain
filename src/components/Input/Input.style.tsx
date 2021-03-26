import styled from 'styled-components';
import { FontSize } from '../Text/variables';
import { InputBase } from './Input';

export const Input = styled(InputBase)`
    margin: 0;

    .input-field {
        font-size: ${FontSize.L};
        border-radius: 5px;
    }
`;