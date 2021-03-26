import Divider from 'antd/lib/divider';
import React from 'react';
import { Text } from '../../../components/Text/Text.style';
import { FontSize } from '../../../components/Text/variables';
import { ColorType } from '../../../shared/colors';

export interface ICardValue {
    label: string;
    value: string;
    addDivider: boolean;
    className?: string;
}

export const CardValueBase = (props: ICardValue) => {
    return (
        <>
            <div className={props.className}>
                <div className={'label'}>
                    <Text
                        ariaLabel={props.label}
                        color={ColorType.FORM_LABEL}
                        fontSize={FontSize.M}
                        isBold={false}
                        label={props.label}
                        shouldTruncate={false}
                    />
                </div>
                <div className={'value'}>
                    <Text
                        ariaLabel={props.value}
                        color={ColorType.PRIMARY_TEXT}
                        fontSize={FontSize.L}
                        isBold={false}
                        label={props.value}
                        shouldTruncate={true}
                    />
                </div>
            </div>
            {props.addDivider && <Divider className={'divider'}/>}
        </>
    );
}