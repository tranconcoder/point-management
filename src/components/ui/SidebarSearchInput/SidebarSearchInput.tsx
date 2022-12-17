import { useState } from 'react';
import {
	ClearInputButton,
	ClearInputButtonHover,
	ClearInputButtonWrapper,
	Input,
	InputPanelContainer,
	InputWrapper,
	SubmitButton,
} from './styles';

export default function SidebarSearchInput() {
	const [inputValue, setInputValue] = useState('');

	const handleChangeInputValue = (e: any) =>
		setInputValue((e.target.value as string).trimStart());
	const handleClearInputValue = (e: any) => setInputValue('');

	return (
		<InputPanelContainer>
			<InputWrapper>
				<Input
					placeholder="Search...."
					value={inputValue}
					onChange={handleChangeInputValue}
				/>

				{inputValue && (
					<ClearInputButtonWrapper onClick={handleClearInputValue}>
						<ClearInputButton className="icon" />
						<ClearInputButtonHover className="icon-active" />
					</ClearInputButtonWrapper>
				)}
			</InputWrapper>

			<SubmitButton />
		</InputPanelContainer>
	);
}
