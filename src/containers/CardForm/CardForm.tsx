import { Button } from '../../components/Button/Button.style';
import { ButtonType } from '../../components/Button/variables';
import { card as cardAtom } from '../../state/atoms';
import { formMetadata } from '../../metadata/form-metadata';
import { Input } from '../../components/Input/Input.style';
import { path } from 'ramda';
import { Text } from '../../components/Text/Text.style';
import { useRecoilState } from 'recoil';
import { ColorType } from '../../shared/colors';
import { FontSize } from '../../components/Text/variables';
import { scrollToTop } from '../../services/form';
import Divider from 'antd/lib/divider';
import React from 'react';
import Row from 'antd/lib/row';
import Col from 'antd/lib/col';
import Form from 'antd/lib/form';

interface ICardForm {
	className?: string;
	cols: number;
}

export const imageUrl = 'https://www.iconfinder.com/data/icons/small-n-flat/24/user-alt-512.png';

export const CardFormBase = (props: ICardForm) => {
	const [card, setCard] = useRecoilState(cardAtom);

	const getFormItem = (field: IFormField) => {
		const onChange = (event: any) =>
			setCard({
				...card,
				[field.name]: event.target.value,
			});
		return (
			<Col key={field.name} className={'input-block'} span={props.cols}>
				<Text
					ariaLabel={field.displayName}
					color={ColorType.FORM_LABEL}
					fontSize={FontSize.L}
					isBold={false}
					label={field.displayName}
					shouldTruncate={false}
				/>
				<Input
					key={field.name}
					type={field.type}
					ariaLabel={`input field for ${field.displayName}`}
					value={path([field.name], card)}
					onChange={onChange}
				/>
			</Col>
		);
	};

	const generateFields = (fields: IFormField[]) => {
		return fields.map((field) => {
			return getFormItem(field);
		});
	};

	const generateFormBlock = (formBlock: IFormBlock) => {
		return (
			<div key={formBlock.name}>
				<div className={'form-block'}>
					<Text
						ariaLabel={`${formBlock.displayName} block`}
						color={ColorType.FORM_HEADING}
						fontSize={FontSize.M}
						isBold={true}
						label={formBlock.displayName}
						shouldTruncate={false}
					/>
				</div>
				<Divider className={'divider'} />
				<div className={'block-fields'}>
					<Row>{generateFields(formBlock.fields)}</Row>
				</div>
			</div>
		);
	};

	const generateForm = () => {
		return formMetadata.details.map((block) => {
			return generateFormBlock(block);
		});
	};

	const createCard = () => {
		localStorage.setItem('hCard', JSON.stringify(card));
		scrollToTop();
	};

	const uploadAvatar = () => {
		setCard({
			...card,
			image: imageUrl
		});
		scrollToTop();
	};

	return (
		<div className={props.className}>
			<Form className={'card-form'}>
				<div className={'header'}>
					<Text
						ariaLabel={'form heading'}
						color={ColorType.FORM_NAME}
						fontSize={FontSize.XXL}
						isBold={true}
						label={formMetadata.name}
						shouldTruncate={false}
					/>
				</div>
				{generateForm()}
				<div className={'actions'}>
					<Row>
						<Col span={props.cols}>
							<Button
								ariaLabel={'button to upload avatar'}
								className={'upload-button'}
								label={'Upload Avatar'}
								onClick={uploadAvatar}
								type={ButtonType.UPLOAD}
							/>
						</Col>
						<Col span={props.cols}>
							<Button
								ariaLabel={'button to create hCard'}
								className={'create-button'}
								label={'Create hCard'}
								onClick={createCard}
								type={ButtonType.CREATE}
							/>
						</Col>
					</Row>
				</div>
			</Form>
		</div>
	);
};
