import { BackTop } from 'antd';
import Col from 'antd/lib/col';
import useBreakpoint from 'antd/lib/grid/hooks/useBreakpoint';
import Row from 'antd/lib/row';
import React from 'react';
import { Button } from './components/Button/Button.style';
import { ButtonType } from './components/Button/variables';
import { Card } from './containers/Card/Card.style';
import { CardForm } from './containers/CardForm/CardForm.style';
import { getGridDimension } from './services/breakpoints';

interface IApp {
	className?: string;
}

export const AppBase = (props: IApp) => {
	// to get the colspan based on the screen size
	const screens = useBreakpoint();
	const cols = getGridDimension(screens);

	return (
		<div className={props.className}>
			<Row>
				<Col span={cols}>
					<Card />
				</Col>
				<Col span={cols}>
					<CardForm cols={cols} />
				</Col>
			</Row>
			<BackTop className={'back-to-top'} visibilityHeight={100}>
				<Button
					ariaLabel={'back to top button'}
					label={'Back to top'}
					type={ButtonType.BACK_TO_TOP}
				/>
			</BackTop>
		</div>
	);
};
