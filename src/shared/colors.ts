export enum ColorType {
	BLACK = 'black',
	BUTTON_TEXT = 'button_text',
	CARD_CANVAS = 'card_canvas',
	CARD_HEADER_BACKGROUND = 'card',
	CARD_LABEL = 'card_label',
	CREATE = 'create',
	FORM_HEADING = 'form_text',
	FORM_LABEL = 'form_label',
	FORM_NAME = 'form_name',
	PRIMARY_TEXT = 'primary_text',
	TITLE = 'title',
	UPLOAD = 'upload',
	WHITE = 'white',
}

export const Colors = {
	[ColorType.BLACK]: '#000000',
	[ColorType.BUTTON_TEXT]: '#FFFFFF',
	[ColorType.CARD_CANVAS]: '#E7E9EC',
	[ColorType.CARD_HEADER_BACKGROUND]: '#394F63',
	[ColorType.CARD_LABEL]: '#34495E',
	[ColorType.CREATE]: '#3FA9E2',
	[ColorType.FORM_HEADING]: '#B0B8BC',
	[ColorType.FORM_LABEL]: '#2C3E50',
	[ColorType.FORM_NAME]: '#2C3E50',
	[ColorType.PRIMARY_TEXT]: '#000000',
	[ColorType.TITLE]: '#657482',
	[ColorType.UPLOAD]: '#758E9D',
	[ColorType.WHITE]: '#FFFFFF',
};

export const getColor = (type: ColorType) => {
	return Colors[type];
};
