import React from 'react';
import { cardMetadata } from '../../../metadata/card-metadata';
import { CardValue } from '../CardValue/CardValue.style';
import Divider from 'antd/lib/divider';
import { path } from 'ramda';
import { useRecoilValue } from 'recoil';
import { card as cardAtom } from '../../../state/atoms';
import Row from 'antd/lib/row';
import Col from 'antd/lib/col';

interface ICardContent {
	className?: string;
}

export const CardContentBase = (props: ICardContent) => {
	const card = useRecoilValue(cardAtom);

	// get the display value of a field
	const getFieldValue = (fieldData: ICardFieldData): string => {
		let fieldValue = '';
		fieldData.fields.forEach((value, index) => {
			const valueFromForm = path([value], card);
			if (index > 0 && valueFromForm !== '' && fieldValue !== '') {
				fieldValue = fieldValue + `${fieldData.delimiter}${valueFromForm}`;
			} else {
				fieldValue = fieldValue + valueFromForm;
			}
		});
		return fieldValue;
	};

	// generate field where there are multiple fields in a row
	const generateMultiFieldRowData = (
		rowData: ICardFieldData[],
		cols: number
	) => {
		return rowData.map((fieldData) => {
			const fieldValue = getFieldValue(fieldData);
			return (
				<Col key={fieldData.label} span={cols}>
					<CardValue
						addDivider={false}
						label={fieldData.label}
						value={fieldValue}
					/>
				</Col>
			);
		});
	};

	// generate the row data
	const generateRowData = (rowData: ICardFieldData[]) => {
		// checks if the row contains multiple fields
		if (rowData.length > 1) {
			const divider = <Divider className={'divider'} />;
			const cols = 24 / rowData.length;
			const key = rowData.map((field) => field.label).toString();
			return (
				<Row key={key} className={'multivalue-row'}>
					{generateMultiFieldRowData(rowData, cols)}
					{divider}
				</Row>
			);
		} else {
			return rowData.map((fieldData) => {
				const fieldValue = getFieldValue(fieldData);
				return (
					<Row key={fieldData.label}>
						<Col span={24}>
							<CardValue
								addDivider={true}
								label={fieldData.label}
								value={fieldValue}
							/>
						</Col>
					</Row>
				);
			});
		}
	};

	// generate each row based on the card metadata
	const generateContent = (): React.ReactNode[] =>
		cardMetadata.content.map((rowData) => {
			return generateRowData(rowData);
		});

	return <div className={props.className}>{generateContent()}</div>;
};
