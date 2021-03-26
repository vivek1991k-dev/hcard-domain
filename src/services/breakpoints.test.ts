import { getGridDimension } from './breakpoints';

const defaultScreens = {
	xs: true,
	sm: true,
	md: true,
	lg: true,
	xl: true,
	xxl: true,
};

describe('unit tests for breakpoints services', () => {
	it('should return 12 columns for xxl', () => {
		const cols = getGridDimension(defaultScreens);
		expect(cols).toEqual(12);
	});

	it('should return 24 columns for sm', () => {
		const smallScreen = {
			xs: true,
			sm: true,
			md: false,
			lg: false,
			xl: false,
			xxl: false,
		};
		const cols = getGridDimension(smallScreen);
		expect(cols).toEqual(24);
	});

	it('should return 24 columns for invalid input', () => {
		const cols = getGridDimension({});
		expect(cols).toEqual(24);
	});
});
