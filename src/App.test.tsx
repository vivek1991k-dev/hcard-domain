import React from 'react';
import { render, screen } from '@testing-library/react';
import { App } from './App.style';
import { RecoilRoot } from 'recoil';
import { card as cardAtom } from './state/atoms';
import { mockCardAtom } from './test/atom';

describe('unit tests for Card component', () => {
	it('should render Card and shoudl display all the data', () => {
		render(
			<RecoilRoot initializeState={(snap) => snap.set(cardAtom, mockCardAtom)}>
				<App />
			</RecoilRoot>
		);
		screen.queryByText('Given Name Surname');
		screen.queryByText('Email@email.com');
		screen.queryByText('+1234123');
		screen.queryByText('House Name, Street');
		screen.queryByText('Suburb, NSW');
		screen.queryByText('1234');
		screen.queryByText('Australia');
	});
});
