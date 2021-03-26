import { last } from 'ramda';
import { Breakpoints, ContainerCols } from '../shared/breakpoints';

export const getGridDimension = (screens: any) => {
	const currentBreakpoint: Breakpoints =
		(last(
			Object.entries(screens).filter((screen) => !!screen[1])
		)?.[0] as Breakpoints) ?? Breakpoints.xs;

	return ContainerCols[currentBreakpoint];
};
