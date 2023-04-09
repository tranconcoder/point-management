import { Input, Label, Wrapper } from "./styles";

interface HomePageInputProps {
	label: string;
	value: string;
	onChange: (e: any) => void;
}

export default function HomePageInfoField({
	label,
	value,
	onChange,
}: HomePageInputProps) {
	return (
		<Wrapper>
			<Label>{label}</Label>
			<Input value={value} onChange={onChange}/>
		</Wrapper>
	);
}
