import Col from 'antd/lib/col';
import useBreakpoint from 'antd/lib/grid/hooks/useBreakpoint';
import Row from 'antd/lib/row';
import React from 'react';
import { atom, useRecoilState } from 'recoil';
import { Input } from './components/Input/Input.style';
import { getGridDimension } from './services/breakpoints';

interface IApp {
	className?: string;
}

export const cardAtom = atom({
	key: 'card',
	default: {
        givenName: ''
    }
});

export const AppBase = (props: IApp) => {
    const [card, setCard] = useRecoilState(cardAtom);

	// to get the colspan based on the screen size
	const screens = useBreakpoint();
	const cols = getGridDimension(screens);

    const onChange = (event: any) => {
        setCard({
            ...card,
            givenName: event.target.value,
        });
    }

	return (
		<div className={props.className}>
			<Row>
				<Col span={cols}>{card.givenName}</Col>
				<Col span={cols}>
                    <Input
                        key={'name'}
                        ariaLabel={`input field for given name`}
                        value={card.givenName}
                        onChange={onChange}
                    />
                </Col>
			</Row>
		</div>
	);
};
