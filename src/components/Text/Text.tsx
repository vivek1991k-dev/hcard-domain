import React from 'react';
import { ColorType } from '../../shared/colors';
import { FontSize } from './variables';

interface IText {
    ariaLabel: string;
    className?: string;
    color: ColorType;
    fontSize: FontSize;
    isBold: boolean;
    label: string;
    shouldTruncate: boolean;
}

export const TextBase = (props: IText): React.ReactElement => {
    return (
        <div className={props.className} aria-label={'overlay'}>
            <span aria-label={props.ariaLabel} className={props.className}>
                {props.label}
            </span>
        </div>
    );
}