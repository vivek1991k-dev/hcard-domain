import Row from 'antd/lib/row';
import React from 'react';
import { Text } from '../../components/Text/Text.style';
import { FontSize } from '../../components/Text/variables';
import { ColorType } from '../../shared/colors';
import { CardContent } from './CardContent/CardContent.style';
import { CardHeader } from './CardHeader/CardHeader.style';

interface ICard {
	className?: string;
}

export const CardBase = (props: ICard) => {
	return (
		<div className={props.className}>
			<Row className={'preview-text-container'}>
				<div className={'preview-text'}>
					<Text
						ariaLabel={'hcard preview'}
						color={ColorType.FORM_HEADING}
						fontSize={FontSize.L}
						label={'HCARD PREVIEW'}
						shouldTruncate={false}
						isBold={true}
					/>
				</div>
			</Row>
			<Row className={'card-row'}>
				<div className={'card'}>
					<CardHeader />
					<CardContent />
				</div>
			</Row>
		</div>
	);
};
