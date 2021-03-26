interface IFormField {
	name: string;
	displayName: string;
	defaultValue: any;
	type: DataType;
	required: boolean;
}

interface IFormBlock {
	name: string;
	displayName: string;
	fields: IFormField[];
}

interface IFormMetadata {
	name: string;
	image: string;
	details: IFormBlock[];
}
