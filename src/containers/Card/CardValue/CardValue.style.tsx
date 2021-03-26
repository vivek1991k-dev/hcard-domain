import styled from 'styled-components';
import { cardMetadata } from '../../../metadata/card-metadata';
import { ColorType, getColor } from '../../../shared/colors';
import { CENTER_SELF, POSITION_END } from '../../../shared/style';
import { CardValueBase } from './CardValue';

export const CardValue = styled(CardValueBase)`
    ${CENTER_SELF};
    margin-top: 10px;
    height: 22px;

    .label {
        width: ${cardMetadata.labelWidth}px;
        ${POSITION_END};
    }

    .value {
        width: calc(100% - ${cardMetadata.labelWidth}px);
    }

    .divider {
        margin: 0;
        margin-top: 2px;
    }
`;