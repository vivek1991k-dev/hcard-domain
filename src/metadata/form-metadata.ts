export enum DataType {
	STRING = 'string',
	EMAIL = 'email',
	NUMBER = 'number',
	PHONE = 'phone',
}

export const formMetadata: IFormMetadata = {
	name: 'hCard Builder',
	image:
		'https://clipground.com/images/head-and-shoulders-silhouette-clipart.jpg',
	details: [
		{
			name: 'personal',
			displayName: 'PERSONAL DETAILS',
			fields: [
				{
					name: 'givenName',
					displayName: 'GIVEN NAME',
					defaultValue: '',
					type: DataType.STRING,
					required: true,
				},
				{
					name: 'surName',
					displayName: 'SURNAME',
					defaultValue: '',
					type: DataType.STRING,
					required: true,
				},
				{
					name: 'email',
					displayName: 'EMAIL',
					defaultValue: '',
					type: DataType.EMAIL,
					required: true,
				},
				{
					name: 'phone',
					displayName: 'PHONE',
					defaultValue: '',
					type: DataType.PHONE,
					required: true,
				},
			],
		},
		{
			name: 'address',
			displayName: 'ADDRESS',
			fields: [
				{
					name: 'houseName',
					displayName: 'HOUSE NAME OR #',
					defaultValue: '',
					type: DataType.STRING,
					required: true,
				},
				{
					name: 'street',
					displayName: 'STREET',
					defaultValue: '',
					type: DataType.STRING,
					required: true,
				},
				{
					name: 'suburb',
					displayName: 'SUBURB',
					defaultValue: '',
					type: DataType.STRING,
					required: true,
				},
				{
					name: 'state',
					displayName: 'STATE',
					defaultValue: '',
					type: DataType.STRING,
					required: true,
				},
				{
					name: 'postcode',
					displayName: 'POSTCODE',
					defaultValue: '',
					type: DataType.NUMBER,
					required: true,
				},
				{
					name: 'country',
					displayName: 'COUNTRY',
					defaultValue: '',
					type: DataType.STRING,
					required: true,
				},
			],
		},
	],
};
