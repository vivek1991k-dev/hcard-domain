import { atom } from 'recoil';
import { generateInitialData } from '../services/form';

export const card = atom({
	key: 'card',
	default: generateInitialData()
});