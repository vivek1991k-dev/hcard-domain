export const cardMetadata: ICardMetadata = {
	heading: {
		fields: ['givenName', 'surName'],
		delimiter: ' ',
	},
	avatar: {
		source: 'avatar',
	},
	labelWidth: 70,
	content: [
		[
			{
				label: 'EMAIL',
				fields: ['email'],
				delimiter: '',
			},
		],
		[
			{
				label: 'PHONE',
				fields: ['phone'],
				delimiter: '',
			},
		],
		[
			{
				label: 'ADDRESS',
				fields: ['houseName', 'street'],
				delimiter: ', ',
			},
		],
		[
			{
				label: '',
				fields: ['suburb', 'state'],
				delimiter: ', ',
			},
		],
		[
			{
				label: 'POSTCODE',
				fields: ['postcode'],
				delimiter: '',
			},
			{
				label: 'COUNTRY',
				fields: ['country'],
				delimiter: '',
			},
		],
	],
};
