import styled from 'styled-components';
import { ColorType, getColor } from '../../shared/colors';
import { CENTER_SELF, POSITION_END } from '../../shared/style';
import { CardBase } from './Card';

export const Card = styled(CardBase)`
    height: 100%;
    background-color: ${getColor(ColorType.CARD_CANVAS)};
    ${CENTER_SELF};
    flex-direction: column;
    min-height: 350px;

    && .ant-row {
        height: auto;
    }

    .preview-text-container {
        ${CENTER_SELF};
    }

    .preview-text {
        width: 90%;
        ${POSITION_END};
        flex-direction: column;
    }

    .card-row {
        ${CENTER_SELF};
    }

    .card {
        width: 90%;
    }
`;