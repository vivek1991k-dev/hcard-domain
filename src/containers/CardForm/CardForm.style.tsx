import styled from 'styled-components';
import { Button } from '../../components/Button/Button.style';
import { CENTER_CHILDREN } from '../../shared/style';
import { CardFormBase } from './CardForm';

export const CardForm = styled(CardFormBase)`
    padding: 20px;
    height: 100%;
    width:100%;

    ${CENTER_CHILDREN};

    .form-block {
        margin-top: 20px;
    }

    .divider {
        margin: 0;
    }

    .ant-col-12:nth-child(odd) {
        padding-right: 10px;
    }

    .ant-col-12:nth-child(even) {
        padding-left: 10px;
    }

    .block-fields {
        margin-top: 10px;
        .ant-row {
            flex-direction: row;
            justify-content: space-evenly;
        }
    }

    .input-block {
        margin-top: 10px;
    }

    .actions {
        margin-top: 20px;
        
        .ant-row {
            flex-direction: row;
            justify-content: space-evenly;
        }

        ${Button} {
            width: 100%;
            margin-bottom: 10px;
        }
    }
`;