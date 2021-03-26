import styled from 'styled-components';
import { ColorType, getColor } from '../../../shared/colors';
import { POSITION_END, POSITION_START } from '../../../shared/style';
import { CardHeaderBase } from './CardHeader';

const IMAGE_DIMENSION = '100px';
const HEADER_HEIGHT = '100px'

export const CardHeader = styled(CardHeaderBase)`
    height: ${HEADER_HEIGHT};
    ${POSITION_START};
    background-color: ${getColor(ColorType.CARD_HEADER_BACKGROUND)};
    color: ${getColor(ColorType.WHITE)};
    padding: 20px;
    justify-content: space-between;
    width: 100%;

    .header {
        height: 100%;
        ${POSITION_END};
        max-width: calc(100% - ${IMAGE_DIMENSION} - 40px);
    }

    .avatar {
        border: 1px solid ${getColor(ColorType.CARD_CANVAS)};
        background-color: ${getColor(ColorType.WHITE)};
        width: ${IMAGE_DIMENSION};
        height: ${IMAGE_DIMENSION};
    }
`;
