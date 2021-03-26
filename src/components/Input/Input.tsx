import React from 'react';
import { ColorType } from '../../shared/colors';
import { Form, Input } from 'antd';

interface IInput {
    ariaLabel: string;
    className?: string;
    value?: string;
    textColor?: ColorType;
    onChange: any;
}

export const InputBase = (props: IInput) => {
    return (
        <Form.Item className={props.className}>
            <Input
                aria-label={props.ariaLabel}
                className={'input-field'}
                color={props.textColor}
                onChange={props.onChange}
                value={props.value}
            />
        </Form.Item>
    );
};
