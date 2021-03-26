import { path } from 'ramda';
import React from 'react';
import { useRecoilValue } from 'recoil';
import { card as cardAtom } from '../../../state/atoms';
import { cardMetadata } from '../../../metadata/card-metadata';
import { Image } from 'antd';
import { Text } from '../../../components/Text/Text.style';
import { FontSize } from '../../../components/Text/variables';
import { ColorType } from '../../../shared/colors';

interface ICardHeader {
	className?: string;
}

export const CardHeaderBase = (props: ICardHeader) => {
	const card = useRecoilValue(cardAtom);

	const headerData: string[] = cardMetadata.heading.fields.map((field) => {
		return path([field], card);
	}) as string[];

	let headerDisplay = '';
	headerData.forEach((field, index) => {
		if (index > 0) {
			headerDisplay =
				headerDisplay + `${cardMetadata.heading.delimiter}${field}`;
		} else {
			headerDisplay = headerDisplay + field;
		}
	});

	return (
		<div className={props.className}>
			<div className={'header'}>
				<Text
					ariaLabel={'name'}
					fontSize={FontSize.XL}
					isBold={true}
					shouldTruncate={true}
					label={headerDisplay}
					color={ColorType.WHITE}
				/>
			</div>
			<div className={'avatar'}>
				<Image src={card.image} preview={false} />
			</div>
		</div>
	);
};
