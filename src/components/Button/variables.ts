import { ColorType, getColor } from "../../shared/colors";

export enum ButtonType {
    BACK_TO_TOP = 'backToTop',
    CREATE = 'create',
    UPLOAD = 'upload'
}

const CREATE_STYLE = `
    background-color: ${getColor(ColorType.CREATE)};
    border-color: ${getColor(ColorType.CREATE)};
    color: ${getColor(ColorType.BUTTON_TEXT)};
`;

const UPLOAD_STYLE = `
    background-color: ${getColor(ColorType.UPLOAD)};
    border-color: ${getColor(ColorType.UPLOAD)};
    color: ${getColor(ColorType.BUTTON_TEXT)};
`;

const BACK_TO_TOP_STYLE = `
    background-color: ${getColor(ColorType.CARD_HEADER_BACKGROUND)};
    border-color: ${getColor(ColorType.CARD_HEADER_BACKGROUND)};
    color: ${getColor(ColorType.BUTTON_TEXT)};
`

export const ButtonStyles = {
    [ButtonType.BACK_TO_TOP]: BACK_TO_TOP_STYLE,
    [ButtonType.CREATE]: CREATE_STYLE,
    [ButtonType.UPLOAD]: UPLOAD_STYLE
}